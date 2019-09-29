import React from "react";
import "./Items.css";

function Items({ names, stars }) {
  return (
    <React.Fragment>
      <div className="font-small">
        <ul className="text-muted">
          {names.map(name => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
      <div className="font-small">
        <ul>
          {stars.map(star => (
            <li>{star}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Items;
