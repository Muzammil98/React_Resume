import React from "react";

// Components
import Profile from "./resume-content/Profile";
import Skills from "./resume-content/Skills/Skills";
import Certificates from "./resume-content/Certificate/Certificates";
import Hobbies from "./resume-content/Hobbies/Hobbies";
import Languages from "./resume-content/Languages/Languages";
import Experience from "./resume-content/Experience/Experience";
import Education from "./resume-content/Education/Education";
import Social from "./resume-content/Social";

// Utils
import Card from "./resume-content/utils/Card";
import CardGrid from "./resume-content/utils/CardGrid";
import Header from "./Header";

function Resume() {
  return (
    <div className="container">
      <Card component={Profile} />
      <CardGrid col1={Skills} col2={Certificates} />
      <Card component={Social} />
      <CardGrid col1={Experience} col2={Education} />
      <CardGrid col1={Hobbies} col2={Languages} />
    </div>
  );
}

export default Resume;
