import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import './Demo02.css'

gsap.registerPlugin(ScrollTrigger);

export default function Demo02() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
      },
    });
    t2.fromTo(
      ".line-1",
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".line-2",
      { clipPath: "inset(0 100% 0 )" },
      { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power2.out" },
      "+=0.2" 
    )

    .fromTo(
      ".main-demo02 .img",
      { width: 0 },
      { width: 90, duration: 0.8, ease: "power2.out", stagger: 0.1 },
      "+=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="main-demo02" ref={sectionRef}>
      <div className="text-line line-1">
        <span>어쩌고</span>
        <span className="img">
          <img src="/images/main/demo02-img01.jpg" alt="" />
        </span>
        <span>저쩌고</span>
      </div>
      <div className="text-line line-2">
        <span>FACTORY</span>
        <span>SOLUTION</span>
        <span className="img">
          <img src="/images/main/demo02-img02.jpg" alt="" />
        </span>
        <span>TECH</span>
      </div>
    </section>
  );
}