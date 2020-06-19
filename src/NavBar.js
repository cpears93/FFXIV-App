import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="..." alt="logo"/>

      <ul>
        <li className="navLink">
          <a href="/class">Class</a>
        </li>
        <li className="navLink">
          <a href="/servers">Servers</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
