import React from 'react';
import styled from 'styled-components';
import { PokemonCard } from '../PokemonCard/PokemonCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;

  background-color: #f0f0f0;
  border: 1px solid #dddddd;
  border-radius: 8px;
`;


export const PokemonList = ({pokemons}) => {
  return(
    <GridContainer>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </GridContainer>
  );
};