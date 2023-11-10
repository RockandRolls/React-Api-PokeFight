/* eslint-disable react/prop-types */
import { btnColor } from "../utils/battleData.js";
import { Button, Progress } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ExtraIndividual = ({ data }) => {
    const { setChosenPokemon } = useAppContext();
    const navigate = useNavigate();
    console.log((data?.types[0]?.type?.name || '').charAt(0).toUpperCase() +
    (data?.types[0]?.type?.name || '').slice(1))
    return (
        <>
            {!data ? (
                "Loading..."
            ) : (

                <div className="poke-details">

                    <h1 className="text-yellow-600">{data.name}</h1>
                    <img
                        className="w-full"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                        alt=""
                    />
                    <Button
                        onClick={() => {
                            setChosenPokemon(data.id);
                            navigate("/battle");
                        }}
                        size="lg"
                        color="danger"
                        className="m-4"
                    >
                        Go Battle!
                    </Button>
                    <div className="types">
                        <h2 className="text-yellow-600">Type:</h2>
                        {data.types.map((poke) => {
                            return (
                                <>
                                    <div className="group">
                                        <h2 className={btnColor((data?.types[0]?.type?.name || '').charAt(0).toUpperCase() +
    (data?.types[0]?.type?.name || '').slice(1))}>{poke.type.name}</h2>
                                    </div>
                                </>
                            );
                        })}
                    </div>

                    <div className="base-stat text-yellow-600">
                        {data.stats.map((poke) => {

                            if (poke.stat.name==="hp"||poke.stat.name==="attack"||poke.stat.name==="defense") {
                                
                                return (
                                    <>
                                        <h3>
                                        {poke.stat.name}: {poke.base_stat}
                                            <Progress
                        aria-label="HP"
                        size="md"
                        value={poke.base_stat}
                        color="danger"
                        className="max-w-md mb-4"
                    />
                                  
                                        </h3>
                                    </>
                                );
                            }
                            

                        })}
                    </div>
                </div>
            )}
        </>
    );
};
export default ExtraIndividual;
