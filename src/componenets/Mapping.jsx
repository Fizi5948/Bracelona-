import React from "react";
import Player from "./Player";

const Mapping = () => {
  const players = [
    {
      name: "Marc-André ter Stegen",
      age: 31,
      country: "Germany",
   
    },
    {
      name: "Robert Lewandowski",
      age: 34,
      country: "Poland",
   
    },
    {
      name: "Frenkie de Jong",
      age: 26,
      country: "Netherlands",
    
    },
    {
      name: "Pedri",
      age: 20,
      country: "Spain",

    }
    
  ];
  return (
    <>
      <div className=" p-20 bg-gradient-to-tr from-slate-200 to-violet-700 flex justify-center items-center flex-wrap gap-5 ">
        {players.map(function (elem ,idx) {
          return (
            <Player
            key={idx}
              name={elem.name}
              country={elem.country}
              age={elem.age}
        
            />
          );
        })}
      </div>
    
    </>
  );
};

export default Mapping;
