import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import './Demo03.css'

gsap.registerPlugin(ScrollTrigger);

export default function Demo03() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = wrapRef.current;

    const totalWidth = wrap.scrollWidth - section.offsetWidth;

    gsap.to(wrap, {
      x: -totalWidth, 
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const panels = [
    { id: 1, bg: "#ff6b6b", label: "PANEL 01" },
    { id: 2, bg: "#ffd93d", label: "PANEL 02" },
    { id: 3, bg: "#6bcb77", label: "PANEL 03" },
    { id: 4, bg: "#4d96ff", label: "PANEL 04" },
    { id: 5, bg: "#c77dff", label: "PANEL 05" },
  ];

  return (
    <section className="demo03" ref={sectionRef}>
      <div className="demo03-wrap" ref={wrapRef}>
        {panels.map((panel) => (
          <div
            className="panel"
            key={panel.id}
            style={{ backgroundColor: panel.bg }}
          >
            <h2>{panel.label}</h2>
            <p>가로 스크롤 이동</p>
          </div>
        ))}
      </div>
    </section>
  );
}