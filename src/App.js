import React, { useState, useEffect } from 'react'
import DisplayCards from './components/DisplayCards';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./components/style.css";
import axios from 'axios';
import Details from './components/Details';
import styled from 'styled-components';
// import data from './data'
// import List from './List';
const StyledOuterDiv = styled.div`
  margin-top: 1em;
`;

const App = () => {

  const [name, setName] = useState('');

  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    getCharactersInfo();
  }, [])

  const getCharactersInfo = async() => {
    const res = await axios.get("https://rickandmortyapi.com/api/character")
    const json = res.data.results;
    setCharacters(json);
  }

  return(
    
    <div>
      <StyledOuterDiv>
      <Router>
        <Switch>
          <Route path={`/details/:id`}>
            <Details />
          </Route>
          <Route path="/">
            <DisplayCards characters={characters} />
          </Route>
        </Switch>
      </Router>
      </StyledOuterDiv>
      </div>
    
  )
}

export default App;
