import React from "react";

function CardGrid(props) {
  return (
    <div className="row my-4">
      <props.col1 />
      <props.col2 />
    </div>
  );
}

export default CardGrid;
