import React from 'react';
import Raid from './Raid.js'

const RaidList = (props) => {

  if (props.Raid.length === 0){
    return ("Loading...")
  }

  const allRaid = props.raid.map((raid, index) => {
    return (
      <li key={index} className="component-item">
        <div className="component">
         <Raid raid={raid} />
        </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
      {allRaid}
    </ul>

  )
}
  export default RaidList;
