export const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
export const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';
export const URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
