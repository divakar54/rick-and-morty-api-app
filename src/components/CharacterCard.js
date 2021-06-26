import './style.css'
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    return(
        <Link 
            to={
                {
                 pathname:`/details/${props.id}`, 
                 state: {characters : props.characters}
                }
            } 
            className="character-card"
        >
            
            <img src={props.image} alt={props.name} />
            <p>{props.name}</p>
        </Link>
    )
}

export default CharacterCard;