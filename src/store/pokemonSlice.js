import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myPokemonCards: []
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addCard: (state, action) => {
      if (
        state.myPokemonCards.length < 6 &&
        !state.myPokemonCards.some(p => p.id === action.payload.id)
      ) {
        state.myPokemonCards.push(action.payload)
      }
    },
    removeCard: (state, action) => {
      state.myPokemonCards = state.myPokemonCards.filter(p => p.id !== action.payload)
    }
  }
})

export const { addCard, removeCard } = pokemonSlice.actions
export default pokemonSlice.reducer
