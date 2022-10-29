import { useState } from 'react'
import data from "./data.json"
import logo from "./assets/images/logo.svg"

import Chart from './components/Chart'

function App() {
  const [weeklyExpenses, _] = useState(data)

  return (
    <main className="min-h-screen w-screen bg-cream flex items-center justify-center font-dmSans">
      <div className="w-full h-max p-5 bg-transparent sm:max-w-[580px] sm:min-h-[680px]">
        <div className="w-full p-5 bg-softRed mb-5 flex items-center justify-between rounded-2xl sm:py-5 sm:px-7">
          <div className="h-full w-max">
            <p className='text-base  text-veryPaleOrange sm:text-lg'>My balance</p>
            <p className='text-[1.6rem] text-veryPaleOrange font-bold sm:text-[1.92rem]'>$921.48</p>
          </div>
          <div className="w-max h-max mr-2">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full rounded-2xl p-5 bg-veryPaleOrange sm:p-8 sm:min-h-[480px] md:py-9 md:px-10">
          <h1 className="text-darkBrown text-2xl font-bold sm:text-3xl md:text-[2rem]">Spending - Last 7 days</h1>


          <Chart weeklyExpenses={weeklyExpenses} />

          <div className="w-full flex items-center justify-between sm:mb-3">
            <div className="space-y-1">
              <p className="text-mediumBrown text-base sm:text-lg">Total this month</p>
              <p className="text-darkBrown text-3xl font-bold sm:text-5xl">$478.33</p>
            </div>

            <div className="mt-6">
              <p className="text-darkBrown text-lg font-bold text-right">+2.4%</p>
              <p className="text-base text-mediumBrown sm:text-lg">from last month</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default App
