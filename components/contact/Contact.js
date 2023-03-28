import './contact.css'
import '../section.css'

import {FiGithub, FiLinkedin} from 'react-icons/fi'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'

export default function Contact(){


    return (
        <div className="section">
            <motion.div initial={{x:-300, opacity: 0}} whileInView={{x: 0, opacity: 1}} viewport={{ once: true }} transition={{duration: 1}} className="ctaContainer">
                <div>
                    <h1 style={{marginBottom: '5%'}}>Did I catch your eye?</h1>
                    <p>I love to meet people, so feel free to send a quick message and maybe one day we can work together! If the form to your right isn't your thing, heres my email!</p>
                    <p style={{marginTop: '5%'}}>louisgrassi1337@gmail.com</p>
                </div>
            </motion.div>
            <div className="contactContainer">
                <div className="emailContainer">
                    <ContactForm />
                </div>
                <div className='iconContainer'>
                    <div className='icon'>
                        <motion.a whileHover={{rotate: 360, transition: {duration: 0.5}}} className="iconWrapper" href="https://github.com/louisg1337" target="_blank">
                            <FiGithub size={'50%'} color="white" />
                        </motion.a>
                    </div>
                    <div className='icon'>
                        <motion.a whileHover={{rotate: 360, transition: {duration: 0.5}}} className="iconWrapper" href="https://www.linkedin.com/in/louis-grassi-34235b219/" target="_blank">
                            <FiLinkedin size={'50%'} color="white" />
                        </motion.a>
                    </div> 
                </div>
            </div>
        </div>
    )
}