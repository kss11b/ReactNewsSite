import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getTechArticles} from './actions/index.js'
import './App.css';

class TechNews extends Component {


componentDidMount() {
  console.log('tech mounted')
  this.props.getTechArticles()
}


createArticleCards = articles => {
  console.log('map articles', articles.articles)
  return articles.map(x =>
    <li><h1>{x.title}</h1><p>{x.description}</p><a href={x.url}>Read More</a></li>
  )
}


  render(){
    console.log(
      'tech render', techArticles
    )
    const { techArticles } = this.props;
    return (
      <div>
      <h1>Tech Articles</h1>
          <ul>
            {
            techArticles ? this.createArticleCards(techArticles) : null
            // techArticles ? techArticles.map(x => <h1>{x.title}</h1>) : null
            }
        </ul>
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
