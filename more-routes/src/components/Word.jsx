import React from 'react';
import { useParams, Link } from 'react-router-dom';



const Word = (props) => {
    const { word, color, color2 } = useParams();

    const style = {
        color: color,
        backgroundColor: color2,
        padding: '10px',
        borderRadius: '5px'
    };

    return (
        <div style={style}>
        <h1>Word of the day is: { word }!</h1>
        <Link to={'/'}>Button</Link>
        </div>
    )
    }


export default Word;