import { useEffect, useState, Fragment } from "react";
import Button from "../components/Button";
import { CgComment } from "react-icons/cg";
import classes from "./Testimonials.module.css";
function Testimonials() {
  const [fetchItems, setFetchItems] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    fetchItems &&
      fetch(`https://jsonplaceholder.typicode.com/${fetchItems}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
  }, [fetchItems]);
  return (
    <Fragment>
      <div className={classes.container}>
        <h1 className={classes.heading}>Testimonials Website </h1>
        <div className={classes.button_container}>
          <Button
            text={"Posts"}
            onClick={() => {
              setFetchItems("posts");
            }}
          />
          <Button
            text={"Users"}
            onClick={() => {
              setFetchItems("users");
            }}
          />
          <Button
            text={"Comments"}
            icon={<CgComment />}
            onClick={() => {
              setFetchItems("comments");
            }}
          />
        </div>
        {!items
          ? null
          : items.map((item) => {
              return (
                <div key={item.id}>
                  {fetchItems === "users" && (
                    <div>
                      <h3 className={classes.card}>{item.name}</h3>
                    </div>
                  )}

                  {fetchItems === "posts" && (
                    <div className={classes.card}>
                      <br />

                      <h4 className={classes.title}>{item.title}</h4>
                      <div className={classes.posts_card}>{item.body}</div>
                    </div>
                  )}
                  {fetchItems === "comments" && (
                    <div className={classes.card}>
                      <div className={classes.comments_card}>{item.body}</div>
                      <div className={classes.email}>{item.email}</div>
                    </div>
                  )}
                </div>
              );
            })}
      </div>
    </Fragment>
  );
}

export default Testimonials;
