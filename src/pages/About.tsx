import React from "react";
import GraduationImage from "../images/GraduationImage.jpg";
import GmailImage from "../images/Gmailogo.png"
import githubLogo from "../images/github.png"
import LinkedINLogo from "../images/linkedinlogo.png"

//importing language logos
import HTML from "../images/HTML.png"
import CSS from "../images/CSS.png"
import JS from "../images/JavaScript.png"
import TS from "../images/TypeScript.png"
import react from "../images/React.png"
import Python from "../images/Python.png"
import Java from "../images/JavaLogo.png"
import R from "../images/R.png"
import SQL from "../images/SQL.png"
import VBA from "../images/VBA.png"

// importing Software/Technologies logos
import FirebaseImage from "../images/Firebase.png"
import GithubImage from "../images/github.png"
import TrelloImage from "../images/Trello.png"
import Agileimage from"../images/AGILE.png"
import VsCodeImage from"../images/VS-Code.png"
import JupyterNotebookImage from"../images/JupyterNotebook.png"
import ExcelImage from"../images/Excel.png"
import RstudioImage from"../images/R-studio.png"

import "../Stylesheets/About.css"

function About() {
  return (
    <main className="about-container fade-in">
      <div className="about-content">
        
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Recent Computer Science graduate with internship experience at the FDA, specializing in web development, automation, and data-driven applications. Skilled in building responsive, user-friendly interfaces and full-stack solutions using modern programming languages and frameworks. As a first-generation college graduate and quick learner, I bring a strong work ethic, a collaborative mindset, and a passion for solving real-world problems through technology.
          </p>
          
        <div className="contact-links">
        <a href="https://github.com/Yaghs" className="contact-box" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github"></img>Github</a>
        <a href="https://www.linkedin.com/in/shahin-yaghinloo-00380a1a7/" className="contact-box" target="_blank" rel="noopener noreferrer"><img src={LinkedINLogo} alt="LinkedIn" />LinkedIn</a>
        <a href="mailto:syaghinloo@gmail.com" className="contact-box" target="_blank" rel="noopener noreferrer"> <img src={GmailImage} alt="Email" />Gmail</a>
      </div>
        </div>
        <img src={GraduationImage} alt="Graduation" className="graduation-image" />
      </div>
       <div className= "about-text">
      <h1>Programming languages</h1>
    </div>
  <div className="skills-section">
  <div className="contact-links">
    <div className="skill-box"><img src={HTML} alt="HTML" /><div className="skill-label">HTML</div></div>
    <div className="skill-box"><img src={CSS} alt="CSS" /><div className="skill-label">CSS</div></div>
    <div className="skill-box"><img src={JS} alt="JS" /><div className="skill-label">JavaScript</div></div>
    <div className="skill-box"><img src={TS} alt="TS" /><div className="skill-label">TypeScript</div></div>
    <div className="skill-box"><img src={react} alt="REACT" /><div className="skill-label">React</div></div>
    <div className="skill-box"><img src={Python} alt="PYTHON" /><div className="skill-label">Python</div></div>
    <div className="skill-box"><img src={Java} alt="JAVA" /><div className="skill-label">Java</div></div>
    <div className="skill-box"><img src={R} alt="R" /><div className="skill-label">R-Shiny</div></div>
    <div className="skill-box"><img src={SQL} alt="SQL" /><div className="skill-label">SQL</div></div>
    <div className="skill-box"><img src={VBA} alt="VBA" /><div className="skill-label">Visual Basic Applications</div></div>
  </div>
</div>
    <div className= "about-text">
      <h1>Software/Technologies</h1>
    </div>
    <div className="skills-section">
  <div className="contact-links">
    <div className="skill-box"><img src={FirebaseImage} alt="Firebase" /><div className="skill-label">Firebase</div></div>
    <div className="skill-box"><img src={GithubImage} alt="Git/Github" /><div className="skill-label">Git/GitHub</div></div>
    <div className="skill-box"><img src={TrelloImage} alt="Trello" /><div className="skill-label">Trello</div></div>
    <div className="skill-box"><img src={Agileimage} alt="Agile/Scrum" /><div className="skill-label">Agile/Scrum</div></div>
    <div className="skill-box"><img src={VsCodeImage} alt="Visual Studio Code" /><div className="skill-label">Visual Studio Code</div></div>
    <div className="skill-box"><img src={JupyterNotebookImage} alt="Jupyter Notebook" /><div className="skill-label">Jupyter Notebook</div></div>
    <div className="skill-box"><img src={ExcelImage} alt="Excel" /><div className="skill-label">Microsoft: Excel</div></div>
    <div className="skill-box"><img src={RstudioImage} alt="R-Studio" /><div className="skill-label">R-Studio</div></div>
  </div>
</div>
      
    </main>
  );
}



export default About;