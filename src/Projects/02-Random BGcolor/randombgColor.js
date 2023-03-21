import { Fragment, useState } from "react";
import classes from "./randombgColor.module.css";
function RandombgColor() {
  const [colour, setColour] = useState();
  const [fontColor, setFontColor] = useState();
  const changeColourHandler = () => {
    const arr = "0123456789ABCDEF";
    let bgColour = "#";
    let fontColour = "#";
    for (let i = 0; i < 6; i++) {
      bgColour += arr[Math.floor(Math.random() * 16)];

      fontColour += arr[Math.floor(Math.random() * 16)];
    }
    setFontColor(fontColour);
    setColour(bgColour);
    let body = document.querySelector("body");
    // body.style.width = "40%";
    // body.style.margin = "0 auto";
    // body.style.height = "100%";
    // body.style.marginTop = "10%";
    body.style.border = `3px solid ${fontColor}`;
    // body.style.padding = "35px";
    body.style.backgroundColor = colour;
    body.style.color = fontColor;
  };

  return (
    <Fragment className="bodyType">
      <div className="container">
        <h1>Random BG Colour</h1>
        <button
          className={classes.btn}
          onClick={changeColourHandler}
          style={{
            border: 0,
            fontSize: "16px",
            width: "200px",
            height: "50px",
            borderRadius: "5px",
          }}
        >
          Change Colour
        </button>
      </div>
    </Fragment>
  );
}

export default RandombgColor;
