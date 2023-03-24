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
                    <p>I say we keep in touch and do some work together in the future! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className="contactContainer">
                <div className="emailContainer">
                    <ContactForm />
                </div>
                <div className='iconContainer'>
                    <div className='icon'>
                        <FiGithub size={'35%'} />
                    </div>
                    <div className='icon'>
                        <FiLinkedin size={'35%'} />
                    </div> 
                </div>
            </div>
        </div>
    )
}