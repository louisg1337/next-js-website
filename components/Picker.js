import { useEffect } from 'react';
import './picker.css'

export default function Picker({welcomeRef, aboutRef, workRef, contactRef, scrollTo, current}) {
    const buttonColor = '#FF8484';

    return (
        <div className='pickerContainer'>
            <div onClick={() => scrollTo(welcomeRef, "welcome")} className='choiceContainer'>
            <div style={current == "welcome" ? {backgroundColor: buttonColor, transition: 'background-color 0.4s ease'} : {}} className='choice'/>
            </div>
            <div onClick={() => scrollTo(aboutRef, "about")} className='choiceContainer'>
            <div style={current == "about" ? {backgroundColor: buttonColor, transition: 'background-color 0.4s ease'} : {}} className='choice'/>
            </div>
            <div onClick={() => scrollTo(workRef, "work")} className='choiceContainer'>
            <div style={current == "work" ? {backgroundColor: buttonColor, transition: 'background-color 0.4s ease'} : {}}className='choice'/>
            </div>
            <div onClick={() => scrollTo(contactRef, "contact")} className='choiceContainer'>
            <div style={current == "contact" ? {backgroundColor: buttonColor, transition: 'background-color 0.4s ease'} : {}} className='choice'/>
            </div>
      </div>
    )
}