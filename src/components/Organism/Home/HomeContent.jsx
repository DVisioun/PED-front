'use client'
import DayCard from '../../Atom/DayCard/DayCard'
import React, { useEffect, useState } from 'react'
import { TipsService } from '../../../api/TipsService'
import HTMLContent from '../../Molecule/HTMLContent/HTMLContent'
import CSSContent from '../../Molecule/CSSContent/CSSContent'
import JavascriptContent from '../../Molecule/JavascriptContent/JavascriptContent'

function HomeContent() {
  return (
    <>
      <HTMLContent />
      <CSSContent />
      <JavascriptContent />
    </>
  )
}

export default HomeContent
