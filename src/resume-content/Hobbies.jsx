import React from "react";
import Heading from "./utils/Heading";

function Hobbies() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-white">
        <Heading name="Hobbies" />
        <div className="d-flex justify-content-between">
          <span>icon</span>Swimmer <span>icon</span>VolleyBall <span>icon</span>
          Runner <span>icon</span>BasketBall
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
