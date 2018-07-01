import React, {Component} from 'react';
import {Link} from "react-router-dom"

import links from '../../resources/links.json';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.links = links.links;
    this.localS = [];
  }

  render() {

    const listOfLinks = this.links.map((val, index) =>
      <li key={val.id}>
        <Link to={val.link}>{val.name}</Link>
      </li>
    );

    return (

      <nav className="primary-menu">
        <ul>
          {listOfLinks}
        </ul>
      </nav>

    );
  }
}

export default Menu;
