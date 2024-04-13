'use client'
import { useParams } from 'next/navigation'
import TipContent from '../../../components/Organism/Tip/TipContent'

export default function Tip() {
  const { id } = useParams(0)

  return (
    <div className="bg-primary min-h-[calc(100vh-160px)] px-20 pt-10">
      <TipContent id={id} />
    </div>
  )
}
