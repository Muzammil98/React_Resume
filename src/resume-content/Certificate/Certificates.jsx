import React from "react";

import Heading from "../utils/Heading";
import Items from "./Items";

function Certificates() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-white">
        <Heading name="Certificates" />
        <div className="d-flex justify-content-start flex-column">
          <Items
            name="Tuts Plus UX Design Course"
            desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs."
          />
          <Items
            name="UI/UX Design Course at Skillshare"
            desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs."
          />
          <Items
            name="Certified Kubernetes Application Developer"
            desc="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs."
          />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
