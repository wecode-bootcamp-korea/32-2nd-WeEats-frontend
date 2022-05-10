import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from '../../auth';

function OAuth() {
  const [token, setToken] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const code = location.search.split('code=')[1];

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    })
      .then(res => res.json())
      .then(res => setToken(res.access_token));
  });

  useEffect(() => {
    token &&
      fetch('http://10.58.0.45:8000/users/login', {
        method: 'POST',
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem('token', res.access_token);
          navigate('/main');
        });
  }, [token, navigate]);

  return <div>덕우님</div>;
}

export default OAuth;
