import './picker.css'

export default function Picker({welcomeRef, aboutRef, workRef, contactRef, scrollTo, current}) {
    return (
        <div className='pickerContainer'>
            <div onClick={() => scrollTo(welcomeRef, "welcome")} className='choiceContainer'>
            <div style={current == "welcome" ? {backgroundColor: 'white'} : {}} className='choice'/>
            </div>
            <div onClick={() => scrollTo(aboutRef, "about")} className='choiceContainer'>
            <div style={current == "about" ? {backgroundColor: 'white'} : {}} className='choice'/>
            </div>
            <div onClick={() => scrollTo(workRef, "work")} className='choiceContainer'>
            <div style={current == "work" ? {backgroundColor: 'white'} : {}}className='choice'/>
            </div>
            <div onClick={() => scrollTo(contactRef, "contact")} className='choiceContainer'>
            <div style={current == "contact" ? {backgroundColor: 'white'} : {}} className='choice'/>
            </div>
      </div>
    )
}