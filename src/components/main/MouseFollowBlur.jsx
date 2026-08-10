import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./MouseFollowBlur.css"; // 아래 CSS 그대로

export default function MouseFollowBlur() {
  const blurRef = useRef(null);

  useEffect(() => {
    const el = blurRef.current;
    if (!el) return;

    // 모바일(800px 이하)에선 아예 동작 안 시킴 - 불필요한 리스너 방지
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