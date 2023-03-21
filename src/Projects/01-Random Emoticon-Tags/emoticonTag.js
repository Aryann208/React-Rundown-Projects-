import { Fragment, useState } from "react";
import classes from "./emoticonTag.module.css";
function EmoticonTag() {
  const [name, setName] = useState("- - - -");
  const [age, setAge] = useState(
    new Date(Date.now()).toLocaleString().split(",")[0]
  );
  const [location, setLocation] = useState("- - - -");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setAge("");
    setName("");
    setLocation("");
  };
  return (
    <Fragment>
      <div className={classes.banner}>
        <div className={classes.input_banner}>
          <form className={classes.input}>
            <label htmlFor="name" className="labels">
              Name
            </label>

            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="DOB" className="labels">
              Date of Birth
            </label>
            <input
              type="date"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
            <label htmlFor="location" className="labels">
              Location
            </label>
            <input
              type="text"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <button className={classes.submit} onSubmit={onSubmitHandler}>
              Reset
            </button>
          </form>
        </div>

        <div className={classes.display_banner}>
          <div className={classes.h1_box}>
            <h1>Name Tag</h1>
          </div>
          <div className={classes.main_display}>
            Name:<h3>{name}</h3>
            <br />
            Date of Birth:<h3>{age}</h3>
            <br />
            Location:<h3>{location}</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EmoticonTag;
