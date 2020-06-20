import React from 'react';

const Server = (props) => {

  return (
    <div className="component">
        <p className="name">
          {props.server.name}
        </p>
        <p className="location">
          {props.server.location}
        </p>
        <p className="population">
          {props.server.population}
        </p>
        <p className="status">
          {props.server.status}
        </p>
    </div>
  )
}

export default Server;
