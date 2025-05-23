import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MOCK_DATA from '../data/mock';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { PokemonList } from '../components/PokemonList/PokemonList'

const Container = styled.div`
  display : flex;
  flex-direction: column;
  margin: 20px auto;

  max-width: 80vw;
  gap : 20px;
  box-sizing: border-box;
`;

export const DexPage = () => {
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/dex/${id}`)
  }

  return (
    <Container>
      <Dashboard />
      <PokemonList pokemons={MOCK_DATA} onCardClick = {handleCardClick}/>
    </Container>
  );
};