import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import { FaShoppingCart,FaUser,FaSignInAlt,FaHome} from "react-icons/fa";

// active is passed as props from App.js. 'active' variable has got its value form 
// component link which is visited. 
export default function Navbar({active}) {
  return (
    <div className='navbar' style={{marginBottom:'45px'}}>
        <ul>
            <li>
                {/* for Home value of active is 'btn1'. Below condition in classname
                compares the value of active, if it's true its's got 'active' classname */}
                <Link to='/' className={active=='btn1' && 'active'}>
                    <FaHome className='link-icon'/> &nbsp; Home
                </Link>
            </li>
            <li>
                <Link to='/registration' className={active=='btn2' && 'active'}>
                    <FaUser className='link-icon'/> &nbsp; Registration
                </Link>
            </li>
            <li>
                <Link to='/login' className={active=='btn3' && 'active'}>
                    <FaSignInAlt className='link-icon'/> &nbsp; Login
                </Link>
            </li>
            <li>
                <Link to='/cart' className={active=='btn4' && 'active'}>
                    <FaShoppingCart className='link-icon'/> &nbsp; My Cart
                </Link>
            </li>
        </ul>
    </div>
  )
}
