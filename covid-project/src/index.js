import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import MapChart from "./MapChart";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
