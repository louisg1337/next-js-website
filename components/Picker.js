import { useEffect } from 'react';
import './picker.css'

export default function Picker({welcomeRef, aboutRef, workRef, contactRef, scrollTo, current}) {
    const buttonColor = 'white';

    return (
        <div className='pickerContainer'>
            <div onClick={() => scrollTo(welcomeRef, "welcome")} className='choiceContainer'>
            <div style={current == "welcome" ? {backgroundColor: buttonColor} : {}} className='choice'/>
            </div>
            <div onClick={() => scrollTo(aboutRef, "about")} className='choiceContainer'>
            <div style={current == "about" ? {backgroundColor: buttonColor} : {}} className='choice'/>
            </div>
            <div onClick={() => scrollTo(workRef, "work")} className='choiceContainer'>
            <div style={current == "work" ? {backgroundColor: buttonColor} : {}}className='choice'/>
            </div>
            <div onClick={() => scrollTo(contactRef, "contact")} className='choiceContainer'>
            <div style={current == "contact" ? {backgroundColor: buttonColor} : {}} className='choice'/>
            </div>
      </div>
    )
}