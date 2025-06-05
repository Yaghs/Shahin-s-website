import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { resume } from './resume';
import About from './About';
import profilePic from '../images/profile.jpg';
import reactGif from '../images/React.gif';
import TypeScriptImage from '../images/TypeScript.png';
import '../Stylesheets/App.css';

type Project = {
  name: string;
  link: string;
  tech?: string;
};


const projects: Project[] = [
  { name: 'PlotTwist Movie App', link: 'https://plottwistsp.web.app/', tech: '<HTML, CSS, JS, Firebase>' },
  { name: 'Portfolio Website', link: 'https://github.com/Yaghs/Shahin-s-website/tree/main', tech: '<TypeScript / React>' },
  { name: 'Labling cost model', link: '', tech: '<Excel / R-Shiny>' },
  { name: 'Medical classification model', link: 'https://www.fda.gov/about-fda/economic-impact-analyses-fda-regulations/medical-devices-general-and-plastic-surgery-devices-classification-certain-solid-wound-dressings', tech: '<Excel / VBA>' }
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
    href={project.link}
    className="project-box"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="project-name">{project.name}</div>
    {project.tech && <div className="project-tech">{project.tech}</div>}
  </a>
))}

        </div>
      </section>
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

