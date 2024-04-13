import React from 'react'

function DayCard({ day }) {
  return (
    <div className="w-[60px] min-h-[60px] bg-secondary rounded-md flex justify-center items-center">
      <p className="text-primary text-3xl font-alt">{day}</p>
    </div>
  )
}

export default DayCard
