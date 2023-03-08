import './section.css';
import './landing.css';
import { TypeAnimation } from 'react-type-animation';

export default function Landing({name}) {

    return (
        <div className="section">
            <div className="wrapperSection">
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
                        I am currently a student at Boston University studying computer science. 
                        I have a passion for creating applications to make someones, or my own, ideas come to life. 
                        Learning is something I am also passionate about, as I always challenge myself to learn new frameworks
                        and hone my skills.
                    </p>
                </div>
            </div>
        </div>
    );
}