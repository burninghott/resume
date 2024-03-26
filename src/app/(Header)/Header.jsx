"use client";
import Link from "next/link";
import React from "react";
import classes from "./Header.module.css";
import { usePathname } from "next/navigation";
import "@/app/globals.css";
import { UserButton, useAuth } from "@clerk/nextjs";

const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Blog", path: "/blog" },
  { id: 3, name: "Works", path: "/works" },
  { id: 4, name: "Contact", path: "#contact" },
];

const Header = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const headerClasses = classes.myBtn + " " + classes.extra_classes;
  return (
    <header className={`${classes.header} ${classes.container}`}>
      <div className={classes.nav}>
        <ul className={classes.nav_menu}>
          {NavLinks.map((link) => {
            return (
              <li className={classes.nav_links} key={link.id}>
                <Link
                  href={link.path}
                  className={isActive(link.path) ? "active" : ""}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={classes.auth}>
          {userId ? (
            <div>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className={classes.btn_links}>
              <Link href={"/sign-up"} className={classes.sign_up}>
                Sign Up
              </Link>

              <Link className={classes.sign_in} href={"/sign-in"}>
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
