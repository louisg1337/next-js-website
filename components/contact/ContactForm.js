import { useState } from "react";
import './contactForm.css'
import { motion } from "framer-motion";


export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formContainer = {
        hidden: {
            opacity: 1,
            transiiton: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        },
        visible: { 
            opacity: 1, 
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    }

    const forms = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
    }

    return (
        <motion.div variants={formContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="contact">
            <motion.h1 variants={forms}>Contact me!</motion.h1>
            <motion.input 
                variants={forms}
                name="email" 
                value={email} 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)} 
                className="input"
            />
            <motion.textarea 
                variants={forms}
                name="message" 
                value={message} 
                placeholder="Message" 
                onChange={(e) => setMessage(e.target.value)} 
                className="message"
            />
            <motion.button variants={forms} whileHover={{scale: 1.1}} className="submitButton" onClick={() => console.log("sent " + name + " " + message)}>Send</motion.button>
        </motion.div>
    )
}