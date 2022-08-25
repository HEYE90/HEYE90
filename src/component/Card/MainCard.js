
import React from 'react'
import Card from './Card';
import './Card.css'
import EmptyCard from './EmptyCard';


const MainCard = (props) => {

    const data = props.data

    if (data.length === 0) {
        return <EmptyCard />
    }

    return (
        <div className="mainCard">
            {props.children}
            <Card value={props.value} data={data} />
        </div>
    )
}

export default MainCard