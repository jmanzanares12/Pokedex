import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Pokedex = React.lazy(() => import('../views/Pokedex'))
const PokemonProfile = React.lazy(() => import('../views/PokemonProfile'))
const PokemonType = React.lazy(() => import('../views/PokemonType'))
const FavoritePokemon = React.lazy(() => import('../views/PokemonByFavorite'))

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Pokedex />
                    </React.Suspense>
                }
            />
            <Route
                path='/pokemon/:pokemonName'
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <PokemonProfile />
                    </React.Suspense>
                }
            />
            <Route
                path='/type/:typeName'
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <PokemonType />
                    </React.Suspense>
                }
            />

            <Route 
                path='/favorite'
                element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <FavoritePokemon />
                    </React.Suspense>
                }
            />
        </Routes>
    )
}

export default AppRoutes;