import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouterPath } from './path';
import { HomePage } from '../pages/Home';
import { DexPage } from '../pages/Dex';
import { PokemonDetailPage } from '../pages/PokemonDetail';

export default function AppRouter() {
  return (
    <Routes>
      <Route path={RouterPath.HOME} element={<HomePage />} />
      <Route path={RouterPath.DEX} element={<DexPage />} />
      <Route path={RouterPath.POKEMON_DETAIL} element={<PokemonDetailPage />} />
    </Routes>
  );
}
