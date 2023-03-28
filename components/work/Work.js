import '../section.css'
import './work.css'
import Card from './Card';
import { motion } from 'framer-motion';
import { workData } from './workData';
import { useState } from 'react';

export default function Work(){
    const [selected, setSelected] = useState(workData[0])
    const [hovered, setHover] = useState(null);
    

    return (
        <div className="section">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{duration: 2}} className='workContainer'>
                <div style={{height: '100%'}}>
                    <div className='titleContainer'>
                        <h1 className='titleText'>Projects</h1>
                    </div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{duration: 1}} className='cardContainer'>
                        <div className='workChoiceContainer'>
                            {workData.map((val, i) => {
                                return (
                                    <motion.div 
                                    whileHover={{scale: 1.02}} 
                                    whileTap={{opacity: 0.6}} 
                                    key={i} 
                                    onMouseEnter={() => setHover(val.title)} 
                                    onMouseLeave={() => setHover(null)} 
                                    onClick={() => setSelected(val)}
                                    style={selected.title == val.title ? {borderLeftColor: '#FF8484', borderLeftWidth: 3, transition: "border-left-color 0.6s ease"} : {}} 
                                    className='workTitleContainer'>
                                        <p style={selected.title == val.title || hovered == val.title ? {color: '#FF8484', transition: "color 0.6s ease"} : {}}>{val.title}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div className='workSelectionContainer'>
                            <Card title={selected.title} description={selected.description} role={selected.role} technologies={selected.technologies}/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}