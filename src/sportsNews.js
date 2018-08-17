import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createArticleCards } from './articleHelpers.js'
import {getSportsArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button, Preloader} from 'react-materialize'
import './App.css';

class SportsNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getSportsArticles()
}

  render(){
    console.log(
      'tech render', sportsArticles
    )
    const { sportsArticles } = this.props;
    return (
      <div>
          <h1>Sports Articles</h1>
        <Row>
        {
        sportsArticles ? createArticleCards(sportsArticles) :  <Preloader size='big'/>
        }
      </Row>
  </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      sportsArticles: state.sportsArticles,
    };
  },
  {
    getSportsArticles,
  }
)(SportsNews);
