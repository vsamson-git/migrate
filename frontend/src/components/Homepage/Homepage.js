import React, { useState } from 'react';
import Slide0 from './Slide0';
import Slide1 from './Slide1';
import imgs from './Slide_imgs';

const Homepage = () => {
  let [slider, setSlider] = useState(0);
  return (
    <div id="homepage_container">
      <a><img src={require("../../static/slider_arrow.webp")} width="40px" height="40px" alt="Left Arrow" /></a>
      <div id="slider-container">
        <div id="slider_text">
          <img className="slider-image" src={imgs[slider]} />
          <nav id="slider_menu">
            <a href="#">Highlight</a>
            <a href="#">Specification</a>
            <a href="#">Compare</a>
          </nav>
          {slider === 0 ? <Slide0 /> : <Slide1 />}
        </div>
      </div>
      <a><img src={require("../../static/slider_arrow.webp")} width="40px" height="40px" alt="Right Arrow" style={{ transform: "rotate(180deg)" }} /></a>

    </div>
  );
}

export default Homepage;