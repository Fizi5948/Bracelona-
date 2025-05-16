import React from 'react';

const Events = (props) => {
  return (
    <div className=' flex bg-no-repeat mr-7 hover:border-2 hover:border-white text-white flex-col  group text-center rounded w-[250px] h-[270px] mx-4 my-5 mb-10 '>
     
      <div className='group-hover:bg-black/50 group-hover:backdrop-blur-sm h-full w-full flex flex-col items-center justify-center transition-all duration-300 p-2'>
        <p className='px-3 mb-1 '                         >
          The <strong>{props.event}</strong>  will be held in <strong>{props.city}</strong> 
         
        <br />
          More info: {props.description}
        </p>
      </div>
    </div>
  );
};

export default Events;
