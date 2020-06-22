import React, {Fragment} from 'react';

const CharacterClass = ({characterClass}) => {

  if (!characterClass){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>{characterClass.baseClass}</p>
    <p>{characterClass.job}</p>
    <p>{characterClass.role}</p>
    <p>{characterClass.startingLocation}</p>
    <p>{characterClass.prerequisites}</p>
    <p>{characterClass.startingLevel}</p>
    </Fragment>
  )
}

export default Character;
