import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSolutionTitleAnimation() {
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".solution-title");

      titles.forEach((el) => {
        const heading = el.querySelector("h3");
        const desc = el.querySelector("p");
        const targets = [heading, desc].filter(Boolean);

        if (targets.length === 0) return;

        gsap.set(targets, { y: 30, opacity: 0 });

        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [location.pathname]);
}