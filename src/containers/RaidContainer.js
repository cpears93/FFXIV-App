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
    const request = new Request();

    request.get('api/raid')
    .then(data => this.setState({raid: data}))
  }

  render(){
    return(
      <Router>
       <Fragment>
        <Switch>
         <Route render={(props) => {
           return <RaidList raids={this.state.raids} />
         }} />
        </Switch>
       </Fragment>
      </Router>
    )
  }

}

export default RaidContainer;
