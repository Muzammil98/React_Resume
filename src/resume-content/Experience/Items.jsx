import React from "react";
import "./Items.css";

function Items({ company }) {
  return (
    <React.Fragment>
      <div>
        {company.map(comp => (
          <div>
            <h6>
              🏢 {comp.name}
              <span className="text-muted lead float-right">
                {comp.duration}
              </span>
            </h6>
            <span className="text-muted pb-2">{comp.desc}</span>
            <hr />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Items;