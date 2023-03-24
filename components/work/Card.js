import './card.css'

export default function Card({title, role, description, technologies}) {

    return (
        <div className="card">
            <h1 className="titleText">{title}</h1>
            <p className="roleText">{role}</p>
            <p className="descriptionText">{description}</p>
            <div className="techWrapper">
                {technologies?.map((val, i) => {
                    return (
                        <div key={i} className='techContainer'>
                            <p className='techText' key={i}>{val}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}