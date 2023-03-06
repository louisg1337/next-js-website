"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.css'
import Landing from '../../components/Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [current, setCurrent] = useState();
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref) => {
    console.log('helllo')
    ref.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <main>
      <div className='pickerContainer'>
        <div onClick={() => scrollTo(welcomeRef)} className='choiceContainer'><div className='choice'/></div>
        <div onClick={() => scrollTo(aboutRef)} className='choiceContainer'><div className='choice'/></div>
        <div onClick={() => scrollTo(workRef)} className='choiceContainer'><div className='choice'/></div>
        <div onClick={() => scrollTo(contactRef)} className='choiceContainer'><div className='choice'/></div>
      </div>
      <div className='landingContainer'>
        <div ref={welcomeRef}><Landing name={"Welcome"}/></div>
        <div ref={aboutRef}><Landing name={"About"}/></div>
        <div ref={workRef}><Landing name={"Work"}/></div>
        <div ref={contactRef}><Landing name={"Contact"}/></div>
      </div>
    </main>
  )
}
