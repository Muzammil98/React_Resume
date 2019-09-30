import React from "react";

function Items({hobbies}) {
  return (
    <React.Fragment>
       { 
       hobbies.map(hobby =>(
        <div className="d-flex align-items-center">
             <h2>{hobby.img}</h2>
             <span className="d-none d-md-inline ml-2">{hobby.name}</span>
        </div>
        ))}
    </React.Fragment>

  );
}

export default Items;
