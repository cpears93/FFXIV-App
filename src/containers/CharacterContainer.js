import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharacterList from '../components/characters/CharacterList';
import Request from '../helpers/request.js';

class CharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    console.log("character container did mount")
    const request = new Request();

    request.get('http://localhost:8080/api/characters')
    .then((data) => {
      console.log(data);
      this.setState({characters: data})
    })
  }


  render(){
    if (!this.state.characters || this.state.characters.length === 0){
      return (<h2>Loading</h2>)
    }

    return(
      <CharacterList character = {this.state.characters} />
    )
  }

}

export default CharacterContainer;
