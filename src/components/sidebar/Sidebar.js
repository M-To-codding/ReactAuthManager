import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <article className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </article>
    );
  }
}

export default Sidebar;