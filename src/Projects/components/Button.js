import React from "react";
import classes from "./Button.module.css";
function Button({ text = "Click", icon = "", onClick }) {
  return (
    <button className={classes.btn} onClick={onClick}>
      {icon} {text}
    </button>
  );
}

export default Button;
