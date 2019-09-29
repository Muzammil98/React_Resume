import React from "react";
import Heading from "./utils/Heading";

function Profile() {
  return (
    <div>
      <Heading name="Profile" />
      <p className="text-muted px-3">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </p>
    </div>
  );
}

export default Profile;
