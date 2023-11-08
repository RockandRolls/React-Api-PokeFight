/* eslint-disable react/prop-types */
// import React from "react";

const ExtraIndividual = ({ data }) => {
    return (
      <>
        {!data ? (
          ""
        ) : (
          <>         
            <h1>{data.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
            <div className="abilities">
              <h1 className="heading">Abilities:</h1>
              {data.abilities.map((poke) => {
                return (
                  <>
                    <div className="group">
                      <h2>{poke.ability.name}</h2>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="base-stat">
              {data.stats.map((poke) => {
                return (
                  <>
                    <h3>
                      {poke.stat.name}:{poke.base_stat}
                    </h3>
                  </>
                );
              })}
            </div>
           </>
        )}
      </>
    );
  };
  export default ExtraIndividual;