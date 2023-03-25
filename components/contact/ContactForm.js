import { useState } from "react";
import './contactForm.css'


export default function ContactForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="contact">
            <h1>Contact me!</h1>
            <input 
                name="name" 
                value={name} 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)} 
                className="input"
            />
            <textarea 
                name="message" 
                value={message} 
                placeholder="Message" 
                onChange={(e) => setMessage(e.target.value)} 
                className="message"
            />
            <button className="submitButton" onClick={() => console.log("sent " + name + " " + message)}>Send</button>
        </div>
    )
}