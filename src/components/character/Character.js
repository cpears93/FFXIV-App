import React, {Fragment} from 'react';

const Character = ({character}) => {

  if (!character){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>{character.baseClass}</p>
    <p>{character.job}</p>
    <p>{character.role}</p>
    <p>{character.startingLocation}</p>
    <p>{character.prerequisites}</p>
    <p>{character.startingLevel}</p>
    </Fragment>
  )
}

export default Character;
