import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";

//pages for each route
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
// import PokePage from "./pages/PokePage";
import GamePage from "./pages/GamePage";

import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ExtraPokePage from "./pages/ExtraPokePage";
import NotFound from "./pages/NotFound";
import Leaderboard from "./pages/Leaderboard";

// import Background from "./components/Background";

function App() {
    const [pokemonName, setPokemonName] = useState("");

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            pokemonName={pokemonName}
                            setPokemonName={setPokemonName}
                        />
                    }
                >
                    <Route index element={<LandingPage />} />
                    <Route
                        path="search"
                        element={
                            <SearchPage
                                pokemonName={pokemonName}
                                setPokemonName={setPokemonName}
                            />
                        }
                    />
                    <Route path="leaderboard" element={<Leaderboard />} />
                    <Route path="battle" element={<GamePage />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="register" element={<Register />} />
                    {/* <Route path="pokemon" element={<PokePage />} /> */}
                    <Route path="allpokemons" element={<ExtraPokePage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
