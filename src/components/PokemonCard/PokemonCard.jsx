import React from 'react';
import styled from 'styled-components';

const PokemonCardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 5px;

  background-color:#ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #dddddd;
  border-radius: 8px;
  width: 150px;
  height: 200px;

  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover{
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const PokemonName = styled.h3`
  font-weight: 600;
`

const PokemonId = styled.p`
  color:#666666;
  font-size: 13px;
`

const CardButton = styled.button`
  padding: 2px 10px;
  background-color:#ff0000;
  border: none;
  border-radius: 4px;
  color:#ffffff;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color:#C80036;
  }
`

export const PokemonCard = ({
  pokemon, 
  onCardClick, 
  onButtonClick, 
  mode = "dex"
}) => {
  const isDashboard = mode === "dashboard"

  const handleCardClick = () => {
    onCardClick?.(pokemon.id)
  }

  const handleButtonClick = (e) => {
    e.stopPropagation()
    if (isDashboard) {
      onButtonClick?.(pokemon.id)
    } else {
      onButtonClick?.(pokemon)
    }
  }

  return(
    <PokemonCardBox onClick={handleCardClick}>
      <img src = {pokemon.img_url} alt = {pokemon.korean_name}/>
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonId>No.{pokemon.id}</PokemonId>
      <CardButton 
        onClick={handleButtonClick}>
        {isDashboard ? '삭제' : '추가'}
      </CardButton>
    </PokemonCardBox>
  );
};