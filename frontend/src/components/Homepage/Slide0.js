import React from 'react';

const Slide0 = () => {
  return (
    <div id="slide0" className="slides">
      <h2 className="pre-title">Your Fast Track to Canadian Immigration</h2>
      <h1 className="title"><strong>YOUR IMMIGRATION</strong></h1>
      <p className="sub-title">Unlock Your Canadian Dreams with MIGRATE</p>

      <div className="action-button-container">
        <button className="action-button">Try Now</button>
        <img src={require('../../static/arrow_right.png')} alt="Arrow Right" />
      </div>
    </div>
  )
}

export default Slide0;