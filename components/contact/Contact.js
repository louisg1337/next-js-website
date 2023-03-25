import './contact.css'
import '../section.css'

import {FiGithub, FiLinkedin} from 'react-icons/fi'
import ContactForm from './ContactForm'

export default function Contact(){
    return (
        <div className="section">
            <div className="ctaContainer">
                <div>
                    <h1 style={{marginBottom: '5%'}}>Did I catch your eye?</h1>
                    <p>I love to meet people, so feel free to send a quick message and maybe one day we can work together!</p>
                </div>
            </div>
            <div className="contactContainer">
                <div className="emailContainer">
                    <ContactForm />
                </div>
                <div className='iconContainer'>
                    <div className='icon'>
                        <a className="iconWrapper" href="https://github.com/louisg1337" target="_blank">
                                <FiGithub size={'50%'} color="white" />
                        </a>
                    </div>
                    <div className='icon'>
                        <a className="iconWrapper" href="https://www.linkedin.com/in/louis-grassi-34235b219/" target="_blank">
                                <FiLinkedin size={'50%'} color="white" />
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    )
}