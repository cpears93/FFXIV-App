import React from 'react';
import CharacterClass from './CharacterClass.js';

const CharacterClassList = (props) => {

  if (props.CharacterClass.length === 0){
    return ("Loading...")
  }

  const allCharacterClass = props.characterclass.map((characterClass, index) => {
    return (
      <li key={index} className="component-item">
        <div className="component">
         <CharacterClass characterClass={characterClass} />
        </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
      {allCharacterClass}
    </ul>

  )
}
  export default CharacterClassList;
