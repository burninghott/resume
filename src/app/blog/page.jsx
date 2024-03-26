import React from "react";
import classes from "./page.module.css";
import BlogPost from "../(components)/BlogPost/BlogPost";
const Blog = () => {
  const styles = {
    maxWidth: "full",
    padding: "0",
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Blog</h1>
      <BlogPost
        title="UI Interactions of the week"
        date="12 Feb 2019"
        category="Express, Handlebars"
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />

      <BlogPost
        title="UI Interactions of the week"
        date="12 Feb 2019"
        category="Express, Handlebars"
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />

      <BlogPost
        title="UI Interactions of the week"
        date="12 Feb 2019"
        category="Express, Handlebars"
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <BlogPost
        title="UI Interactions of the week"
        date="12 Feb 2019"
        category="Express, Handlebars"
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
    </div>
  );
};

export default Blog;
