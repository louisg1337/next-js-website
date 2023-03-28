import { motion } from "framer-motion"
import { forwardRef } from "react"
import './picker.css'

export default function Picker({welcomeRef, aboutRef, workRef, contactRef, scrollTo, current}) {
    const data = [{item: "welcome", ref: welcomeRef}, {item: "about", ref: aboutRef}, {item: "work", ref: workRef}, {item:"contact", ref: contactRef}]

    return (
        <div className='pickerContainer'>
            {data.map(({item, ref}, key) => {
                console.log(item)
                console.log(ref)
                return (
                    <Node key={key} name={item} ref={ref} scrollTo={scrollTo} current={current}/>
                )
            })}
      </div>
    )
}

const Node = forwardRef(({name, scrollTo, current}, ref) => {
    return (
        <div onClick={() => scrollTo(ref, name)} className='choiceContainer'>
            <motion.div 
            initial={current != name && {rotate: 45}} 
            animate={current == name ? {rotate: 90} : {}} 
            style={current == name ? {backgroundColor: '#FF8484', transition: 'background-color 0.4s ease'} : {}} 
            className='choice'
            />
        </div>
    );
});