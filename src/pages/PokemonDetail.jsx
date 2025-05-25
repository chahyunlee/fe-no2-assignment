import React from 'react';
import styled from 'styled-components'
import MOCK_DATA from '../data/mock'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';
import { usePokemon } from '../contexts/PokemonContext'

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
const ActionButton = styled.button`
  margin-top:10px;
  padding: 8px 16px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c80036;
  }
`

export const PokemonDetailPage = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const { myPokemonCards, addCard, removeCard } = usePokemon()

  const pokemon = MOCK_DATA.find(pokemonInfo => String(pokemonInfo.id) === id)
  const isInDashboard = myPokemonCards.some(p => p.id === pokemon?.id)

  const handleBack = () => {
    navigate('/dex')
  }

  const handleAction = () => {
    if (isInDashboard) {
      removeCard(pokemon.id)
      toast.success(`[${pokemon.korean_name }] 카드가 삭제되었습니다!`)
    } else {
      if (myPokemonCards.length >= 6) {
        toast.warn('카드는 6개까지만 선택할 수 있습니다!')
        return
      }
      addCard(pokemon)
      toast.success(`[${pokemon.korean_name }] 카드가 추가되었습니다!`)
    }
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
      <ActionButton onClick={handleAction}>
        {isInDashboard ? '삭제' : '추가'}
      </ActionButton>
      <BackButton onClick={handleBack}>뒤로 가기</BackButton>
    </Container>
  );
};
