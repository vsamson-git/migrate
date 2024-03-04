import React, { useState, useEffect } from 'react';
import { useGetWeatherQuery } from '../store/apiSlice';


const Header = () => {

  const cities = ["Calgary", "Edmonton"];
  const [currentCity, changeCity] = useState(cities[0]);

  const {
    data,
    isLoading,
    isFetching,
    refetch: refetchWeather
  } = useGetWeatherQuery(currentCity);

  let hours = !isLoading ? (new Date(data['location']['localtime'])).getHours() : 0;
  let temperature = !isLoading ? data['forecast']['forecastday'][0]['hour'][hours].temp_c : 0;
  let icon = !isLoading ? data['current']['condition']['icon'] : "";

  let tempContent =
    <div id="temperature">
      <img src={icon} id="weather-icon" with="50px" height="50px" />
      {temperature}&#8451;,
      <select name="cities" onChange={e => changeCity(e.target.value)}>
        {cities.map(city => <option key={city} value={city}>{city}</option>)}
      </select>
      <div className="dropdown">
        <button className="dropdown-button"></button>
        <div className="dropdown-menu">
          {cities.map(city => <a key={city} href="#" onClick={(e) => { console.log(e); changeCity(e.target.innerText) }}>{city}</a>)}
        </div>
      </div>
    </div>;

  useEffect(() => {
    const interval = setInterval(refetchWeather, 1000 * 60);
    return () => clearInterval(interval);
  }, [])

  return (
    <div id="header-container">
      <nav>
        <section className="column_nav_section">
          {tempContent}
          <div id="language">
            <img src={require("../static/globus_lang.png")} with="15px" height="15px" alt="Globus Language" />
            <img src={require("../static/arrow_down_nav.png")} with="10px" height="10px" alt="Menu Arrow Down" />
          </div>
        </section>
        <section className="row_nav_section">
          <section className="row_nav_section">
            <img id="menu-button" src={require("../static/hamburger.png")} with="40px" height="40px" alt="Menu Hamburger" />
            <img id="logo" src={require("../static/logo.png")} with="50px" height="50px" alt="Logo" />
          </section>
          <section className="row_nav_section">
            <div className="nav-el">
              <a href="#email">Home</a>
              <img src={require("../static/arrow_down_nav.png")} with="10px" height="10px" alt="Menu Arrow Down" />
            </div>
            <div className="nav-el">
              <a href="#email">Services</a>
              <img src={require("../static/arrow_down_nav.png")} with="10px" height="10px" alt="Menu Arrow Down" />
            </div>
            <div className="nav-el">
              <a href="#email">About</a>
              <img src={require("../static/arrow_down_nav.png")} with="10px" height="10px" alt="Menu Arrow Down" />
            </div>
            <div className="nav-el">
              <a href="#email">Blog</a>
              <img src={require("../static/arrow_down_nav.png")} with="10px" height="10px" alt="Menu Arrow Down" />
            </div>
            <div className="nav-el">
              <a href="#email">Contact</a>
              <img src={require("../static/arrow_down_nav.png")} with="10px" height="10px" alt="Menu Arrow Down" />
            </div>
          </section>
          <section className="row_nav_section">
            <div id="search">
              <img src={require("../static/search.webp")} with="30px" height="30px" alt="Search" />
            </div>
            <div id="sign_in">
              <button id="sign_in_button">
                <img src={require("../static/profile_icon.webp")} with="20px" height="20px" alt="Profile Icon" />
                <span>Sign In</span>
              </button>
            </div>
          </section>
        </section>
      </nav>
    </div>
  );
}

export default Header;