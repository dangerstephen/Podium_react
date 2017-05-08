import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="card">
     <div className="wrapper">
      <div className="date">
       <span className="day">Day</span>
       <span className="month">Month</span>
       <span className="year">Year</span>
     </div>
     <div className="data">
        <div className="content">
          <h1 className="title">Title</h1>
           <span className="reviwer">Reviwer</span>
        </div>
       </div>
    </div>
  </div>
    );
  }
}

export default App;
