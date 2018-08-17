import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createArticleCards } from './articleHelpers.js'
import {getBusinessArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button, Preloader} from 'react-materialize'
import './App.css';

class BusinessNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getBusinessArticles()
}

  render(){
    console.log(
      'tech render', businessArticles
    )
    const { businessArticles } = this.props;
    return (
      <div>
          <h1>Business Articles</h1>
        <Row>
        {
        businessArticles ? createArticleCards(businessArticles) :  <Preloader size='big'/>
        }
      </Row>
  </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      businessArticles: state.businessArticles,
    };
  },
  {
    getBusinessArticles,
  }
)(BusinessNews);
