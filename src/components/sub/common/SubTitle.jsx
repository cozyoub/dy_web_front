import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SubTitle({ title, desc }) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
        },
      });

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        );
      }
      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4",
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="sub-title" ref={wrapRef}>
      {desc && <p ref={descRef}>{desc}</p>}
        <h3 ref={titleRef}>{title}</h3>
    </div>
  );
}
