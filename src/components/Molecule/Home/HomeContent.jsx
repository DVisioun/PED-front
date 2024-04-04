"use client";
import DayCard from "../../Atom/DayCard/DayCard";
import React, { useEffect, useState } from "react";
import { TipsService } from "../../../api/TipsService";

function HomeContent() {
  const [tips, setTips] = useState();

  const handleGetTips = async () => {
    try {
      const response = await TipsService.get();
      if (response.status === 200) {
        const data = response.data.data.tips;

        const tipsFiltered = data.dados.filter(tips => tips.used != 1);
        setTips(tipsFiltered);
      }
    } catch (error) {
      console.log("Erro na consulta: ", error);
    }
  };

  useEffect(() => {
    handleGetTips();
  }, []);

  return (
    <div>
      <h1 className="text-secondary text-3xl font-semibold font-sans mb-4">
        Dias
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
