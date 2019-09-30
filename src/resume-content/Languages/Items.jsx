import React from "react";

function Items({lang}) {
  return (
    <React.Fragment>
       { 
       lang.map(item =>(
        <div className="d-flex align-items-center">
           <img src={item.src} height="32" width="32" title={item.title} alt="flag" />
           <span className="d-none d-md-inline ml-2">{item.title}</span>
        </div>
      
        ))}
    </React.Fragment>

  );
}

export default Items;
