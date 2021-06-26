import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Previous from "./Previous";
import Next from "./Next";
import Home from "./Home";
// import { useEffect, useState } from "react";
// import axios from 'axios';
const StyledOuterDiv = styled.div`
  margin-top: 1em;
  display: grid;
`;

const WrapperDiv = styled.div`
    align-self: center;
    justify-self: center;
    padding: 0 0.5em 0 0.5em;
   
`;

const StyleParagraph = styled.p`
    margin: 0;
`;


const  Details = (props) => {
    const {id} = useParams();
    const location = useLocation();
    const { characters } = location.state;
    const characterDetail = characters.filter(character => parseInt(id)===character.id ? character : undefined );
    // const [character, setCharacter] = useState(characterDetail[0]); 
       const character = characterDetail[0];
    const episodeCount = (character) => {
        const episode = character.episode;
        return episode.length;
    }
   
    return(
        <div>
            <StyledOuterDiv>
                <WrapperDiv>
                    <img src={character.image} alt={character.name} /> 
                    <StyleParagraph>Name - {character.name}</StyleParagraph>
                    <StyleParagraph>Gender - {character.gender}</StyleParagraph>
                    <StyleParagraph>Location of Origin - {character.origin.name}</StyleParagraph>
                    <StyleParagraph>Current Location - {character.location.name}</StyleParagraph>
                    <StyleParagraph>No. of Episodes appeared in - {episodeCount(character)}</StyleParagraph>
                    <div className="wrapper-bottom-nav">
                        <Previous character={characters} id={id}/>
                        <Home />
                        <Next character={characters} id={id}/>
                    </div>
                </WrapperDiv>
            </StyledOuterDiv>
        </div>
    )
}

export default Details;