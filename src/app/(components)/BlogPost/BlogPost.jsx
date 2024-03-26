import React from "react";
import classes from "./BlogPost.module.css";

const BlogPost = (post) => {
  return (
    <>
    <div className={classes.box}>
      <h2 className={classes.title}>{post.title}</h2>
      <div className={classes.details}>
        <p>{post.date}</p>
        <p>|</p>
        <p className={classes.category}>{post.category}</p>
      </div>
      <p className={classes.desc}>{post.desc}</p>
    </div>
    <div className={classes.section_border}></div>
    </>
  );
};

export default BlogPost;
