import React from "react";
import Heading from "../utils/Heading";
import Items from "./Items";

function Experience() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-light">
        <Heading name="Experience" />
        <div className="d-flex justify-content-between">
          <Items
            company={[
              {
                name: "Company/Title",
                desc:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in",
                duration: "2018 - 2019"
              },
              {
                name: "Company/Title",
                desc:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in",
                duration: "2016 - 2018"
              },
              {
                name: "Company/Title",
                desc:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in",
                duration: "2015 - 2016"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
