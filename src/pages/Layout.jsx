import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
// import Footer from "../components/Footer";

export default function Layout({ pokemonName, setPokemonName }) {
    return (
        <>
            <Nav pokemonName={pokemonName} setPokemonName={setPokemonName} />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}
