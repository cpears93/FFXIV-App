import React from 'react';
import Server from './Server.js';

const ServerList = (props) => {
  const servers = props.servers.map((server) => {
    return (<li key={server.id} className="component-item">
      <Server server ={server} />
    </li>
  )
  })

  return (
    <ul className="component-list">
      {servers}
    </ul>

  )
}
  export default ServerList;
