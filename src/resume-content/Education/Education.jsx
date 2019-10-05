import React from "react";

import Heading from "../utils/Heading";
import Items from "./Items";

function Education() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-light">
        <Heading name="Education" />
        <div className="d-flex justify-content-between">
          <Items
            education={[
              {
                name: "Education/Title",
                desc:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in",
                duration: "2018 - Present"
              },
              {
                name: "Education/Title",
                desc:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in",
                duration: "2017 - 2018"
              },
              {
                name: "Education/Title",
                desc:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in",
                duration: "2016 - 2017"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
