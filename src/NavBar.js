import React from 'react';

const NavBar = (props) => {
  return (
    <header>
      <img src="..." alt="logo"/>

      <ul>
        <li className="navLink">
          <a href="/character">Character</a>
        </li>
        <li className="navLink">
          <a href="/servers">Servers</a>
        </li>
        <li className="navLink">
          <a href="/raids">Raids</a>
        </li>

      </ul>
    </header>
  )
}

export default NavBar;
