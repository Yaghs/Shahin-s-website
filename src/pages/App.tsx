import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { resume } from './resume';
import profilePic from '../images/profile.jpg';
import reactGif from '../images/React.gif';
import TypeScriptImage from '../images/TypeScript.png';
import '../Stylesheets/App.css';

type Project = {
  name: string;
  link: string;
};

const projects: Project[] = [
  { name: 'PlotTwist Movie App', link: 'https://plottwistsp.web.app/'},
  { name: 'Portfolio Website', link: ''},
  { name: 'Labling cost model', link: ''},
  { name: 'Medical classfication model', link: ''},
];

function HomeContent() {
  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    fadeRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="homepage-container fade-in">
      <div className="hero-flex scroll-fade" ref={el => {fadeRefs.current[0] = el}}>
        {/* Left side: Name & subtitle */}
        <div className="hero-text">
          <h1 className="homepage-title">Shahin Yaghinloo</h1>
          <h2 className="homepage-subtitle">Software Engineer</h2>
        </div>
        {/* Right side: Profile Image */}
        <div className="hero-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>

      <p className="homepage-objective scroll-fade" ref={el => {fadeRefs.current[1] = el}}>
        Recent Computer Science graduate with internship experience at the FDA, focused on data science,
        automation, and full-stack development. Brings strong analytical and programming skills with a
        collaborative mindset, eager to contribute to innovative and user-centered technology solutions.
      </p>

      <section className="projects-section scroll-fade" ref={el => { fadeRefs.current[2] = el as HTMLDivElement | null; }}
>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="project-box"
              style={{ pointerEvents: project.link ? "auto" : "none", opacity: project.link ? 1 : 0.6 }}
            >
              {project.name}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="about-container fade-in">
      <h1>About Me</h1>
      <p>
        I am a recent Computer Science graduate with a passion for data science, automation, and full-stack development.
        My experience includes an internship at the FDA, where I contributed to innovative technology solutions.
      </p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

