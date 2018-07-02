import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/container';

import Contacts from './Contacts';
import Info from './Info';
import Sidebar from '../sidebar/Sidebar';
import sessionStHandlers from "../../helpers/sessionHandlers";
import localStHandlers from "../../helpers/localStHandlers";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionData: sessionStHandlers.getItems('user'),
      localStData: localStHandlers.getItems('user'),
      currentUser: ''
    }

  }

  getUserName(){
    this.state.localStData.forEach((val)=>{
      if(val.email === this.state.sessionData.Email){
        this.state.currentUser = val.name;
      }
    })
  }

  render() {
    this.getUserName();

    return (
      <Router>
        <Container>
          <Row className="home-page-data">
            <h1>Hello {this.state.currentUser}!</h1>

            <Sidebar/>

            <Route
              exact
              path="/info"
              component={Info}
            />
            <Route
              exact
              path="/contacts"
              component={Contacts}
            />
          </Row>
        </Container>
      </Router>

    );
  }
}

export default Home;
