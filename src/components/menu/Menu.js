import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Appbar from 'muicss/lib/react/appbar';

import links from '../../resources/links.json';
import sessionStHandlers from "../../helpers/sessionHandlers";

class Menu extends Component {

  constructor(props) {
    super(props);
    this.links = links.links;
    this.localS = [];
    this.state = {
      sessionData: sessionStHandlers.getItems('user')
    }
  }

  handleExitBtn(){
    sessionStHandlers.removeUser('user');
    window.location.href='/login';
  }

  render() {

    const listOfLinks = this.links.map((val, index) =>
      <li key={val.id} className="nav-item">
        <Link to={val.link} className="nav-link">{val.name}</Link>
      </li>
    );

    return (

      <nav className="primary-menu">
        <ul className="nav-items left-items">
          {listOfLinks}
        </ul>

        {this.state.sessionData &&
        <ul className="nav-items right-items">
         <li className="exit-btn">
           <a href="#" onClick={this.handleExitBtn} className="nav-link">Exit</a>
         </li>
        </ul>
        }
      </nav>

    );
  }
}

export default Menu;
