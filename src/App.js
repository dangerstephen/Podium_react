import React, { Component } from 'react';
import Fetch from './api/index.js';
import Reviews from './reviews/index.js';
import NavBar from './navbar/index.js';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null
    }
  }

  componentDidMount = async () => {
      const { data } = await Fetch('http://shakespeare.podium.co/api/reviews/');
      this.setState({
        reviews: data
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Reviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default App;
