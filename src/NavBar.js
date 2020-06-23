import React from 'react';

const NavBar = (props) => {
  return (
    <header>
    <img src="https://www.mmo-services.com/images/iconesmmorpg/icone_ff14_256_256.png" alt="logo"/>



      <ul>
        <li className="navLink">
          <a href="/characters">Characters</a>
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
