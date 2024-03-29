import React from 'react';
import { Link } from 'react-router-dom'
import './image-display.css';

const Creatures = ({data}) => {
    console.log(data)
    const displayCreatures = data.map(creature => {
        const {id, image, type} = creature;
        return <Link to={`/${type}/${id}`}>
            <img src={image} alt='' key={id} className='app-img' />
        </Link>
    })
    return (
        <>
            <h1>Creatures</h1>
            {displayCreatures}
        </>
    )
}

export default Creatures