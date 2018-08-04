import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getItems} from './actions/index.js'
import './App.css';

class Click extends Component {

  state = {
    count: 0,
    autoIncrement: false,
    time: 0,
    autoInterval: 1000,
  }

componentDidMount() {
  this.interval = setInterval(() => this.timeIncrement(), this.state.autoInterval);
}

componentWillUnmount() {
  clearInterval(this.interval);
}

increaseCount = () => {
    this.setState({count: this.state.count + 1})
    console.log('Increased by 1')
}

decreaseCount = () => {
    this.setState({count: this.state.count - 1})
}

doubleCount = () => {
    this.setState({count: this.state.count * 2})
}

decreaseInterval = () => {
  clearInterval(this.interval);
  this.interval = setInterval(() => this.timeIncrement(), this.state.autoInterval);
  this.setState({autoInterval: this.state.autoInterval - 50})
}

autoCount = () => {
    this.setState({autoIncrement: !this.state.autoIncrement})
}

timeIncrement = () => {
  this.state.autoIncrement ? this.setState({ time: this.state.time + 1, count: this.state.count + 1}) : null
}
  render(){
    // console.log('time', this.state.time, this.state.autoIncrement, this.state.autoInterval)
    console.log(this.props.items, 'items')
    return (
      <div>
      <h1>Counting Demo</h1>
          <h1>{this.state.count}</h1>
          <h2>{this.props.items.source}</h2>
          <ul className="demo-list">
            <li><button className="demo-button" onClick={this.increaseCount}>Increase Count</button></li>
            <li><button className="demo-button" onClick={this.decreaseCount}>Decrease Count</button></li>
            <li><button className="demo-button" onClick={this.doubleCount}>Double Count</button></li>
            <li><button className="demo-button" onClick={this.autoCount}>Auto Count</button></li>
            <li><button className="demo-button" onClick={this.decreaseInterval}>Increse Rate</button></li>
            <li><button className="demo-button" onClick={this.props.getItems}>Action</button></li>
        </ul>
      </div>
    )
  }
}
export default connect(
  (state, ownProps) => {
    return {
      items: state.items,
    };
  },
  {
    getItems,
  }
)(Click);
