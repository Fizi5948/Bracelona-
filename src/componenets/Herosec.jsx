import React from "react";

const Herosec = () => {
  const ClubTornaments = "Welcom to FC Barcelona Club";
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-50">
      <h1 className="text-white font-bold text-7xl   mx-8 text-shadow-lg/30 leading-[1.3] ... ">
        Welcome To <br />
        FC Barcelona <br />
        Football Club
      </h1>
      <div className="my-10 py-10">
      <p className="mx-7  text-white text-md tracking-wide font-san  text-shadow-lg/50">
        FC Barcelona, Spanish professional football (soccer) club located in
        Barcelona.<br/> FC Barcelona is renowned for its historically skillful and
        attractive brand of attacking<br/> football that places an emphasis on
        flowing, open play.<br/> The team is part of a wider sports and social club
        with thousands of members.
      </p>
        
      </div>
      <div className=" mx-300 my-1">
        <button className="mt-5  outline-none  hover:blur-none  border-2 border-white      hover:bg-white hover:text-black  outline-0 text-white px-7 py-1 rounded  font-medium shadow-xl/30">More Details</button>
      </div>
    
    
    </div>
  );
};

export default Herosec;
