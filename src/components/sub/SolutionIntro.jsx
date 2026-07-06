import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionIntro({ imageSrc, label, description }) {
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const h2MaskRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(imgWrapRef.current,
        { width: "55vw", height: "55vh", borderRadius: "20px" },
        { width: "100vw", height: "100vh", borderRadius: "0px", ease: "none" }, 0);
      tl.fromTo(imgRef.current, { scale: 1.15 }, { scale: 1, ease: "none" }, 0);
      tl.fromTo(overlayRef.current, { opacity: 0.1 }, { opacity: 0.55, ease: "none" }, 0);
      tl.fromTo(h2MaskRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none" }, "<");
      tl.fromTo(subTitleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: "none" }, 0.65);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="solution-intro">
      <div ref={imgWrapRef} className="solution-intro-img-wrap">
        <img ref={imgRef} src={imageSrc} alt="" />
      </div>
      <div ref={overlayRef} className="solution-intro-overlay" />
      <div className="solution-intro-main-title">
        <h2 className="h2-ghost">
          <img src="/images/sub/ncore-logo-wh.svg" alt="" />
          <span>{label}</span>
        </h2>
        <h2 ref={h2MaskRef} className="h2-reveal">
          <img src="/images/sub/ncore-logo-wh.svg" alt="" />
          <span>{label}</span>
        </h2>
      </div>
      <div ref={subTitleRef} className="solution-intro-sub-title">
        <p>{description}</p>
      </div>
    </div>
  );
}