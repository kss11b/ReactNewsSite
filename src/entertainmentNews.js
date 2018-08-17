import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createArticleCards } from './articleHelpers.js'
import {getEntertainmentArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button, Preloader} from 'react-materialize'
import './App.css';

class EntertainmentNews extends Component {

componentDidMount() {
  this.props.getEntertainmentArticles()
}
componentDidUpdate() {

}

  render(){
    const { entertainmentArticles } = this.props;
    return (
      <div>
          <h1>Entertainment Articles</h1>
        <Row>
        {
        entertainmentArticles ? createArticleCards(entertainmentArticles) :  <Preloader size='big'/>
        }
      </Row>
  </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      entertainmentArticles: state.entertainmentArticles,
    };
  },
  {
    getEntertainmentArticles,
  }
)(EntertainmentNews);
