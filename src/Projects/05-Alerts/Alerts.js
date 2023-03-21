import { Fragment } from "react";
//import classes from "./Alerts.module.css";
import Alert from "../components/Alert";
function Alerts() {
  return (
    <Fragment>
      <Alert alertText="Warning" color="red" delay={true} />
      <Alert alertText="Reminder" color="green" />
      <Alert alertText="Error" color="yellow" delay={true} />
      <Alert alertText="Warning" color="white" delay={true} />
    </Fragment>
  );
}

export default Alerts;
