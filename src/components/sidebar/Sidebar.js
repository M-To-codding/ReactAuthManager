import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <article className="sidebar">
        <nav className="sidebar-nav">
          <ul className="sidebar-tabs">
            <li className="sidebar-tab">
              <Link to="/info">Info</Link>
            </li>
            <li className="sidebar-tab">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </article>
    );
  }
}

export default Sidebar;