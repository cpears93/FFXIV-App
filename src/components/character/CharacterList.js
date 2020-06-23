import React from 'react';
import Character from './Character.js';

const CharacterList = (props) => {

  // if (props.Character.length === 0){
  //   return (<p>Loading...</p>)
  // }

  const allCharacter = props.character.map((character, index) => {
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
      {allCharacter}
    </ul>

  )
}
  export default CharacterList;
