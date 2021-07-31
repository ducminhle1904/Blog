import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/duc.jpg"
          alt="Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Duc</h1>
      <p>I'm a Fullstack Developer</p>
    </section>
  );
}
