import { Fragment, useState } from "react";
import RandombgColor from "./Projects/02-Random BGcolor/randombgColor";
import Postlike from "./Projects/03- PostLiker/Postlike";
import Testimonials from "./Projects/04- Testimonials/Testimonials";
import classes from "./Enabler.module.css";

function Enabler() {
  const [randomBg, setRandomBg] = useState(false);
  const [postLiker, setPostLiker] = useState(false);
  const [testimonial, setTestimonial] = useState(false);

  const randomBgChangeHandler = () => {
    setRandomBg(!randomBg);
    setPostLiker(false);
    setTestimonial(false);
  };
  const postLikerChangeHandler = () => {
    setPostLiker(!postLiker);
    setTestimonial(false);
    setRandomBg(false);
  };
  const testimonialsChangeHandler = () => {
    setTestimonial(!testimonial);
    setPostLiker(false);
    setRandomBg(false);
  };
  return (
    <Fragment>
      <form className={classes.Container}>
        <div className={classes.form_content}>
          <div className={classes.form_item}>
            <label htmlFor="button">Post Liker Component</label>
            <input
              className={classes.form_button}
              type="button"
              onClick={postLikerChangeHandler}
            />
          </div>
          <div className={classes.form_item}>
            <label htmlFor="button">Testimonial App</label>
            <input
              className={classes.form_button}
              type="button"
              onClick={testimonialsChangeHandler}
            />
          </div>
          <div className={classes.form_item}>
            <label htmlFor="button">
              Random Background Colour Changer Component
            </label>
            <input
              className={classes.form_button}
              type="button"
              onClick={randomBgChangeHandler}
            />
          </div>
        </div>
      </form>
      <div className={classes.module}>{randomBg && <RandombgColor />}</div>
      <div className={classes.module}>{postLiker && <Postlike />}</div>
      <div className={classes.module}>{testimonial && <Testimonials />}</div>
    </Fragment>
  );
}

export default Enabler;
