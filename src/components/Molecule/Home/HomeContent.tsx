import DayCard from "@/components/Atom/DayCard/DayCard";
import React from "react";

function HomeContent() {
  return (
    <div>
      <h1 className="text-secondary text-3xl font-semibold font-sans mb-4">
        Dev Júnior
      </h1>
      <div className="mb-4 flex gap-3">
        <DayCard day="1" />
        <DayCard day="2" />
        <DayCard day="3" />
        <DayCard day="4" />
      </div>
      <h1 className="text-secondary text-3xl font-semibold font-sans mb-4">
        Dev Pleno
      </h1>
      <div className="mb-4 flex gap-3">
        <DayCard day="1" />
        <DayCard day="2" />
        <DayCard day="3" />
        <DayCard day="4" />
      </div>
      <h1 className="text-secondary text-3xl font-semibold font-sans mb-4">
        Dev Sênior
      </h1>
      <div className="mb-4 flex gap-3">
        <DayCard day="1" />
        <DayCard day="2" />
        <DayCard day="3" />
        <DayCard day="4" />
      </div>
    </div>
  );
}

export default HomeContent;
