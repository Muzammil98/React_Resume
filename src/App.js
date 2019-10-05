import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Resume from "./Resume";

function App() {
  return (
    <React.Fragment>
      <div className="container bg-dark py-3">
        <Header />
        <Resume />
      </div>
      <p className="text-center text-muted footer">
        Made with React and ❤ <br /> &copy;Muzammil 2019
      </p>
    </React.Fragment>
  );
}

export default App;
