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
        if (data.used == 1) {
          console.log(data)
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
          <p className="text-primary text-lg">{tip.example}</p>
        </div>
      )}
      {tip.links && (
        <div className="bg-secondary w-full p-10 rounded-lg mb-10">
          <h1 className="text-primary mb-5 text-2xl">Links</h1>
          <p className="text-primary text-lg">{tip.links}</p>
        </div>
      )}
    </>
  )
}

export default ContentCard

/*
  <p className="text-primary text-lg">
    O elemento de divisão <span className="text-emphasis">&lt;div&gt;</span> é um
    container genérico para conteúdo de fluxo, que de certa forma não
    representa nada. Ele pode ser utilizado para agrupar elementos para fins
    de estilos (usando class ou id), ou porque eles compartilham valores de
    atributos, como lang. Ele deve ser utilizado somente quando não tiver
    outro elemento de semântica (tal como
    <span className="text-emphasis"> &lt;article&gt;</span> ou
    <span className="text-emphasis"> &lt;nav&gt;</span>).
  </p>
*/
