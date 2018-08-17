import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Row, Col, Card, CardTitle, Button, Navbar, NavItem} from 'react-materialize'
import TechNews from './techNews.js'
import SportsNews from './sportsNews.js'
import BusinessNews from './businessNews.js'
import ScienceNews from './scienceNews.js'
import PoliticalNews from './politicalNews.js'
import EntertainmentNews from './entertainmentNews.js'
import AppBar from '@material-ui/core/AppBar';
import './App.css';

const MainMenu = () => {return(
  <div>
    <Link to="/sports">
      <button>
        Sports
      </button>
    </Link>
    <Link to="/tech">
      <button>
        Tech
      </button>
    </Link>
    <Link to="/business">
    <button>
      Business
    </button>
  </Link>
  <Link to="/science">
  <button>
    Science
  </button>
  </Link>
  <Link to="/political">
  <button>
    Political
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
            <Navbar className='blue darken-1'>
              <NavItem>
                <Link to="/tech">
                  Tech News
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/sports">
                  Sports News
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/business">
                  Business News
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/science">
                  Science News
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/political">
                  Political News
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/entertainment">
                  Entertainment News
                </Link>
              </NavItem>
            </Navbar>
            <Route exact path="/" component={TechNews}/>
            <Route exact path="/tech" component={TechNews}/>
            <Route exact path="/sports" component={SportsNews}/>
            <Route exact path="/business" component={BusinessNews}/>
            <Route exact path="/science" component={ScienceNews}/>
            <Route exact path="/political" component={PoliticalNews}/>
            <Route exact path="/entertainment" component={EntertainmentNews}/>

        </div>
      </Router>
    );
  }
}

export default App;
