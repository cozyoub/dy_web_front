// components/sub/SolutionTabDetail.jsx
"use client";

import { useState } from "react";

export default function SolutionTabDetail({ title, desc, categories }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [caseIdx, setCaseIdx] = useState(0);

  const activeCategory = categories[activeIdx];
  const activeCase = activeCategory.cases[caseIdx];

  const handleTabClick = (idx) => {
    setActiveIdx(idx);
    setCaseIdx(0);
  };

  return (
    <div className="solution-tab-detail">
      <ul className="solution-tab-list">
        {categories.map((cat, i) => (
          <li key={i} className="solution-tab-item">
            <button
              className={
                i === activeIdx
                  ? "solution-tab-button active"
                  : "solution-tab-button"
              }
              onClick={() => handleTabClick(i)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>

      {activeCategory.cases.length > 1 && (
        <ul className="solution-case-list">
          {activeCategory.cases.map((c, i) => (
            <li key={i} className="solution-case-item">
              <button
                className={
                  i === caseIdx
                    ? "solution-case-button active"
                    : "solution-case-button"
                }
                onClick={() => setCaseIdx(i)}
              >
                {c.title}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="solution-detail-view">
        <div className="solution-detail-img">
          <img src={activeCase.imgSrc} alt={activeCase.title} />
        </div>
        <div className="solution-detail-content">
          <span className="solution-detail-label">{activeCategory.label}</span>
          <h3 className="solution-detail-title">{activeCase.title}</h3>
          <ul className="solution-detail-bullets">
            {activeCase.bullets.map((text, i) => (
              <li key={i} className="solution-detail-bullet-item">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
