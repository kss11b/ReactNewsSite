import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createArticleCards } from './articleHelpers.js'
import {getScienceArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button, Preloader} from 'react-materialize'
import './App.css';

class ScienceNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getScienceArticles()
}

  render(){
    console.log(
      'tech render', scienceArticles
    )
    const { scienceArticles } = this.props;
    return (
      <div>
          <h1>Science Articles</h1>
        <Row>
        {
        scienceArticles ? createArticleCards(scienceArticles) : <Preloader size='big'/>
        }
      </Row>
  </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      scienceArticles: state.scienceArticles,
    };
  },
  {
    getScienceArticles,
  }
)(ScienceNews);
