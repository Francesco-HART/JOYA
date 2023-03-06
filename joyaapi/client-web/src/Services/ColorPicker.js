import React, { useState } from "react";

const ColorPicker = () => {
  const [open, setOpen] = useState(false);

  const customizeColor = (color = "color-3") => {
    document.getElementById(
      "color"
    ).innerHTML = `<link href="assets/css/color/${color}.css"  rel="stylesheet" />`;
    localStorage.setItem("color", color);
  };

  customizeColor();
  return (
    <div
      className="color-picker"
      id="theme"
      style={{ right: `${open ? "0px" : "-190px"}` }}
      onClick={() => setOpen(!open)}
    >
      {/* <a href={null} className="handle">
        <i className="fa fa-cog"></i>
      </a>
      <div className="sec-position">
        <div className="settings-header">
          <h3>Select Color:</h3>
        </div>
        <div className="section">
          <div className="colors o-auto">
            <a
              href={"#"}
              className="color-1"
              onClick={() => customizeColor("color-1")}
            ></a>
            <a
              href={"#"}
              className="color-2"
              onClick={() => customizeColor("color-2")}
            ></a>
            <a
              href={"#"}
              className="color-3"
              onClick={() => customizeColor("color-3")}
            ></a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ColorPicker;
