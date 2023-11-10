import {useState} from 'react';
import Axios from 'axios';
// import ExtraIndividual from '../components/ExtraIndividual';

const SearchPage = () => {
    const [pokemonName, setPokemonName]= useState("");
    const [pokemonChosen, setPokemonChosen]=useState(false);
    const [pokemon, setPokemon]=useState({
        name:"",
        species: "",
        img: "",
        type:"",
        hp:"",
        attack:"",
        defense:"",
    });

    const searchPokemon= () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response)=>{
            // console.log(response)
            setPokemon({
                name:pokemonName,
                species: response.data.species.name,
                img: response.data.sprites.front_default,
                type:response.data.types[0].type.name,
                hp:response.data.stats[0].base_stat,
                attack:response.data.stats[1].base_stat,
                defense:response.data.stats[2].base_stat,
            })
            setPokemonChosen(true);
        });
    }
    return (
        <div className="flex-col  min-h-screen ">
            <div >
                <h2 className="text-3xl">Search Pokemon</h2>
                {/* input type='text' */}
                <input
                    type='text'
                    onChange={(event)=> {
                        setPokemonName(event.target.value);
                    }
                    }
                    className="rounded-lg px-2" />
                <button onClick={searchPokemon}>Submit</button>
            </div>
            <div className='flex-col items-center'>
                {!pokemonChosen ? (
                    <h1>Please choose a Pokemon</h1>) : (
                    <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.img} />
                    <h3>Species: {pokemon.spices}</h3>
                    <h3>Type: {pokemon.type}</h3>
                    <h4>Hp: {pokemon.hp}</h4>
                    <h4>Attack: {pokemon.attack}</h4>
                    <h4>Defense: {pokemon.defense}</h4>

                    </>
                    )
                    }
            </div>
        </div>
    );
};

export default SearchPage;
