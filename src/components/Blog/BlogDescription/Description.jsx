import React from "react";
import "../../Blog/BlogDescription/style.css";
// const Chip = ({ label }) => <p className="chip">{label}</p>;
const Description = ({ data }) => {
  return (
    <div className="blog-description">
      {data.map((row, index) => (
        <div key={index}>
          {/* <p className="blog-desc" style="{row.style}"> */}
          <p className="blog-desc">{row.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
