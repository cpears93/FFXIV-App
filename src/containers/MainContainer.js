import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CharacterContainer from './CharacterContainer.js';
import ServerContainer from './ServerContainer.js';
import RaidContainer from './RaidContainer.js';

const MainContainer = () => {

  return (
    <Router>
    <Fragment>
    <NavBar/>
    <Switch>
      <Route path="/character" component={CharacterContainer} />
      <Route path="/server" component={ServerContainer} />
      <Route path="/raid" component={RaidContainer} />
    </Switch>


    </Fragment>
    </Router>
  )
}

export default MainContainer;
