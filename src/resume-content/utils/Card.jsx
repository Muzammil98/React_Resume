import React from "react";

function Card(props) {
  return (
    <div className="p-4 rounded my-3 bg-white">
      <props.component />
    </div>
  );
}

export default Card;
