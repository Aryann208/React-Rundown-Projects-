import { useState } from "react";
import classes from "./Postlike.module.css";
import { BsInstagram } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { GrDislikeFill } from "react-icons/gr";
import AvatarPic from "./AvatarMe.png";
function Postlike() {
  const [likeBoolean, setLikeBoolean] = useState(false);
  let like = () => {
    setLikeBoolean(!likeBoolean);
    console.log(likeBoolean);
  };
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.header_text}>
          <BsInstagram className={classes.logo} />
          <h2>Instagram</h2>
        </div>
      </header>
      <section className={classes.section}>
        <img
          src={AvatarPic}
          className={classes.postPic}
          alt=""
          onDoubleClick={like}
        />
      </section>
      <footer className={classes.footer}>
        <button onClick={like} className={classes.like_button}>
          {likeBoolean ? (
            <FcLike className={classes.like} style={{ scale: "2.5" }} />
          ) : (
            <GrDislikeFill className={classes.like} />
          )}
        </button>
      </footer>
    </div>
  );
}

export default Postlike;
