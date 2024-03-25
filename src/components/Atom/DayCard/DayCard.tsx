import React from "react";

interface DayCardProps {
  day: string;
}

function DayCard({ day }: DayCardProps) {
  return (
    <div className="w-[60px] h-[60px] bg-secondary rounded-md flex justify-center items-center">
      <p className="text-primary text-3xl font-alt">{day}</p>
    </div>
  );
}

export default DayCard;
