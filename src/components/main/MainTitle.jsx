import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainTitle({ title, desc }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
          // markers: true, // 디버깅할 때만 켜세요
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        );
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-title" ref={wrapRef}>
      <div className="inner">
        <h3 ref={titleRef}>{title}</h3>
        {desc && <p ref={descRef}>{desc}</p>}
      </div>
    </div>
  );
}