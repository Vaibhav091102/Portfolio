import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxAVHdftAsGo2mddOVBuIFWBzcS5_7B5qFDR7xmMUpNlMwMOW2XvuJN1ejSEK7VgJKF6Q/exec";
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({ Name: "", Email: "", Subject: "", Message: "" });
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting the form. Please try again later.");
      setTimeout(() => setMessage(""), 5000);
      setFormData({ Name: "", Email: "", Subject: "", Message: "" }, 2000);
    }
  };

  return (
    <>
      <Navbar />
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.text1}>
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
          </div>
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="E-mail"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            value={formData.Subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={formData.Message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Submit
          </button>
          {message && <span id="msg">{message}</span>}
        </form>

        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/vaibhav-mani-tripathi-bb201124b/">
              <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/Vaibhav091102">
              <img src="/assets/contact/githubIcon.png" alt="Github icon" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
