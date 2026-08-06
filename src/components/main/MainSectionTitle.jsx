import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

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
        animateTitle();
        animateEyebrow("-=0.25");
      } else {
        animateEyebrow();
        animateTitle("-=0.25");
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 851px)", () => {
        const parallaxTweens = [];

        if (eyebrowRef.current) {
          parallaxTweens.push(
            gsap.to(eyebrowRef.current, {
              yPercent: -18,
              ease: "none",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }),
          );
        }

        if (titleRef.current) {
          parallaxTweens.push(
            gsap.to(titleRef.current, {
              yPercent: -8,
              ease: "none",
              scrollTrigger: {
                trigger: wrapRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }),
          );
        }

        return () => {
          const targets = [eyebrowRef.current, titleRef.current].filter(
            Boolean,
          );
          if (targets.length) {
            gsap.set(targets, { clearProps: "transform" });
          }
        };
      });
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
