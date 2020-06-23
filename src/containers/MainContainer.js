import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CharacterContainer from './CharacterContainer.js';
`import ServerContainer from './ServerContainer.js';`

const MainContainer = () => {

  return (
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
      <Route path="/character" component={CharacterContainer} />
      
    </Switch>


    </Fragment>
    </Router>
  )
}

export default MainContainer;
