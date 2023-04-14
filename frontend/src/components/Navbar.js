import React from 'react';
import './Navbar.css';
import {Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar(){
  
  return (
    <nav className='nav-container'>
          <Link to="/" className='sit-title'>Medico</Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/explore">Explore</CustomLink>
          <CustomLink to="/add">Add</CustomLink>
        </ul>
    </nav>
  );
}

function CustomLink({to,children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path:resolvedPath.pathname, end: true})
  return(
    <li className={isActive ? "active": ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
  
}