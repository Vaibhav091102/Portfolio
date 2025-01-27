import { NavLink } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <Navbar />;
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I am Vaibhav</h1>
          <p className={styles.description}>
            I am a front-end developer with 6 months of experience using
            JavaScript and React. Reach out if you did like to learn more!
          </p>
          <NavLink to="contact" className={styles.contactBtn}>
            Contact Me
          </NavLink>
        </div>
        <img
          src="/assets/hero/Vaibhav01.png"
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </>
  );
};
