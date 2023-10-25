import React from 'react';
import LoginStructure from '../Components/LoginStructure';

export default function Login({setActive}) {
    setActive('btn2');
    
  return (
    <LoginStructure>
      <form action="#">
          <div>
            <label for='name'>Name</label><br />
            <input type="text" /><br /><br />
          </div>
          <div>
            <label for='number'>Mobile Number</label><br />
            <input type="number" /><br /><br />
          </div>
          <div>
            <label for='pass'>Password</label><br />
            <input type="password" /><br /><br />
          </div><br />
          <button id='login-button'>Register</button>
      </form>
    </LoginStructure>
  )
}
