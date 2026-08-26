import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./MouseFollowBlur.css"; 

export default function MouseFollowBlur() {
  const blurRef = useRef(null);

  useEffect(() => {
    const el = blurRef.current;
    if (!el) return;

    if (window.matchMedia("(max-width: 800px)").matches) return;

    const xTo = gsap.quickTo(el, "x", {
      duration: 2,
      ease: "expo.out",
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: 2,
      ease: "expo.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="mouse-blur" ref={blurRef} />;
}