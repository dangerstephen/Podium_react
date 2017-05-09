import React, { Component } from 'react';
import Review from '../review/index.js';
import '../App.css';

class Reviews extends Component {

  render() {
    if(this.props.reviews === null){
      return (
        <div className="card">
  <h1>Attempting to find posts...</h1>
      </div>
      );
    } else {
      return (
        <div className="cards">
          {this.props.reviews.map(function(review){
            return <Review review={review} key={review.id}/>
          })}
        </div>
      );
    }
  }

}

export default Reviews;
