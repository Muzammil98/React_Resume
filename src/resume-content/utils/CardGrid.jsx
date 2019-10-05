import React from "react";

function CardGrid(props) {
  return (
    <div
      style={{ boxShadow: "0 1rem 3rem rgba(0,0,0,0.1)" }}
      className="row my-4"
    >
      <props.col1 />
      <props.col2 />
    </div>
  );
}

export default CardGrid;
