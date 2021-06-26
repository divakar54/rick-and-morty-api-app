import React from 'react'
import { Link } from 'react-router-dom'

const Next = (props) => {
    const id = parseInt(props.id);
    return(
        <Link to={`/details/${id+1}`} className="bottom-navigation">
            <p>Next</p>
        </Link>
    )
}

export default Next;
