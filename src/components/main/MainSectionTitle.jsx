import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function MainSectionTitle({
  eyebrow,
  title,
  className = "",
  reverse = false,
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

      const animateEyebrow = () => {
        if (!eyebrowRef.current) return;
        tl.fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        );
      };

      const animateTitle = (position) => {
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          position,
        );
      };

      if (reverse) {
        // title 먼저, eyebrow가 겹치며 뒤따라옴
        animateTitle();
        animateEyebrow("-=0.25");
      } else {
        // eyebrow 먼저, title이 겹치며 뒤따라옴
        animateEyebrow();
        animateTitle("-=0.25");
      }
    }, wrapRef);

    return () => ctx.revert();
  }, [reverse]);

  const heading = (
    <h2 className="main-section-title__heading" ref={titleRef}>
      {title}
    </h2>
  );

  const eyebrowEl = eyebrow && (
    <p className="main-section-title__eyebrow" ref={eyebrowRef}>
      {eyebrow}
    </p>
  );

  return (
    <hgroup className={`main-section-title ${className}`} ref={wrapRef}>
      {reverse ? (
        <>
          {heading}
          {eyebrowEl}
        </>
      ) : (
        <>
          {eyebrowEl}
          {heading}
        </>
      )}
    </hgroup>
  );
}