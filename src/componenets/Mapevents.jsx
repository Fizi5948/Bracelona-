import React from "react";
import Events from "./Events.jsx";

const Mapevents = () => {
  const events = [
    {
      event: "LaLiga Matchday 36",
     
      city: "Barcelona",
     
      venue: "RCDE Stadium",
     
      description:
        "A crucial Catalan derby where Barcelona could secure the LaLiga title.",
    },
    {
      event: "LaLiga Matchday 37",
      
      city: "Barcelona",
     
      venue: "Estadi Olímpic Lluís Companys",
    
      description: "Final home match of the season for Barcelona.",
    },
    {
      event: "LaLiga Matchday 38",
     
      city: "Bilbao",
     
      venue: "San Mamés",
     
      description: "Season finale away at Athletic Club.",
    },
    {
      event: "UEFA Champions League Semifinal 1st Leg",
    
      city: "Barcelona",
    
      venue: "Camp Nou",
      
      description: "First leg of the Champions League semifinal.",
    },
    {
      event: "UEFA Champions League Semifinal 2nd Leg",
      
      city: "Milan",
     
      venue: "San Siro",
    
      description: "Second leg of the Champions League semifinal.",
    },
    {
      event: "UEFA Champions League Final",
     
      city: "Munich",
     
      venue: "Allianz Arena",
     
      description: "Champions League final match.",
    },
    {
      event: "UEFA Women's Champions League Final",
      
      city: "Lisbon",
     
      venue: "Estádio José Alvalade",
      
      description: "Women's Champions League final match.",
    },
    {
      event: "Under-20 Intercontinental Cup",
      
      city: "Rio de Janeiro",
     
      venue: "Maracanã Stadium",
     
      description:
        "Under-20 Intercontinental Cup match between Barcelona and Flamengo.",
    },
  ];

  return (
    <div className="bg-[url(https://up.yimg.com/ib/th?id=OIP.CnboiR0naTdREH73lmQIUAHaEo&pid=Api&rs=1&c=1&qlt=95&w=196&h=122)] bg-no-repeat bg-cover bg-shadow-2xl/30 flex flex-wrap justify-center  ">
      
      <div className="mx-7 my-4 items-center justify-center">
        <h1 className='text-3xl font-bold py-20 text-white text-shadow-lg/30'>Events Play In This Region</h1>
        </div>
      {events.map((e, idx) => (
        <Events
          key={idx}
          event={e.event}
          
          
          
          venue={e.venue}
         
          description={e.description}
        />
      ))}
    </div>
  );
};

export default Mapevents;
