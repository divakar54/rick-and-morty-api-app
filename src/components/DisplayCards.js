import CharacterCard from './CharacterCard';

const DisplayCards = ({characters}) => {
    // console.log(characters[0].id)
    return (
        <div className="flex-div">
            <div className="display-card">
                {
                    characters.map((character) => <CharacterCard 
                                                        key={character.id} 
                                                        id={character.id}
                                                        name={character.name} 
                                                        image={character.image} 
                                                        characters={characters}/>)
                }
            </div>
        </div>
    )
}

export default DisplayCards;