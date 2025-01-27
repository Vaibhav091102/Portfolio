import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
