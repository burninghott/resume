import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";
import img from "../../../public/img.png";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.intro}>
        <div className={classes.info}>
          <div>
            <h1 className={classes.title}>
              Hi, I am John, <br></br> Creative Technologist
            </h1>
            <p className={classes.desc}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className={classes.button}>Download Resume</div>
          </div>
        </div>
        <div className={classes.intro_img}>
          <Image
            src={img}
            height={243}
            width={243}
            alt={"img"}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
