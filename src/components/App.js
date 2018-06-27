import React, {Component} from 'react';
import './App.css';
import Menu from "./menu/Menu";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          App work!
          <Menu/>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
