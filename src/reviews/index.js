import React, { Component } from 'react';
import Review from '../review/index.js';
import '../App.css';

class Reviews extends Component {

  render() {
    if(this.props.reviews === null){
      return (
        <div className="Card">
  <div className="provider"><i className="card-social__icon fa fa-search"></i></div>
  <div className="details">
  <h1>Searching For Posts...</h1>
  </div>
  <div className="count"></div>
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
