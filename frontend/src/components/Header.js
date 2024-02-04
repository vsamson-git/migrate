import React from 'react';

const Header = () => {
  return (
    <div id="header-container">
      <nav>
        <section className="column_nav_section">
          <div id="temperature">
            <img src={require("../static/sun.png")} with="15px" height="15px" alt="Sun" />
          </div>
          <div id="language">
            <img src={require("../static/globus_lang.png")} with="15px" height="15px" alt="Globus Language" />
          </div>
        </section>
        <section className="row_nav_section">
          <section className="row_nav_section">
            <img src={require("../static/hamburger.png")} with="20px" height="20px" alt="Menu Hamburger" />
            <img src={require("../static/logo.png")} with="50px" height="30px" alt="Logo" />
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