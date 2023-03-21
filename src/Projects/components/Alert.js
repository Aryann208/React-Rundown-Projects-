import { useState, useEffect } from "react";
import classes from "./Alert.module.css";
import cx from "classnames";

function Alert({ alertText = "Alert", color = "red", delay = false }) {
  const [showAlert, setShowAlert] = useState(true);
  const closeAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 500);
  };

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
  });

  return (
    showAlert && (
      <div>
        <div className={cx(classes.container, `classes.${color}`)}>
          <h3>{alertText}</h3>
          <button className={classes.btnClose} onClick={closeAlert}>
            x
          </button>
        </div>
      </div>
    )
  );
}

export default Alert;
