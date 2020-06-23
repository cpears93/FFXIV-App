import React from 'react';

const Server = (props) => {

  return (
    <div className="component">
        <p className="name">
          {props.server.name}
        </p>
        <p> World: {props.server.world}
        </p>
        <p>Data Center: {props.server.dataCenter}
        </p>
        <p>Population: {props.server.population}
        </p>
    </div>
  )
}

export default Server;
