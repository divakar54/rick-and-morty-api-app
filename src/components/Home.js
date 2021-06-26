import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const id = parseInt(props.id);
    return(
        <Link to={`/`} className="bottom-navigation">
            <p>Home</p>
        </Link>
    )
}

export default Home;
