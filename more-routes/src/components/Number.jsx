import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Number = () => {
    const { numLock } = useParams();

    const [randomWord, setRandomWord] = useState('');

    const generateRandomWord = () => {
    const words = ['Watermellon', 'Grapes', 'Surfboard', 'Monkey', 'Doritos', 'GTA VI'];
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
    };

    return (
    <div>
        <h1>Your Lucky Number is {numLock}!</h1>
        <button onClick={generateRandomWord}>Generate Random Word</button>
        {randomWord && (
        <Link to={`/${randomWord}/red/green`}>Word of the day is {randomWord}</Link>
        )}
    </div>
    );
    };

export default Number;