import React from 'react';

const Server = (props) => {

  return (
    <div className="component">
      <p className="name">
        {props.raid.name}
      </p>
      <p className="level">
        {props.raid.level}
      </p>
      <p className="itemLevelReq">
        {props.raid.itemLevelReq}
      </p>
      <p className="turns">
        {props.raid.turns}
      </p>
      <p className="lootitemLevel">
        {props.raid.lootitemLevel}
      </p>
      <p className="tomePerTurn">
        {props.raid.tomePerTurn}
      </p>
      <p className="itemLevelReq">
        {props.raid.itemLevelReq}
      </p>
      <p className="unlock">
        {props.raid.unlock}
      </p>
  )
}

export default Raid;
