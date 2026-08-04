import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainSectionTitle({
  eyebrow,
  title,
  className = "",
}) {
  const wrapRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
        );
      }

      tl.fromTo(
        titleRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.25",
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <hgroup
      className={`main-section-title ${className}`}
      ref={wrapRef}
    >
      {eyebrow && (
        <p
          className="main-section-title__eyebrow"
          ref={eyebrowRef}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="main-section-title__heading"
        ref={titleRef}
      >
        {title}
      </h2>
    </hgroup>
  );
}