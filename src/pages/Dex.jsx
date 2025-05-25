import React, { useState } from 'react';
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
  const [myPokemonCards, setMyPokemonCards] = useState([])

  const handleCardClick = (id) => {
    navigate(`/dex/${id}`)
  }

  const handleAddCard = (pokemon) => {
    if (myPokemonCards.length >= 6) {
      alert("카드는 최대 6개까지 선택할 수 있어요!")
      return
    }
    const alreadyExists = myPokemonCards.some(p => p.id === pokemon.id)
    if (alreadyExists) {
    alert("이미 추가된 포켓몬이에요!")
    return
  }
  setMyPokemonCards(prev => [...prev, pokemon])
  }

  const handleRemoveCard = (id) => {
    setMyPokemonCards(prev => prev.filter(p => p.id !== id))
  }

  return (
    <Container>
      <Dashboard 
        cards = {myPokemonCards} 
        onRemove = {handleRemoveCard}
      />
      <PokemonList 
        pokemons={MOCK_DATA} 
        onCardClick = {handleCardClick}
        onButtonClick = {handleAddCard}/>
    </Container>
  );
};