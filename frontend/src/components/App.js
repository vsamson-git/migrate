import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Homepage from "./Homepage/Homepage";
import Registration from "./Registration";

const App = () => {

  return (
    <div id="app">
      <Header />
      <Homepage />
      <Registration />
    </div>
  )
}

export default App;