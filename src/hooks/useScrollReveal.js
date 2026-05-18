import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll("[data-reveal]");

      els.forEach((el) => {
        const type = el.dataset.reveal;
        const delay = parseFloat(el.dataset.delay || "0");

        const fromVars =
          type === "scale" ? { opacity: 0, scale: 0.8 } :
          type === "left"  ? { opacity: 0, x: -40 } :
                             { opacity: 0, y: 60 };

        const toVars =
          type === "scale" ? { opacity: 1, scale: 1 } :
          type === "left"  ? { opacity: 1, x: 0 } :
                             { opacity: 1, y: 0 };

        gsap.fromTo(el, fromVars, {
          ...toVars,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh();
    }, 1500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}