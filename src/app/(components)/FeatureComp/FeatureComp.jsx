import React from "react";
import Image from "next/image";
import classes from "./FeatureComp.module.css";

const FeatureComp = (feature) => {
  return (
    <>
      <div className={classes.featured}>
        <div className={classes.featured_img}>
          <Image
            src={feature.img}
            width={246}
            height={180}
            alt={feature.alt}
            priority={true}
          />
        </div>
        <div className={classes.featured_info}>
          <h3 className={classes.title}>{feature.title}</h3>
          <div className={classes.details}>
            <p className={classes.date}>{feature.date}</p>
            <p className={classes.category}>{feature.category}</p>
          </div>
          <p className={classes.desc}>{feature.desc}</p>
        </div>
      </div>
      <div className={classes.section_border}></div>
    </>
  );
};

export default FeatureComp;
