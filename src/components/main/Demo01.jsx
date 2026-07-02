import "./Demo01.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Demo01() {
  const sectionRef = useRef(null);

  useEffect(() => {
  gsap.set(".main-demo01 .mask-text", { scale: 1 }); 

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300%",
      scrub: 1,
      anticipatePin: 1,
      pinType: "fixed",
      pin: sectionRef.current,
    },
  });

  tl.to(".main-demo01 .mask-text", {
    scale: 300, 
    duration: 10,
    ease: "power3.inOut",
    transformOrigin: "30.1% 90%", 
  });

  tl.to(".main-demo01 .bg-con", {
    opacity: 1,
    duration: 5,
    ease: "power3.inOut",
  }, "<=");
  
  tl.to(".main-demo01 .bg-con img", {
    scale: 1.3,
    duration: 10,
    ease: "power2.inOu t",
    transformOrigin: "50% 100%",
    force3D: false,
  }, "<");
  
  tl.to(".main-demo01 .desc-con h1, .main-demo01 .desc-con p", {
    opacity: 1,
    stagger: 0.3,
    duration: 3,
    ease: "power2.out",
  }, "<=+5");

}, []);

  return (
    <section className="main-demo01" ref={sectionRef}>
      <div className="bg-con">
        <img src="/images/main/demo01.jpg" alt="" />
      </div>
      <div className="experience-middle-container">
        <img
          className="mask-text"
          src="/images/main/demo-mask.svg"
          alt=""
        />
      </div>

      <div className="desc-con">
        <h1>생산 효율과 품질을 높이는</h1>
        <p>차별화된 솔루션으로 산업현장의<br />스마트한 미래를 설계합니다.</p>
      </div>
    </section>
  );
}