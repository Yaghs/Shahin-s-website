import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './resume';
import About from './About';
import profilePic from '../images/profile.jpg';
import '../Stylesheets/App.css';
import MedicalClassification from './MedicalClassification';
import LabelingCostModel from './LabelingCostModel';

type Project = {
  name: string;
  link: string;
  tech?: string;
};


const projects: Project[] = [
  { name: 'PlotTwist Movie App', link: 'https://plottwistsp.web.app/', tech: '<HTML, CSS, JS, Firebase>' },
  // Link to internal pages for these two projects:
  { name: 'Medical classification model', link: '/medical-classification', tech: '<Excel / VBA>' },
  { name: 'Labeling Cost Model', link: '/labeling-cost-model', tech: '<R-Shiny / VBA>' }, // <-- Add comma here
  // link to the github repo of the website 
  { name: 'Portfolio Website', link: 'https://github.com/Yaghs/Shahin-s-website/tree/main', tech: '<TypeScript / React>' }
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
  
   useEffect(() => {
    document.title = "Home";
  }, []);
  
  return (
    <main className="homepage-container fade-in">
      <div className="hero-flex scroll-fade" ref={el => {fadeRefs.current[0] = el}}>
        {/* Left side: Name & subtitle */}
        <div className="hero-text">
          <h1 className="homepage-title">Shahin Yaghinloo</h1>
          <h2 className="homepage-subtitle">Software Engineer / Stealth Startup Founder</h2>
        </div>
        {/* Right side: Profile Image */}
        <div className="hero-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>

      <p className="homepage-objective scroll-fade" ref={el => {fadeRefs.current[1] = el}}>
  I’m a recent Computer Science graduate with practical experience in data science, automation, and full-stack development, including a high-impact internship with the U.S. Food and Drug Administration (FDA). My work has focused on building scalable, data-driven solutions and streamlining processes through thoughtful software design.

  <br /><br />
  Currently, I’m leading an early-stage venture in the AI, Software engineering and data-driven technology space, operating in stealth mode. In this role, I oversee product strategy, business development, and team formation—applying both technical and strategic thinking to drive innovation.

  <br /><br />
  Whether contributing to a fast-paced team or building systems from the ground up, I bring a strong analytical foundation, attention to detail, and a results-oriented mindset. I'm actively open to opportunities where I can deliver value through software engineering, data solutions, or technical consulting.
</p>



      <section className="projects-section scroll-fade" ref={el => { fadeRefs.current[2] = el as HTMLDivElement | null; }}
>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => {
    // Use <Link> for internal links, <a> for external
    const isInternal = project.link.startsWith('/');
    return isInternal ? (
      <Link
        key={project.name}
        to={project.link}
        className="project-box"
      >
        <div className="project-name">{project.name}</div>
        {project.tech && <div className="project-tech">{project.tech}</div>}
      </Link>
    ) : (
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
    );
  })}
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
        <Route path="/resume" element={<Resume />} />
        <Route path="/medical-classification" element={<MedicalClassification />} />
        <Route path="/labeling-cost-model" element={<LabelingCostModel />} />
      </Routes>
    </Router>
  );
}

export default App;

