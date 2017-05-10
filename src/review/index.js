import React, { Component } from 'react';
import Fetch from '../api/index.js'
import Time from 'react-time-format';
import '../styles/App.css';

class Review extends Component {
  constructor(props){
    super(props);
    this.state = this.props.review;
    let {review} = this.props;
    review.isClicked = false;
    review.body = ' ';
    this.onClick = this.onClick.bind(this);
  }

onClick = async (reviewId) => {
  const { data } = await Fetch(`http://shakespeare.podium.co/api/reviews/${reviewId}`);
  this.setState({
    isClicked: true,
    body: data.body
  });
}

  render() {
    const review = this.props.review;
      return (
        <div className="button" onMouseEnter={() => {this.onClick(review.id)}}>
        <div className="row center">
        <div className="card">
       <div className="wrapper">
         <div className="date">
         <span className="day"><Time value={(review.publish_date)} format="DD"/></span>
         <span className="month"><Time value={(review.publish_date)} format="MM"/></span>
         <span className="year"><Time value={(review.publish_date)} format="YYYY"/></span>
         </div>
         <div className="data">
           <div className="content">
           <h1 className="title">{review.rating} / 5</h1>
             <span className="author">{review.author}</span>
             {this.state.isClicked && <div className="body"> {this.state.body}</div>}
           </div>
           </div>
         </div>
       </div>
     </div>
     </div>
      );
  }
}

export default Review;
