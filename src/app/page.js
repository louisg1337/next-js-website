"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.css'
import Landing from '../../components/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();


  return (
    <main>
      <div className='pickerContainer'>
        <div className='choiceContainer'><div className='choice'/></div>
        <div className='choiceContainer'><div className='choice'/></div>
        <div className='choiceContainer'><div className='choice'/></div>
        <div className='choiceContainer'><div className='choice'/></div>
      </div>
      <div className='landingContainer'>
        <Landing name={"Welcome"}/>
        <Landing name={"About"}/>
        <Landing name={"Work"}/>
        <Landing name={"Contact"}/>
      </div>
    </main>
  )
}
