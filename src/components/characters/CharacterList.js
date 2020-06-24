import React from 'react';
import Character from './Character.js'

const CharacterList = (props) => {

  // if (props.characters.length === 0){
  //   return ("Loading...")
  // }

  const characters = props.characters.map((character) => {
    return (
      <li key={character.id} className="component-item">
         <Character character={character} />
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
