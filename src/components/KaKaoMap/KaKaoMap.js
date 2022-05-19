import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MAP_API_KEY } from '../../auth';

const { kakao } = window;

const KaKaoMap = ({ restaurants, currentMenuId }) => {
  const [shopInfo, setShopInfo] = useState([]);

  useEffect(() => {
    currentMenuId === 0 &&
      fetch(
        `http://openapi.seoul.go.kr:8088/${MAP_API_KEY}/json/CrtfcUpsoInfo/1/1000/`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
        .then(res => res.json())
        .then(res => {
          const seoulFoodStore = res.CrtfcUpsoInfo.row.map(result => {
            return {
              title: result.UPSO_NM,
              latlng: new kakao.maps.LatLng(
                parseFloat(result.Y_DNTS),
                parseFloat(result.X_CNTS)
              ),
              address: result.RDN_CODE_NM,
              category: result.BIZCND_CODE_NM,
              tellNo: result.TEL_NO,
            };
          });

          setShopInfo(seoulFoodStore);
        });
  }, [restaurants]);

  useEffect(() => {
    const storeInfoList = restaurants.map(data => {
      return {
        title: data.name,
        latlng: new kakao.maps.LatLng(data.latitude, data.longitude),
        address: data.address,
        openTime: data.open_time,
        closeTime: data.cloase_time,
      };
    });
    currentMenuId > 0 && setShopInfo(storeInfoList);
  }, [restaurants]);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.504056, 127.047229),
      level: 8,
    };

    const map = new kakao.maps.Map(container, options);
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

    const imageSize = new kakao.maps.Size(24, 35);

    shopInfo.length &&
      shopInfo.forEach(shop => {
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        const marker = new kakao.maps.Marker({
          map,
          position: shop.latlng,
          title: shop.title,
          image: markerImage,
        });

        const content = `
        <div className="overLayWrapper" style='position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;font-size: 12px;line-height: 1.5; '>
        <div className="overLayContainer" style='position: relative;width:306px;height: 120px;border-radius: 20px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;background: #fff; box-shadow: 2px 2px 2px 1px gray;'>
          <div className="shopName" style='position: absolute;padding:4px 0 0 5px;width:306px;height: 30px;background: #5CC8F0;border-bottom: 1px solid #ddd;font-size: 15px;font-weight: bold; border-radius:10px 10px 0 0; color: #fff; '>
            ${shop.title}
          </div>
          <div className="shopContent">
            <div className="shopImg" style='position: absolute;top: 35px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden; border-style:none;'>
              <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPxnqX%2FbtrCakOPeQx%2FX2I6QkA9Y13DXodMhCW2k1%2Fimg.png" alt="" style="width:100%; height:100%; "/>
            </div>
            <div className="shopAddress" style='display:flex; align-items:flex-start;  flex-direction:column; width:200px; margin: 13px 0 0 85px;padding-top:40px; font-size: 11px;font-weight:900;color: #888;margin-top: -2px;'>
            <p style='width:100%; white-space:normal; word-break:keep-all;'>주소 : <span style='font-weight:500;'>${shop.address}<span></p>
            <p>종류 : <span style='font-weight:500;'>${shop.category}<span></p>
            <p>전화번호 : <span style='font-weight:500;'>${shop.tellNo}<span></p>
            </div>

          </div>
        </div>
      </div>
    </div>
        `;

        const overlay = new kakao.maps.CustomOverlay({
          content,
          position: marker.getPosition(),
        });

        kakao.maps.event.addListener(marker, 'mouseover', function () {
          overlay.setMap(map);
        });

        kakao.maps.event.addListener(marker, 'mouseout', function () {
          overlay.setMap(null);
        });
      });
  }, [shopInfo]);

  return <KakaoMapDiv />;
};
export default KaKaoMap;

const KakaoMapDiv = styled.div.attrs({
  id: 'map',
})`
  width: 800px;
  height: 400px;
  margin: 0 auto;
  bottom: 30px;
  border: 1px solid black;
  border-radius: 30px;
`;
