import React from 'react';
import './LoginStructure.css';

export default function LoginStructure({children}) {
  return (
    <div className='login'>
      {children}
    </div>
  )
}
