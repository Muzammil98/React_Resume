import React from "react";

function Card(props) {
  return (
    <div
      style={{ boxShadow: "0 1rem 3rem rgba(0,0,0,0.1)" }}
      className="p-4 rounded my-3 bg-light"
    >
      <props.component />
    </div>
  );
}

export default Card;
