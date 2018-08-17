import React from 'react'
import {Row, Col, Card, Button} from 'react-materialize'
export const createArticleCards = articles => {
  console.log('map articles', articles.articles)
  return articles
  .map(x => (
    <div key={x.title}>
      <Col s={4}>
          <Card className="blue articleCards white-text">
            <h5 >{x.title.length > 50 ? `${x.title.substring(0, 75)}...` : x.title }</h5>
            <p>{x. description ? `${x.description.substring(0, 200)}...` : null}</p>
            <Button className='card-button indigo darken-1' waves='light' node='a' href={x.url}> Read More</Button>
          </Card>
      </Col>
    </div>
            )
  )
}

// export const { createArticleCards }
