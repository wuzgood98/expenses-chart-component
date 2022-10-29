import React from 'react'

const Bar = ({ amount, currentDay, day }) => {
  const height = { height: `${amount + 30}%` }

  return (
    <div className="flex flex-col justify-end gap-1 w-full sm:gap-3">
      <div style={height} className={`relative w-full ${currentDay ? "bg-cyan" : "bg-softRed"} rounded-md transition-all cursor-pointer hover:brightness-125 animate-grow group`}>
        <p className="absolute w-[3rem] opacity-0 translate-y-2 -z-10 -top-9 right-0 -left-[0.3rem] bg-darkBrown text-veryPaleOrange text-[0.8rem] text-center p-1 rounded-md group-hover:opacity-100 group-hover:translate-y-0 group-hover:z-10 transition-all duration-200 sm:text-base sm:w-[4.3rem] sm:-left-[0.6rem] sm:p-2 sm:-top-12">${amount}</p>
      </div>
      <p className="lowercase text-mediumBrown text-sm text-center sm:text-base">{day}</p>
    </div>
  )
}

export default Bar