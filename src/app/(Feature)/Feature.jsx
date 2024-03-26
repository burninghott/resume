import React from "react";
import Link from "next/link";
import classes from "./Feature.module.css";
import imgone from "../../../public/img-1.png";
import imgtwo from "../../../public/img-2.png";
import imgthree from "../../../public/img-3.png";
import Image from "next/image";
import FeatureComp from "../(components)/FeatureComp/FeatureComp";

const Feature = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.header_title}>Featured Works</h3>

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
          date="2018"
          category="Illustration"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          alt="img"
        />
      </Link>

      <Link href={"/works/designing-dashboards"}>
        <FeatureComp
          title="36 Days of Malayalam type"
          img={imgthree}
          date="2018"
          category="Typography"
          desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          alt="img"
        />
      </Link>
    </div>
  );
};

export default Feature;
