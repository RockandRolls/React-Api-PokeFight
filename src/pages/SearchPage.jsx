import { useState } from "react";
import { searchPokemon } from "../lib/dbClient.js";
import { Progress } from "@nextui-org/react";
// import axios from "axios";
// import ExtraIndividual from '../components/ExtraIndividual';

const SearchPage = ({ pokemonName, setPokemonName }) => {
    //moved to App.js and given through prop drilling to search bar can access it too
    // const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        img: "",
        type: "",
        hp: "",
        attack: "",
        defense: "",
    });

    const findPokemon= (e) => {
        e.preventDefault();
        searchPokemon(pokemonName).then((searchResult)=>{setPokemon(searchResult)
            setPokemonChosen(true);}
        
        );
     setPokemonName("");
    };
    return (

        <div className="flex-col min-h-screen bg-yellow-500 mt-8 ">
            <div>

                <h2 className="text-3xl">Search Pokemon</h2>
                {/* input type='text' */}
                <form onSubmit={findPokemon}>
                    <input
                        type="text"
                        value={pokemonName}
                        onChange={(event) => {
                            setPokemonName(event.target.value);
                        }}
                        className="rounded-lg px-2"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="flex-col items-center">
                {!pokemonChosen ? (
                    <h1>Please choose a Pokemon</h1>
                ) : (
                    <>
                        <h1 className="uppercase font-bold tracking-tighter" >{pokemon.name}</h1>
                        <img className="h-40 m-5" src={pokemon.img} />
                        <h3>Type: {pokemon.type}</h3>

                        {/* <div className="base-stat text-yellow-600">
                        {response.data.stats.map((pokemon) => {

                            if (response.data.stats==="hp"||response.data.stats==="attack"||response.data.stats==="defense") {
                                
                                return (
                                    <>
                                        <h4>
                                        {poke.stat.name}: {pokemon.base_stat}
                                            <Progress
                                                aria-label="HP"
                                                size="md"
                                                value={pokemon.hp}
                                                color="danger"
                                                className="max-w-md mb-4"
                                            />                                  
                                        </h4>
                                    </>
                                );
                            }                          
                        })}
                    </div> */}

                        <h4>Hp: {pokemon.hp}
                        <Progress
                        aria-label="HP"
                        size="md"
                        value={pokemon.hp}
                        color="danger"
                        className="max-w-md mb-4"
                    /></h4>
                        <h4>Attack: {pokemon.attack}
                        <Progress
                        aria-label="ATTACK"
                        size="md"
                        value={pokemon.hp}
                        color="danger"
                        className="max-w-md mb-4"
                    /></h4>
                        <h4>Defense: {pokemon.defense}
                        <Progress
                        aria-label="DEFENSE"
                        size="md"
                        value={pokemon.hp}
                        color="danger"
                        className="max-w-md mb-4"
                    /></h4>
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
