import React from 'react';
import styled from 'styled-components'
import MOCK_DATA from '../data/mock'
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap : 13px;
`;
const PokemonImg = styled.img`
  width: 15%;
`
const PokemonName = styled.p`
  margin-bottom: 10px;
  color: #ff0000;
  font-size: 20px;
  font-weight: 600;
`
const PokemonType = styled.p`
  font-size: 15px;
`
const PokemonDescription = styled.p`
  font-size: 15px;
`

const BackButton = styled.button`
  margin-top:10px;
  width: 100px;
  height: 35px;
  background-color:#f0f0f0;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: border 0.3s ease;

  &:hover{
    border: 1px solid #CB0404;
  }
`

export const PokemonDetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  const pokemon = MOCK_DATA.find(pokemonInfo => String(pokemonInfo.id) === id)

  const handleBack = () => {
  navigate('/dex')
  }

  if(!pokemon){
    return <Container>해당 포케몬의 정보를 찾을 수 없습니다.</Container>
  }
  return (
    <Container>
      <PokemonImg src = {pokemon.img_url} alt = {pokemon.korean_name}/>
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonType>타입 : {pokemon.types}</PokemonType>
      <PokemonDescription>{pokemon.description}</PokemonDescription>
      <BackButton onClick={handleBack}>뒤로 가기</BackButton>
    </Container>
  );
};
