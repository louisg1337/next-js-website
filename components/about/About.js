import '../section.css';
import './about.css';
import { motion } from 'framer-motion';

export default function About(){


    return (
        <div className="section">
            <div className="aboutContainer">
                <div className="bioContainer">
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{ duration: 1 }}>
                        <h1 style={{marginBottom: '5%'}}>About Me</h1>
                        <p style={{marginBottom: '5%'}}>I am currently a sophomore at Boston University, pursuing a B.A. in Computer Science. 
                            My whole life I've been in love with creating things, whether it was lua based Roblox games, or simple 
                            HTML / CSS websites, I have always been involved with coding in some capacity. With more knowledge at my 
                            finger tips now, I have been non-stop creating, all of which you can see down below in my projects section.
                        </p>
                        <p>
                            When I'm not building or creating you can find me outside, either in the gym or in nature. I love exercise
                            of all types, whether it is weight lifting or long nature walks on new trails around me.
                        </p>
                    </motion.div>
                </div>
                <div className="avatarContainer">
                
                </div>
            </div>
        </div>
    );
}