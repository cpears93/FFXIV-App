import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ServerList from '../components/servers/ServerList';
import Request from '../helpers/request.js';

class ServerContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      servers: []
    }
  }

  componentDidMount(){
    console.log("server container did mount");
    const request = new Request();

    request.get('http://localhost:8080/api/servers')
    .then(data => this.setState({servers: data}))
  }

  render(){
    if (!this.state.servers || this.state.servers.length === 0){
      return (<h2>Loading</h2>)
    }

    return(
      <ServerList servers = {this.state.servers} />
    )
  }

}

export default ServerContainer;
