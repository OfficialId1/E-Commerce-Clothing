import React from 'react';
import LoginStructure from '../Components/LoginStructure';

export default function Login({setActive}) {
    setActive('btn3');
    
  return (
    <LoginStructure>
      <form action="#">
          <div>
            <label for='email'>Email</label><br />
            <input type="text" /><br /><br />
          </div>
          <div>
            <label for='pass'>Password</label><br />
            <input type="password" /><br /><br />
          </div>
          <div>
            <label for='cnfpass'>Confirm Password</label><br />
            <input type="password" /><br /><br />
          </div><br />
          <button id='login-button'>Login</button>
      </form>
    </LoginStructure>
  )
}
