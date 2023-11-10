import { useState, useEffect } from "react";
import { getPokemonById } from "../lib/dbClient";
import { useAppContext } from "../context/AppContext";
import MyBattleCard from "../components/MyBattleCard";
import EnemyBattleCard from "../components/EnemyBattleCard";
import GameEndModal from "../components/GameEndModal";

const GamePage = () => {
    //placeholder so I have something to work with until we decide how to store chosen pokemon
    const [myPokemon, setMyPokemon] = useState();
    const [enemyPokemon, setEnemyPokemon] = useState();
    const [myHP, setMyHP] = useState({ currentHP: 100, maxHP: 100 });
    const [enemyHP, setEnemyHP] = useState({ currentHP: 100, maxHP: 100 });
    const {
        //user, setUser,
        chosenPokemon,
    } = useAppContext();

    useEffect(() => {
        getPokemonById(chosenPokemon)
            .then((pokemon) => {
                setMyPokemon(pokemon);
                // console.log("dot notation", myPokemon.base.HP);
                setMyHP((prev) => ({
                    ...prev,
                    currentHP: pokemon?.base?.HP,
                    maxHP: pokemon?.base?.HP,
                }));
            })
            .catch((error) => console.error(error));
    }, [chosenPokemon]);
    useEffect(() => {
        getPokemonById(`${Math.floor(Math.random() * 151 + 1)}`)
            .then((pokemon) => {
                setEnemyPokemon(pokemon);
                setEnemyHP((prev) => ({
                    ...prev,
                    currentHP: pokemon?.base?.HP,
                    maxHP: pokemon?.base?.HP,
                }));
            })
            .catch((error) => console.error(error));
    }, []);

    // useEffect(() => {
    //     // if (!enemyHP || !myHP) return;
    //     if ((enemyHP.currentHP <= 0 || myHP.currentHP <= 0) && user) {
    //         editBattles(user.username, myHP.currentHP);
    //         console.log("battle post was called");
    //         // enemyHP.currentHP <= 0
    //         //     ? setUser((prev) => ({
    //         //           ...prev,
    //         //           battlesWon: prev.battlesWon + 1,
    //         //       }))
    //         //     : setUser((prev) => ({
    //         //           ...prev,
    //         //           battlesLost: prev.battlesLost + 1,
    //         //       }));
    //     }
    // }, [enemyHP, myHP, user, setUser]);

    return (
        <div className="min-h-screen min-w-screen flex flex-col items-center gap-10">
            <h3 className="text-4xl mt-10">Battle!</h3>
            <div className="w-full flex items-center justify-center gap-8">
                {(enemyHP.currentHP <= 0 || myHP.currentHP <= 0) && (
                    <GameEndModal
                        myCurrentHP={myHP.currentHP}
                        enemyCurrentHP={enemyHP.currentHP}
                    />
                )}
                {myPokemon && (
                    <MyBattleCard
                        {...myPokemon}
                        enemyPokemon={enemyPokemon}
                        myHP={myHP}
                        enemyHP={enemyHP}
                        setEnemyHP={setEnemyHP}
                        setMyHP={setMyHP}
                    />
                )}
                {enemyPokemon && (
                    <EnemyBattleCard {...enemyPokemon} enemyHP={enemyHP} />
                )}
            </div>
        </div>
    );
};

export default GamePage;
