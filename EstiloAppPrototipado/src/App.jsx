import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="work-area">
        <div className="canvas"></div>
      </div>
      <div className="toolbox-area">
        <div className="container-row">
          <div
            id="toolbox-display"
            className="row toolbox toolbox-light-magenta"
          >
            <button className="btn-icon">C-</button>
            <button className="btn-icon">-D</button>
            <label htmlFor="precision" className="row">
              Pre:
              <input id="precision" type="number" min="0" />
            </label>
          </div>
        </div>
        <div className="container-row">
          <div id="toolbox-design" className="toolbox-left">
            <div className="left-arrow"></div>
            <div className="right-arrow">
              <img src="./assets/right-arrow.png" />
            </div>
            <div className="col toolbox toolbox-light-magenta">
              <button className="btn-icon">R</button>
              <button className="btn-icon">E</button>
              <button className="btn-icon">T</button>
              <button className="btn-icon">P</button>
            </div>
          </div>
          <div
            id="toolbox-properties"
            className="col toolbox toolbox-light-gray"
          >
            Properties
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
