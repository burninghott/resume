"use client";
import FeatureComp from "@/app/(components)/FeatureComp/FeatureComp";
import React, { useEffect, useState } from "react";
import classes from "./WorkDetail.module.css";
import worksone from "../../../../public/works-1.png";
import workstwo from "../../../../public/works-2.png";
import worksthree from "../../../../public/works-3.png";
import Image from "next/image";

const WorkDetail = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Designing Dashboards with usability in mind
      </h1>
      <div className={classes.details}>
        <p className={classes.date}>2020</p>
        <p className={classes.category}>Dashboard, User Experience Design</p>
      </div>
      <p className={classes.desc}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div className={classes.img_container}>
        <Image
          src={worksone}
          width={681}
          height={460}
          alt="img"
          priority={true}
        />
      </div>

      <h2 className={classes.second_title}>Heading 1</h2>
      <h3 className={classes.subtitle}>Heading 2</h3>
      <p className={classes.desc}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div className={classes.img_container}>
        <Image
          src={workstwo}
          width={681}
          height={460}
          alt="img"
          priority={true}
        />
        <Image
          src={worksthree}
          width={681}
          height={460}
          alt="img"
          priority={true}
        />
      </div>
    </div>
  );
};

export default WorkDetail;
