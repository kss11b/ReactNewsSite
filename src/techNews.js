import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createArticleCards } from './articleHelpers.js'
import {getTechArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button} from 'react-materialize'
import './App.css';

class TechNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getTechArticles()
}

  render(){
    console.log(
      'tech render', techArticles
    )
    const { techArticles } = this.props;
    return (
      <div>
          <h1>Tech Articles</h1>
        <Row>
        {
        techArticles ? createArticleCards(techArticles) : <CircularProgress size={50}/>
        }
      </Row>
  </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      techArticles: state.techArticles,
    };
  },
  {
    getTechArticles,
  }
)(TechNews);
