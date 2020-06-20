import React, {Fragment} from 'react';

const CharacterClass = ({characterClass}) => {

  if (!characterClass){
    return "Loading..."
  }
  return (
    <Fragment>
    <p>
    {characterClass.Name}
    </p>
    </Fragment>
  )
}

export default CharacterClass;
