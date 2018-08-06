import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getTechArticles} from './actions/index.js'
import {Row, Col, Card, CardTitle, Button} from 'react-materialize'
import './App.css';

class TechNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getTechArticles()
}


createArticleCards = articles => {
  console.log('map articles', articles.articles)
  return articles.map(x => (
<div key={x.title}>
  <Col s={4}>
    {/* header={<CardTitle image={x.urlToImage} />} */}
      <Card className="blue" title={x.title} >
        <p>{x.description}</p>
        <Button waves='light' node='a' href={x.url}> Read More</Button>
      </Card>
  </Col>
</div>
)
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
        <Row>
        {
        techArticles ? this.createArticleCards(techArticles) : <CircularProgress size={50}/>
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
