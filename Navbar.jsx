// npm i react-router-dom
//Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      
      <li>
          <Link to="/">Home</Link>
      </li>
        <li>
          <Link to="/Card">Plants</Link>
        </li>


      
    </>
  )
}
