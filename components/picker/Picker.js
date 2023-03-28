import { motion } from "framer-motion"
import './picker.css'

export default function Picker({welcomeRef, aboutRef, workRef, contactRef, scrollTo, current}) {
    const data = ["welcome", "about", "work", "contact"]

    return (
        <div className='pickerContainer'>
            {data.map((item, key) => {
                let ref = null;
                switch(item){
                    case "welcome":
                        ref = welcomeRef;
                    case "about":
                        ref = aboutRef;
                    case "work":
                        ref = workRef;
                    case "contact":
                        ref = contactRef
                }

                return (
                    <Node key={key} name={item} ref={ref} scrollTo={scrollTo} current={current}/>
                )
            })}
      </div>
    )
}

const Node = ({name, ref, scrollTo, current}) => {
    return (
        <div onClick={() => scrollTo(ref, name)} className='choiceContainer'>
            <motion.div animate={{rotate: 90}} style={current == name ? {backgroundColor: '#FF8484', transition: 'background-color 0.4s ease'} : {}} className='choice'/>
        </div>
    );
}