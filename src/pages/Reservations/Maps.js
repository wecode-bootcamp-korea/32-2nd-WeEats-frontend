import React, { useEffect } from 'react';
const { kakao } = window;

const Maps = ({ latitude, longitude }) => {
  useEffect(() => {
    const mapContainer = document.getElementById('map'),
      mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    let marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(latitude, longitude),
    });

    marker.setMap(map);
  }, [latitude, longitude]);

  return <div id="map" style={{ width: '300px', height: '300px' }} />;
};

export default Maps;
