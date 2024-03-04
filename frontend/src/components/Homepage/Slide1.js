import React from 'react';

const Slide1 = () => {
  return (
    <div id="slide1" className="slides">
      <h2 className="pre-title">Ready to Embark on Your Immigration Journey? <strong>Let Us Guide You!</strong></h2>
      <p className="sub-title">Discover Your Immigration Opportunities</p>
      <h1 className="title"><strong>Free Eligibility Assesment</strong></h1>

      <div className="action-button-container">
        <button className="action-button">Start Now</button>
        <img className="action-button-arrow" src={require('../../static/arrow_right.png')} alt="Arrow Right" />
      </div>
    </div>
  )
}

export default Slide1;