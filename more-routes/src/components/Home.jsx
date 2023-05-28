import React from 'react';
import { Link } from 'react-router-dom';



const Home = (props) => {
    return (
      <div>
        <h1>
          Home Component
        </h1>
        <Link to={'/99'}>Button</Link>
      </div>
    )
  }

export default Home;