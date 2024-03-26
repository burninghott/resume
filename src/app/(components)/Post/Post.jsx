import React from "react";
import classes from "./Post.module.css";

const Post = (post) => {
  return (
    <div className={classes.box}>
      <h2 className={classes.title}>{post.title}</h2>
      <div className={classes.details}>
        <p>{post.date}</p>
        <p>|</p>
        <p>{post.category}</p>
      </div>
      <p className={classes.desc}>{post.desc}</p>
    </div>
  );
};

export default Post;
