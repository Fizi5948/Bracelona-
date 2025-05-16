import React from 'react'

const Player = (props) => {
  return (
    <div className='bg-[url(https://tse4.mm.bing.net/th?id=OIP.K8NGc2cPF1xuP0xUunOsOwHaEK&pid=Api&P=0&h=900)] bg-no-repeat mr-7 hover:border-2 hover:border-white text-black inline-block group text-center rounded w-[250px] h-[270px]  hover:shadow-2xl/30'>
      <div className='group-hover:bg-black/50 group-hover:backdrop-blur-xs h-full w-full flex flex-col items-center justify-center transition-all duration-300'>

        <h1 className="text-2xl font-semibold mb-4 text-white hover:blur-none">{props.name}</h1>
        <h2 className='text-white hover:blur-none' >{props.country}{props.age}</h2>
        <button className="mt-5  outline-none  hover:blur-none hover:border-2 hover:border-white   hover:text-white hover:outline-0 text-white px-4 py-2 rounded  font-medium ">See Details</button>

      </div>
    </div>

  )
}

export default Player