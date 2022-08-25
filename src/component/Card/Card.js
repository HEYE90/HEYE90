import React from 'react'
import Navigation from '../Navigation/Navigation';
import EmptyCard from './EmptyCard';

const Card = (props) => {

    const { search } = props.value;
    const data = props.data

    const projectData = data.filter((project) =>
        project.flowerName.toLowerCase().includes(search.toLowerCase()) ||
        project.flowerName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (projectData.length === 0) { return <EmptyCard /> }

    return (
        <>
            <div className="cardImage">
                <ul className='cardItems'>
                    {projectData.map((info, index) =>
                        <li key={index} className='cardItem'>
                            <Navigation className="cardItemLink" url={`/`} icon="" text="" >
                                <div className="cardTop">
                                    <img src={info.image} alt={info.flowerName}></img>
                                </div>
                                <div className="cardBotton">
                                    <p>{info.flowerName}</p>
                                </div>
                            </Navigation>
                        </li>
                    )}
                </ul>
            </div>
            <div className="cardInfo">
            </div>
        </>
    )
}

export default Card
