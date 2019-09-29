import React from "react";
import "./Items.css";

function Items({ name, desc }) {
  return (
    <div>
      <h6>
        <span>🛡</span> {name}
      </h6>
      <div className="font-small text-muted pb-2 ml-4">{desc}</div>
    </div>
  );
}

export default Items;
