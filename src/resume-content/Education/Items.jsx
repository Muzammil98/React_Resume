import React from "react";

function Items({ education }) {
  return (
    <React.Fragment>
      <div>
        {education.map(edu => (
          <div>
            <h6>
              <span role="img">🎓</span> {edu.name}
              <span className="font-small duration text-muted lead float-right">
                {edu.duration}
              </span>
            </h6>
            <span className="font-small text-muted pb-2">{edu.desc}</span>
            <hr />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Items;
