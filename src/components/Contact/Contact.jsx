import { Navbar } from "../Navbar/Navbar";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="Email icon" />
            <a href="mailto:myemail@email.com">
              tripathivaibhavmani1@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/vaibhav-mani-tripathi-bb201124b/">
              linkedin.com/vaibhav-tripathi
            </a>
          </li>
          <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="Github icon" />
            <a href="https://github.com/Vaibhav091102">
              github.com/vaibhav091102
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
