import React, { useEffect } from 'react';
import FDDA_Logo from '../images/FDA_Logo.png'; // Adjust path if needed
import  '../Stylesheets/MedicalClassification.css'

export default function MedicalClassification() {
    useEffect(() => {
        document.title = "Medical Classification Model";
    }, []);
  return (
    <main className="page-container fade-in medical-classification-page">
      <div className="medical-header">
        <img src={FDDA_Logo} alt="FDA Logo" className="fda-logo" />
        <h1>Medical Classification Model</h1>
      </div>
      <section className="medical-content">
        <p>
          This project was internally developed as part of my second internship at the United States Food and Drug Administration (FDA).<br /><br />
          <strong>Timeline:</strong> January 2025 – May 2025<br /><br />
          I worked on building the foundations necessary for FDA’s Medical Classification Model, which utilized embedded VBA automation tools within Excel to streamline data input, validation, and classification processes.<br /><br />
          <span style={{ color: "#007acc", fontWeight: 500 }}>
            The result: Significantly reduced manual workload and improved efficiency for the ECON Staff within the organization.
          </span>
        </p>
        <ul>
          <li>Conducted regular SCRUM meetings and collaborated with team members to promote problem-solving and accelerate project milestones.</li>
          <li>Partnered with the FDA’s Economics team to gather domain-specific requirements and deliver a fully functional prototype aligned with analytical and regulatory objectives.</li>
          <li>Designed user-friendly interfaces and modular code structures to enhance usability and facilitate future updates across teams.</li>
        </ul>
      </section>
    </main>
  );
}