import React, {Fragment} from 'react';

const Character = ({character}) => {

  if (!character){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>Base Class: {character.baseClass}
    </p>
    <p>Job: {character.job}
    </p>
    <p>Role: {character.role}
    </p>
    <p>Starting Location: {character.startingLocation}
    </p>
    <p>Prerequisites: {character.prerequisites}
    </p>
    <p>Starting Level: {character.startingLevel}
    </p>
    </Fragment>
  )
}

export default Character;
