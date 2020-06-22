import React from 'react';

const Server = (props) => {

  return (
    <div className="component">
        <p className="name">
          {props.server.name}
        </p>
        <p className="world">
          {props.server.world}
        </p>
        <p className="data_center">
          {props.server.dataCenter}
        </p>
        <p className="population">
          {props.server.population}
        </p>
    </div>
  )
}

export default Server;
