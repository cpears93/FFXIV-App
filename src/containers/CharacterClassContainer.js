import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharacterClassList from '../components/character/CharacterClass';
import Request from '../helpers/request.js';

class CharacterClassContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      class: []
    }
  }

  render(){
    return(
      <Router>
       <Fragment>
        <Switch>
         <Route render={(props) => {
           return <CharacterClassList characterClass = {this.state.characterClass} />
         }} />
        </Switch>
      </Fragment>
     </Router>
    )
  }

}

export default CharacterClassContainer;
