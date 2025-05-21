import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate('/dex');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={goToDex}>시작하기</button>
    </div>
  );
};
