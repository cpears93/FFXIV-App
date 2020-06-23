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
    const request = new Request();

    request.get('api/servers')
    .then(data => this.setState({servers: data}))
  }

  render(){
    return(
      <Router>
       <Fragment>
        <Switch>
         <Route render={(props) => {
           return <ServerList servers={this.state.servers} />
         }} />
        </Switch>
       </Fragment>
      </Router>
    )
  }

}

export default ServerContainer;
