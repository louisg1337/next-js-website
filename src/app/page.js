"use client"

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.css'

import Landing from '../../components/Landing'
import Picker from '../../components/Picker'
import Work from '../../components/work/Work'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [current, setCurrent] = useState("welcome");
  const [currentPos, setCurrentPos] = useState(0)
  const queue = ['welcome', 'about', 'work', 'contact'];

  const bodyRef = useRef();
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();



  const scrollTo = (ref, curr) => {
    // setCurrent(curr)
    ref.current.scrollIntoView({behavior: "smooth"});
  }

  const getscroll = () => {
    const sectionHeight = welcomeRef.current.offsetHeight;
    const scrollPos = bodyRef.current.scrollTop + sectionHeight;

    if (scrollPos <= currentPos || scrollPos >= currentPos) {
      // Find next section
      const nextSection = Math.floor(scrollPos / sectionHeight);

      // Set new vars
      setCurrent(queue[nextSection - 1]);
      setCurrentPos(nextSection * sectionHeight);

    } 
  };

  return (
    <main>
      <Picker welcomeRef={welcomeRef} 
              aboutRef={aboutRef} 
              workRef={workRef} 
              contactRef={contactRef} 
              scrollTo={scrollTo}
              current={current}
      />
      <div ref={bodyRef} className='landingContainer' onScroll={getscroll}>
        <div ref={welcomeRef}><Landing name={"Welcome"}/></div>
        <div ref={aboutRef}><Landing /></div>
        <div ref={workRef}><Work/></div>
        <div ref={contactRef}><Landing name={"Contact"}/></div>
      </div>
    </main>
  )
}
