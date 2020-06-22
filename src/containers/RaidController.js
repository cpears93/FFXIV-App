import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RaidList from '../components/raids/raid';
import Request from '../helpers/request.js';

class RaidContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      raids: []
    }
  }

  render(){
    return(
      <Router>
       <Fragment>
        <Switch>
         <Route render={(props) => {
           return <Raidlist raids={this.state.raids} />
         }} />
        </Switch>
       </Fragment>
      </Router>
    )
  }

}

export default RaidContainer;
