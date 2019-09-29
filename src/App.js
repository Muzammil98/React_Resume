import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Resume from "./Resume";

function App() {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <Header />
        <Resume />
      </div>
    </React.Fragment>
  );
}

export default App;
