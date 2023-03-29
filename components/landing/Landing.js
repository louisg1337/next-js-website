import '../section.css';
import './landing.css';

import Planet from '../planet/Planet';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Landing({name}) {

    return (
        <div className="section">
            <div className="wrapperSection">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{duration: 2}} style={{marginLeft: '20%'}}>
                    <h1 className="nameText">Hi, I'm Louis.</h1>
                    <div className="defineWrapper">
                        <h2 className='defineText'>I am a</h2>
                        <TypeAnimation
                        sequence={[
                            'student.',
                            2000,
                            'innovator.', // Types 'One'
                            2000, // Waits 1s
                            'creator.', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'developer.', // Types 'Three' without deleting 'Two'
                            2000
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "clamp(1rem, 8vw, 3rem)", color: '#FF8484', fontFamily: 'Arial', textDecorationLine:'underline', fontWeight: 'bold'}}
                        className="typeAnimation"
                        />
                    </div>
                    <div className='introTextWrapper'>
                        <p className="introText">
                            I am a passionate computer science enthusiast who is constantly pushing himself to achieve more
                            by constanty learning and challenging himself with new projects.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className='planetContainer'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{duration: 2}} className='planet'>
                    <Planet />
                </motion.div>
            </div>
        </div>
    );
}