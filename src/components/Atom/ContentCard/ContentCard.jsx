import React, { useEffect, useState } from 'react'
import { TipsService } from '../../../api/TipsService'
import { useRouter } from 'next/navigation'

function ContentCard({ id }) {
  const [tip, setTip] = useState({})
  const { push } = useRouter()

  const handleGetTip = async () => {
    try {
      const response = await TipsService.getById(id)
      if (response.status === 200) {
        const data = response.data.tip[0]
        if (data.used === 1) {
          setTip(data)
        } else {
          push('/')
        }
      }
    } catch (error) {
      console.log('Erro na consulta: ', error)
    }
  }

  useEffect(() => {
    handleGetTip()
  }, [])

  return (
    <>
      <div className="bg-secondary w-full p-10 rounded-lg mb-10">
        <h1 className="text-primary mb-5 text-2xl">
          DAY {tip.day_used} - {tip.name}
        </h1>
        <p className="text-primary text-lg">{tip.description}</p>
      </div>
      {tip.example && (
        <div className="bg-secondary w-full p-10 rounded-lg mb-10">
          <h1 className="text-primary mb-5 text-2xl">Exemplo</h1>
          <pre className="text-primary text-lg text font-sans">{tip.example}</pre>
        </div>
      )}
      {tip.links && (
        <div className="bg-secondary w-full p-10 rounded-lg mb-10">
          <h1 className="text-primary mb-5 text-2xl">Links</h1>
          <div className="text-primary text-lg" dangerouslySetInnerHTML={{ __html: tip.links }} />
        </div>
      )}
    </>
  )
}

export default ContentCard
