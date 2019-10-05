import React from "react";
import profile from "./01.jpg";
function Header() {
  return (
    <div className="py-4  text-white text-center bg-dark">
      <img
        src={profile}
        className="rounded-circle header-img"
        alt="Profile"
        height="150"
        width="150"
      />
      <h2 className="pt-3">MUZAMMIL S.</h2>
      <p>ui/ux design and development</p>
    </div>
  );
}

export default Header;
