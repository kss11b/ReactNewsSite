import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createArticleCards } from './articleHelpers.js'
import {getPoliticalArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button, Preloader} from 'react-materialize'
import './App.css';

class PoliticalNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getPoliticalArticles()
}

  render(){
    console.log(
      'political render', politicalArticles
    )
    const { politicalArticles } = this.props;
    return (
      <div>
          <h1>Political Articles</h1>
        <Row>
        {
        politicalArticles ? createArticleCards(politicalArticles) :  <Preloader size='big'/>
        }
      </Row>
  </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      politicalArticles: state.politicalArticles,
    };
  },
  {
    getPoliticalArticles,
  }
)(PoliticalNews);
