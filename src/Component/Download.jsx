import React from "react";
import "./DownloadCV.css"; // Import the CSS file

const DownloadCV = () => {
  return (
    <a href="/cv.pdf" download="Haile_Michael_CV.pdf">
      <button className="download-btn">Download CV</button>
    </a>
  );
};

export default DownloadCV;
