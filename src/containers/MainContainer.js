import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CharacterClassContainer from './CharacterClassContainer.js';
import ServerContainer from './ServerContainer.js';

const MainContainer = () => {

  return (
    <Router>
    <Fragment>
    <Navbar/>
    <Switch>
      <Route path="/character" component={CharacterClassContainer} />
    </Switch>

    </Fragment>
    </Router>
  )
}

export default MainContainer;
