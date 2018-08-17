import React from 'react'
import {Row, Col, Card, Button} from 'react-materialize'
export const createArticleCards = articles => {
  // console.log('map articles', articles.articles)
  console.log(articles, 'articles')
  // if(articles.length){
  return articles
  .map(x => (
    <div key={x.get('title')}>
      <Col s={4}>
          <Card className="blue articleCards white-text">
            <h5 >{x.get('title').length > 50 ? `${x.get('title').substring(0, 75)}...` : x.get('title') }</h5>
            <p>{x.get('description') ? `${x.get('description').substring(0, 200)}...` : null}</p>
            <Button className='card-button indigo darken-1' waves='light' node='a' href={x.get('url')}> Read More</Button>
          </Card>
      </Col>
    </div>
            )
  )
}
// }
// export const { createArticleCards }
