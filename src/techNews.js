import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getTechArticles} from './actions/index.js'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import './App.css';

class TechNews extends Component {

componentDidMount() {
  console.log('tech mounted')
  this.props.getTechArticles()
}


createArticleCards = articles => {
  console.log('map articles', articles.articles)
  return articles.map(x =>
    <Grid item xs={4} key={x.title}>
      <Card className='articleCards'>
        {/* <CardMedia
          // image={x.urlToImage}
          height={0}
          src={x.urlToImage}
          title="Contemplative Reptile"
        /> */}
        <CardContent className='articleCards'>
          <Typography gutterBottom variant="headline" component="h2" key={x.title}>{x.title}</Typography><Typography component="p">{x.description}</Typography><Button type="button" href={x.url}>Read More</Button>
        </CardContent>
      </Card>
  </Grid>
  )
}


  render(){
    console.log(
      'tech render', techArticles
    )
    const { techArticles } = this.props;
    return (
      <div>
      <Grid container justify='center' spacing={8}>
        <Grid item xs={12}>
          <h1>Tech Articles</h1>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="stretch">
        {
        techArticles ? this.createArticleCards(techArticles) : <CircularProgress size={50}/>
        }
    </Grid>
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
