import { createContext, useContext, useState } from 'react'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [myPokemonCards, setMyPokemonCards] = useState([])

  const addCard = (pokemon) => {
    setMyPokemonCards((prev) => {
      if (prev.length >= 6 || prev.some(p => p.id === pokemon.id)) return prev
      return [...prev, pokemon]
    })
  }

  const removeCard = (id) => {
    setMyPokemonCards((prev) => prev.filter(p => p.id !== id))
  }

  return (
    <PokemonContext.Provider value={{ myPokemonCards, addCard, removeCard }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)