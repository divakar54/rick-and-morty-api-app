import { Link } from "react-router-dom";

const Previous = (props) => {
    const id = parseInt(props.id);
    return(
        <Link to={`/details/${id===1 ? id : id-1}`} className="bottom-navigation">
            <p>Previous</p>
        </Link>
    )
}

export default Previous;