import React from 'react';
import styled from 'styled-components';
import defaultImg from '../../assets/pokemonBall.png';
import { PokemonCard } from '../PokemonCard/PokemonCard'
import { usePokemon } from '../../contexts/PokemonContext'

const MAX_POKEMON = 6;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color : #f8f8f8;
  border-radius: 8px;
  height: 30vh;

  position: relative;
`;

const HeadText = styled.h1`
  margin-top : 20px;
  color: #ff0000;
  font-weight: 600;
  font-size: 28px;
`;

const MyPokemonDex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%; 
  
  position: absolute;
  bottom: 20px;
`;

const PokemonBox = styled.div`
  display:flex;
  justify-content:center;
  align-items : center;

  background-color:#ffffff;
  width: 100px;
  height: 100px;
  border: 2px dashed #cccccc;
  border-radius: 8px;
`;

const DefaultImg = styled.img`
  width: 60%;
  height: 60%;
`;

export const Dashboard = () => {
  const { myPokemonCards } = usePokemon()
  const emptySlots = MAX_POKEMON - myPokemonCards.length

  return (
    <Container>
      <HeadText>나만의 포켓몬</HeadText>
      <MyPokemonDex>
        {/*selected cards rendering*/}
        {myPokemonCards.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            mode="dashboard"
          />
        ))}
        {/*empty slot rendering*/}
        {Array.from({ length: emptySlots }).map((_, idx) => (
          <PokemonBox key={`empty-${idx}`}>
            <DefaultImg src={defaultImg} alt="" />
          </PokemonBox>
        ))}
      </MyPokemonDex>
    </Container>
  );
};