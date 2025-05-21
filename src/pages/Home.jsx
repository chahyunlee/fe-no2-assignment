import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import logoImg from "../assets/pokemon_logo.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap : 20px;
`;

const Logo = styled.img`
  width: 50%;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  background-color:#ff0000;
  border: none;
  border-radius: 4px;
  color:#ffffff;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color:#C80036;
  }
`;

export const HomePage = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate('/dex');
  };

  return (
    <Container>
      <Logo src = {logoImg} alt = "logo"/>
      <StartButton onClick={goToDex}>포켓몬 도감 시작하기</StartButton>
    </Container>
  );
};
