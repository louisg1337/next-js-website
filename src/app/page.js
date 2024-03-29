"use client"

import { useRef, useState, useMemo, useEffect } from 'react'
import { isMobile } from "react-device-detect";
import Head from 'next/head';
import './page.css'

import Landing from '../../components/landing/Landing'
import Picker from '../../components/picker/Picker'
import Work from '../../components/work/Work'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Stars from '../../components/stars/Stars'


export default function Home() {
  const [current, setCurrent] = useState("welcome");
  const [currentPos, setCurrentPos] = useState(0);
  const [width, setWidth] = useState(900);
  const queue = ['welcome', 'about', 'work', 'contact'];

  const bodyRef = useRef();
  const welcomeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
      setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

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

  const starDisplay = useMemo(() => <Stars />, []);

  return (
    <main>
      <Head>
        <title>Louis Grassi | Developer</title>
        <meta
          name="description"
          content="Personal portfolio for aspiring software engineer Louis Grassi."
        />
      </Head>
      {isMobile || width <= 800 ?
        <div style={{height: '100%'}}>
          <div className="starContainer">
            {starDisplay}
          </div>
          <h1 style={{textAlign: 'center', paddingTop: '50%'}}>Mobile responsive version coming soon!</h1>
        </div>
      :
      <>
        <Picker welcomeRef={welcomeRef} 
                aboutRef={aboutRef} 
                workRef={workRef} 
                contactRef={contactRef} 
                scrollTo={scrollTo}
                current={current}
        />
        <div className="starContainer">
          {starDisplay}
        </div>
        <div ref={bodyRef} className='landingContainer' onScroll={getscroll}>
          <div ref={welcomeRef}><Landing name={"Welcome"}/></div>
          <div ref={aboutRef}><About/></div>
          <div ref={workRef}><Work/></div>
          <div ref={contactRef}><Contact/></div>
        </div>
      </>
      }
    </main>
  )
}
