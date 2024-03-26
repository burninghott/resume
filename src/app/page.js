import Image from "next/image";
import styles from "./page.module.css";
import Header from "./(Header)/Header";
import Hero from "./(Hero)/Hero";
import Posts from "./(Posts)/Posts";
import Feature from "./(Feature)/Feature";
import Footer from "./(Footer)/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Posts />
      <Feature />
    </div>
  );
}
