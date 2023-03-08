import '../section.css'
import './work.css'
import Card from './Card';
import { workData } from './workData';
import { useState } from 'react';

export default function Work(){
    const [selected, setSelected] = useState(workData[0])
    const [hovered, setHover] = useState(null);
    

    return (
        <div className="section">
            <div className='workContainer'>
                <div style={{height: '100%'}}>
                    <div className='titleContainer'>
                        <h1 className='titleText'>Projects</h1>
                    </div>
                    <div className='cardContainer'>
                        <div className='workChoiceContainer'>
                            {workData.map((val, i) => {
                                return (
                                    <div onMouseEnter={() => setHover(val.title)} 
                                        onMouseLeave={() => setHover(null)} 
                                        onClick={() => setSelected(val)}
                                        key={i} 
                                        style={selected.title == val.title ? {borderLeftColor: '#FF8484', borderLeftWidth: 3} : {}} 
                                        className='workTitleContainer'>
                                        <p style={selected.title == val.title || hovered == val.title ? {color: '#FF8484'} : {}}>{val.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='workSelectionContainer'>
                            <Card title={selected.title} description={selected.description} role={selected.role} technologies={selected.technologies}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}