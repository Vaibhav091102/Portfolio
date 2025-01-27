import styles from "./Navbar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.title}` : styles.title
        }
        to="/"
      >
        Portfolio
      </NavLink>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? "/assets/nav/closeIcon.png" : "/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
