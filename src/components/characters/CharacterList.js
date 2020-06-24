import React from 'react';
import Character from './Character.js';

const CharacterList = (props) => {

  if (props.characters.length === 0){
    return ("Loading...")
  }

  const characters = props.characters.map((character, index) => {
    return (
      <li key={index} className="component-item">
         <div className="component">
         <Character character={character} />
         </div>
      </li>
  )
  })

  return (
    <ul className="component-list">
      {characters}
    </ul>

  )
}
  export default CharacterList;
