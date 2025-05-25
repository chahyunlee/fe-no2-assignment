import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { PokemonProvider } from './contexts/PokemonContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <PokemonProvider>
        <AppRouter />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
          />
      </PokemonProvider>
    </Router>
  )
}

export default App
