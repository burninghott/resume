import React from "react";
import classes from "./Footer.module.css";
import fb from "../../../public/fb.png";
import twitter from "../../../public/twitter.png";
import insta from "../../../public/insta.png";
import linkedin from "../../../public/Linkedin.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className={classes.container}>
      <div className={classes.footer_section}>
        <div className={classes.social_medias}>
          <div>
            <Link className={classes.social_media} href={"/"}>
              <Image src={fb} width={30} height={30} alt={"facebook"} />
            </Link>
          </div>
          <div>
            <Link className={classes.social_media} href={"/"}>
              <Image src={insta} width={30} height={30} alt={"facebook"} />
            </Link>
          </div>
          <div>
            <Link className={classes.social_media} href={"/"}>
              <Image src={twitter} width={30} height={30} alt={"facebook"} />
            </Link>
          </div>
          <div>
            <Link className={classes.social_media} href={"/"}>
              <Image src={linkedin} width={30} height={30} alt={"facebook"} />
            </Link>
          </div>
        </div>
        <div>
          <p className={classes.footer_text}>
            Copyright ©2020 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
