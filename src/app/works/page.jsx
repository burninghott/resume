"use client";
import React, { useEffect } from "react";
import classes from "./Works.module.css";
import FeatureComp from "../(components)/FeatureComp/FeatureComp";
import imgone from "../../../public/img-1.png";
import imgtwo from "../../../public/img-2.png";
import imgthree from "../../../public/img-3.png";
import imgfour from "../../../public/img-4.png";
import Link from "next/link";
const Works = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Works</h1>
      <Link href={"/works/designing-dashboards"}>
        <FeatureComp
          title="Designing Dashboards"
          img={imgone}
          category="Dashboard"
          date="2020"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          alt="img"
        />
      </Link>

      <Link href={"/works/designing-dashboards"}>
        <FeatureComp
          title="Vibrant Portraits of 2020"
          img={imgtwo}
          category="Illustration"
          date="2018"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          alt="img"
        />
      </Link>

      <Link href={"/works/designing-dashboards"}>
        <FeatureComp
          title="36 Days of Malayalam type"
          img={imgthree}
          category="Typography"
          date="2018"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          alt="img"
        />
      </Link>

      <Link href={"/works/designing-dashboards"}>
        <FeatureComp
          title="Components"
          img={imgfour}
          category="Components, Design"
          date="2018"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          alt="img"
        />
      </Link>
    </div>
  );
};

export default Works;
