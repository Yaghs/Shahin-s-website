// Resume.tsx
import React, { useEffect } from 'react';
import '../Stylesheets/Resume.css';

export default function Resume() {
  useEffect(() => {
    document.title = "Resume";
  }
  , []);
  return (
    <main className="resume-container fade-in">
      <h1 className="resume-title">My professional resume and portfolio</h1>

      <div className="resume-preview">
        <iframe
          src="/Shahin_Yaghinloo_Resume_V6.pdf#toolbar=0"
          width="100%"
          height="800px"
          title="Resume Preview"
        />
      </div>

      <a
        href="/Shahin_Yaghinloo_Resume_V6.pdf"
        download
        className="download-button"
      >
        Download PDF
      </a>
    </main>
  );
}

