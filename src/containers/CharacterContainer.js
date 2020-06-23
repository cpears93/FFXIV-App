import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharacterList from '../components/character/CharacterList';
import Request from '../helpers/request.js';

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/characters')
    .then((data) => {
      this.setState({characters: data})
    })
  }

  render(){
    return(
      <Router>
       <Fragment>
        <Switch>
         <Route render={(props) => {
           return <CharacterList character = {this.state.character} />
         }} />
        </Switch>
      </Fragment>
     </Router>
    )
  }

}

export default CharacterContainer;
