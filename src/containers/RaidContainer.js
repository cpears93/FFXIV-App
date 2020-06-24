import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RaidList from '../components/raids/RaidList';
import Request from '../helpers/request.js';

class RaidContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      raids: []
    }
  }

  componentDidMount(){
    console.log("raid container did mount");
    const request = new Request();

    request.get('http://localhost:8080/api/raids')
    .then(data => this.setState({raids: data}))
  }

  render(){
    if (!this.state.raids || this.state.raids.length === 0){
      return (<h2>Loading</h2>)
    }

    return(
      <RaidList raids = {this.state.raids} />
    )
  }

}

export default RaidContainer;
