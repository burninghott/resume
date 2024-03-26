import React from "react";
import classes from "./Posts.module.css";
import Post from "../(components)/Post/Post";
import Link from "next/link";

const Posts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.posts_header}>
        <p className={classes.header_title}>Recent posts</p>
        <Link href={"/blog"} className={classes.link}>
          View all
        </Link>
      </div>
      <div className={classes.boxes}>
        <Post
          title="Making a design system from scratch"
          date="12 Feb 2020"
          category="Design, Pattern"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Post
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          category="Figma, Icon Design"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
};

export default Posts;
