import React, { useEffect } from 'react';
import FDDA_Logo from '../images/FDA_Logo.png';
import '../Stylesheets/MedicalClassification.css';

export default function LabelingCostModel() {
    useEffect(() => {
        document.title = "Labeling Cost Model";
    }, []);
  return (
    
    <main className="page-container fade-in medical-classification-page">
      <div className="medical-header">
        <img src={FDDA_Logo} alt="FDA Logo" className="fda-logo" />
        <h1>Labeling Cost Model</h1>
      </div>
      <section className="medical-content">
        <p>
          This project was developed as part of my first internship at the United States Food and Drug Administration (FDA).<br /><br />
          <strong>Timeline:</strong> June 2024 – August 2024<br /><br />
          I assisted in the modernization of the FDA’s Labeling Cost Model by converting legacy VBA code into a modern R-Shiny application, providing data visualization, improving maintainability, and enabling cross-platform accessibility.<br /><br />
          <span style={{ color: "#007acc", fontWeight: 500 }}>
            The result:Helped improve accuracy and efficiency in cost modeling for regulatory submissions.
          </span>
        </p>
        <ul>
          <li>Re-engineered a legacy VBA model into an interactive R-Shiny web app, improving usability and maintainability.</li>
          <li>Utilized GitLab for version control and collaborative development across multiple branches.</li>
          <li>Designed reactive UI components to dynamically visualize and manipulate regulatory cost data linked across Excel datasets.</li>
          <li>Collaborated closely with the Economics team to gather domain requirements and deliver a fully functional prototype tailored to analytical and regulatory needs.</li>
          <li>Demonstrated leadership by clearly explaining technical concepts and implementation steps to co-intern, enhancing overall productivity and collaboration.</li>
        </ul>
      </section>
    </main>
  );
}
