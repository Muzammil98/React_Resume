import React from "react";
import Heading from "./utils/Heading";

function Languages() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-white">
        <Heading name="Languages"></Heading>
        <div className="d-flex justify-content-between">
          <span>flag</span>English <span>flag</span>Urdu <span>flag</span>
          Chinese
        </div>
      </div>
    </div>
  );
}

export default Languages;
