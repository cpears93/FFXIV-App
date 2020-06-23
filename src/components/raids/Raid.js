import React from 'react';

const Raid = (props) => {

  return (
    <div className="component">
      <p className="name">
        {props.raid.name}
      </p>
      <p>Level: {props.raid.level}
      </p>
      <p>Item Level Reqquirement: {props.raid.itemLevelReq}
      </p>
      <p>Turns: {props.raid.turns}
      </p>
      <p>Loot Item Level: {props.raid.lootItemLevel}
      </p>
      <p>Tome Per Turn: {props.raid.tomePerTurn}
      </p>
      <p>Item Level Requirement: {props.raid.itemLevelReq}
      </p>
      <p>Unlock: {props.raid.unlock}
      </p>
    </div>
  )
}

export default Raid;
