import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  async function handleForm() {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      return axios.post('/auth/register', { email, password }).then(() => {
        console.log('Registered!');
      }).catch((err) => console.log(err));
    }
    return alert('Wrong Email Format');
  }

  return (
    <div id="registration">
      <label htmlFor='email'>Input your Email:</label>
      <input type="email" required placeholder="My Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Input your password:</label>
      <input type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleForm}>Register</button>
    </div>
  )
}

export default Registration;