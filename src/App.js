import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Click from './click.js'
import TechNews from './techNews.js'
import AppBar from '@material-ui/core/AppBar';
import './App.css';

const MainMenu = () => {return(
  <div>
    <Link to="/home">
      <button>
        Home
      </button>
    </Link>
    <Link to="/counter">
      <button>
        Counter
      </button>
    </Link>
    <Link to="/tech">
      <button>
        Tech
      </button>
    </Link>
  </div>
)}

const Home = () => {return(
  <h1>
    Home
  </h1>
)}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <header className="App-header"> */}
            <h1 className="App-title">Cruise News</h1>
            <MainMenu />
          {/* </header> */}
            <Route exact path="/home" component={Home}/>
            <Route exact path="/counter" component={Click}/>
            <Route exact path="/tech" component={TechNews}/>

        </div>
      </Router>
    );
  }
}

export default App;
