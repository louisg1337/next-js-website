"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.css'
import Landing from '../../components/Landing'
import Picker from '../../components/Picker'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [current, setCurrent] = useState("welcome");
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const scrollTo = (ref, curr) => {
    setCurrent(curr)
    ref.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <main>
      <Picker welcomeRef={welcomeRef} 
              aboutRef={aboutRef} 
              workRef={workRef} 
              contactRef={contactRef} 
              scrollTo={scrollTo}
              current={current}
      />
      <div className='landingContainer'>
        <div ref={welcomeRef}><Landing name={"Welcome"}/></div>
        <div ref={aboutRef}><Landing name={"About"}/></div>
        <div ref={workRef}><Landing name={"Work"}/></div>
        <div ref={contactRef}><Landing name={"Contact"}/></div>
      </div>
    </main>
  )
}
