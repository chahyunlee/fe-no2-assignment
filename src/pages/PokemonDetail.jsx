import React from 'react';
import { useParams } from 'react-router-dom';

export const PokemonDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Pokemon Detail Page</h1>
      <p>포켓몬 ID: {id}</p>
    </div>
  );
};
