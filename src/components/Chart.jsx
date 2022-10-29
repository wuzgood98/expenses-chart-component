import React from 'react'
import Bar from './Bar'

const Chart = ({ weeklyExpenses }) => {
  const highestExpense = Math.max(...weeklyExpenses.map((expenses) => expenses.amount))
  return (
    <div className="w-full h-[12.5rem] flex gap-3 border-b-2 pb-5 border-cream mt-7 sm:h-[14.2rem] sm:gap-5 sm:mt-12">
      {weeklyExpenses.map((expenses) => {
        return (
          <Bar
            key={expenses.amount}
            {...expenses}
            currentDay={expenses.amount === highestExpense}
          />
        )
      })}
    </div>
  )
}

export default Chart