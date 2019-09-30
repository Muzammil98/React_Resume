import React from "react";
import Heading from "../utils/Heading";
import Items from './Items'

function Hobbies() {
  return (
    <div className="col-md-6">
      <div className="p-5 mt-2 rounded bg-white">
        <Heading name="Hobbies" />
        <div className="d-flex p-2 text-muted justify-content-between">
        <Items hobbies={[
          {
             img:'🚴',
            name:'Cycling'
          },
          {
            img:'🏊',
            name:'Swimmer'
          },
          {
            img:"🧗‍",
            name:'Climbing'
          }
        ]} />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
