import '../section.css';
import './about.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import portraitImage from '../../public/portrait.jpeg'

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
                            When I'm not building or creating you can find me either in the gym or in nature. Exercising is by far my
                            favorite thing to do and is something I hold dear to me. When paired with some good weather and a nice view,
                            I feel like I'm in heaven.
                        </p>
                    </motion.div>
                </div>
                <div className="avatarContainer">
                    <motion.div 
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                    }}
                    viewport={{once: true}}
                    transition={{
                        duration: 2,
                        type: 'spring'
                    }}
                    whileHover={{
                        scale: 1.1
                    }}
                    className="imageContainer">
                        <Image src={portraitImage} className="image" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}