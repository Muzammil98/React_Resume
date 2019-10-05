import React from "react";
import Heading from "../utils/Heading";
import Items from "./Items";

import flagP from "./pakistan.svg";
import flagU from "./united-states.svg";
import flagS from "./spain.svg";

function Languages() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-light">
        <Heading name="Languages"></Heading>
        <div className="d-flex p-2 text-muted justify-content-between">
          <Items
            lang={[
              { src: flagP, title: "Urdu" },
              { src: flagU, title: "English" },
              { src: flagS, title: "Spainish" }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Languages;
