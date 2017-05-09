import React, { Component } from 'react';
import Time from 'react-time-format';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

class Review extends Component {


  constructor(props){
    super(props);
    this.state = this.props.review;
  }



  render() {
    const review = this.props.review;
      return (
        <div className="row">
        <div className="card">
         <div className="wrapper">
          <div className="date">
           <span className="day"><Time value={(review.publish_date)} format="DD"/></span>
           <span className="month"><Time value={(review.publish_date)} format="MM"/></span>
           <span className="year"><Time value={(review.publish_date)} format="YYYY"/></span>
         </div>
         <div className="data">
            <div className="content">
              <h1 className="title">
              <StarRatingComponent
                        name="reviewRate"
                        editing={false}
                        starCount={5}
                        value={(review.rating)}
                    /></h1>
               <span className="reviwer">{review.author}</span>
            </div>
           </div>
        </div>
      </div>
     </div>
      );

  }

}

export default Review;
