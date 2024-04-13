'use client'
import React, { useEffect, useState } from 'react'
import DayCard from '../../Atom/DayCard/DayCard'
import { TipsService } from '../../../api/TipsService'

function JavascriptContent() {
  const [tips, setTips] = useState([])
  const [tipDrawn, setTipDrawn] = useState(true)

  const handleGetTips = async () => {
    try {
      const response = await TipsService.get()
      if (response.status === 200) {
        const data = response.data.tips
        const tipsFiltered = data.filter((tips) => tips.used !== 1)

        if (tipsFiltered.length > 0) {
          const randomIndex = Math.floor(Math.random() * tipsFiltered.length)
          const randomTip = tipsFiltered[randomIndex]
          await handleSetTipUsed(randomTip)
          setTipDrawn(true)
          handleGetTipsUsed()
        } else {
          console.log('Não há dicas disponíveis após filtragem.')
        }
      }
    } catch (error) {
      console.log('Erro na consulta: ', error)
    }
  }
  const handleSetTipUsed = async (tip) => {
    const lastDay = await handleGetLastDay()

    try {
      const response = await TipsService.put(tip.id, lastDay + 1)
      if (response.status === 200) {
        console.log('Atualizado com sucesso')
      }
    } catch (error) {
      console.log('Erro na consulta: ', error)
    }
  }
  const handleGetTipsUsed = async () => {
    try {
      const response = await TipsService.getByFilter(3,1)
      if (response.status === 200) {
        const data = response.data.tip
        const tipsUsedFiltered = data.filter((tips) => tips.used === 1)
        setTips(tipsUsedFiltered)
      }
    } catch (error) {
      console.log('Erro na consulta: ', error)
    }
  }
  const handleGetLastDay = async () => {
    try {
      const response = await TipsService.getLastDay()
      console.log(response)
      if (response.status === 200) {
        return response.data.day[0].last_day
      }
    } catch (error) {
      console.log('Erro na consulta: ', error)
    }
  }
  useEffect(() => {
    handleGetTipsUsed()

    const verificarMeiaNoite = () => {
      const agora = new Date()
      if (agora.getHours() === 23 && agora.getMinutes() === 59) {
        setTipDrawn(false)
        clearInterval(interval)
      }
    }

    const interval = setInterval(verificarMeiaNoite, 6000)
  }, [])
  useEffect(() => {
    if (!tipDrawn) {
      handleGetTips()
    }
  }, [tipDrawn])

  return (
    <div>
      <h1 className="text-secondary text-3xl font-semibold font-sans mb-4">
        Javascript
      </h1>
      <div className="mb-4 flex gap-3">
        {tips.map((tip, index) => (
          <a href={`/tip/${tip.id}`} key={index} title={tip.name}>
            <DayCard day={tip.day_used} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default JavascriptContent
