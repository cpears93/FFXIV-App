import React from 'react';
import Character from './Character.js';

const CharacterList = (props) => {

  if (props.character.length === 0){
    return ("Loading...")
  }

  const allCharacters = props.characters.map((character) => {
    return (
      <li key={character.id} className="component-item">
         <Character character={character} />
      </li>
  )
  })

  return (
    <ul className="component-list">
      {allCharacters}
    </ul>

  )
}
  export default CharacterList;
