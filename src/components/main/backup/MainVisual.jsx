import "./MainVisual.css";
import { useState, useEffect, useRef, useCallback } from "react";

const SLIDES = [
  {
    image: "/images/main/mainVisu01.jpg",
    titleLines: [
      { text: "전문성, 혁신적인 솔루션", bold: true },
      { text: "미래를 선도합니다", bold: false },
    ],
    desc: "산업별 맞춤 구축 경험과 검증된 기술력",
  },
  {
    image: "/images/main/mainVisu02.jpg",
    titleLines: [
      { text: "더 나은 비즈니스를 위한", bold: true },
      { text: "디지털 혁신", bold: false },
    ],
    desc: "AX·DX 혁신으로 비즈니스의 미래를 만듭니다",
  },
];

const SplitText = ({ text, start = 0 }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className="mv-char"
        style={{ animationDelay: `${(start + i) * 0.05}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
);

const SLIDE_DURATION = 5000;
const INTRO_DELAY = 200;

export default function MainVisual() {
  const [current, setCurrent] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    const next = (idx + SLIDES.length) % SLIDES.length;
    setCurrent(next);
    setRunKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setReady(true);
        });
      });
    }, INTRO_DELAY);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    timerRef.current = setTimeout(() => {
      goTo(current + 1);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current, runKey, isPaused, goTo]);

  return (
    <div className={"mv-viewport" + (ready ? " mv-ready" : "")}>
      <div className="inner">
        <div className="mv-media">
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={"mv-slide" + (idx === current ? " is-active" : "")}
            >
              <div
                className="mv-slide-img"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="mv-overlay" />
            </div>
          ))}
        </div>

        <div className="mv-text">
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={"mv-text-item" + (idx === current ? " is-active" : "")}
            >
              <p className="mv-desc">{slide.desc}</p>
              <div className="mv-title">
                {slide.titleLines.map((line, idx) => {
                  const start = slide.titleLines
                    .slice(0, idx)
                    .reduce((sum, line) => sum + line.text.length, 0);

                  return (
                    <div className="mv-title-line" key={idx}>
                      {line.bold ? (
                        <b>
                          <SplitText text={line.text} start={start} />
                        </b>
                      ) : (
                        <SplitText text={line.text} start={start} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mv-pager"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {SLIDES.map((_, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center" }}>
              <button
                type="button"
                aria-label={`${idx + 1}번 슬라이드로 이동`}
                className={"mv-dot" + (idx === current ? " is-current" : "")}
                onClick={() => goTo(idx)}
              />
              {idx < SLIDES.length - 1 && (
                <div
                  key={`bar-${idx}-${runKey}`}
                  className={
                    "mv-bar" +
                    (idx < current ? " is-done" : "") +
                    (idx === current ? " is-active" : "") +
                    (idx === current && isPaused ? " is-paused" : "")
                  }
                >
                  <div className="mv-bar-fill" />
                </div>
              )}
            </div>
          ))}
          <div className="mv-arrows">
          <button
            type="button"
            className="mv-arrow"
            aria-label="이전 슬라이드"
            onClick={() => goTo(current - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="mv-arrow"
            aria-label="다음 슬라이드"
            onClick={() => goTo(current + 1)}
          >
            ›
          </button>
        </div>
        </div>

        
      </div>
    </div>
  );
}
