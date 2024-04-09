import ContentCard from '../../Atom/ContentCard/ContentCard'
import React, { useEffect, useState } from 'react'

function TipContent({ id }) {
  return (
    <div>
      <ContentCard id={id} />
    </div>
  )
}

export default TipContent
