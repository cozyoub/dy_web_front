import "./BusinessArea.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainTitle from "./MainTitle";

gsap.registerPlugin(ScrollTrigger);

export default function BusinessArea() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".txt .itm", {
        opacity: 0,
      });

      gsap.set(".txt .itm:first-child", {
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(
        ".txt .itm:nth-child(1) h3",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        0,
      );

      tl.to(
        ".txt .itm:nth-child(1) p",
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        0.2,
      );

      tl.to(
        ".txt .itm:nth-child(1)",
        {
          opacity: 0,
          duration: 0.5,
        },
        1,
      );

      tl.to(
        ".img .itm:nth-child(2)",
        {
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
          duration: 1,
        },
        1,
      );

      tl.to(
        ".txt .itm:nth-child(2)",
        {
          opacity: 1,
        },
        1,
      );

      tl.fromTo(
        ".txt .itm:nth-child(2) h3",
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        1,
      );

      tl.fromTo(
        ".txt .itm:nth-child(2) p",
        {
          x: 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        1.2,
      );

      tl.to(
        ".txt .itm:nth-child(2)",
        {
          opacity: 0,
        },
        2,
      );

      tl.to(
        ".img .itm:nth-child(3)",
        {
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
          duration: 1,
        },
        2,
      );

      tl.to(
        ".txt .itm:nth-child(3)",
        {
          opacity: 1,
        },
        2,
      );

      tl.fromTo(
        ".txt .itm:nth-child(3) h3",
        {
          x: 60,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        2,
      );

      tl.fromTo(
        ".txt .itm:nth-child(3) p",
        {
          x: 120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        2.2,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="business-area" ref={sectionRef}>
        <MainTitle
          title="사업영역"
          desc="전문화된 사업제안 및 기술력으로, 최적화된 솔루션을 공급합니다."
        />
        <div className="img">
          <div className="itm">
            <img src="/images/main/business_bg01.jpg" alt="" />
          </div>
          <div className="itm">
            <img src="/images/main/business_bg02.jpg" alt="" />
          </div>
          <div className="itm">
            <img src="/images/main/business_bg03.jpg" alt="" />
          </div>
        </div>

        <div className="txt">
          <div className="inner">
            <div className="itm">
              <h3>
                전문적인 기술력을 바탕으로 <br /> IT / 제안 컨설팅
              </h3>
              <p>
                전문적인 SI/SM 기술력과 풍부한 구축 경험을 바탕으로 맞춤형 IT
                컨설팅을 제공합니다.
                <br />
                통합정보시스템의 분석, 설계, 품질평가 전 과정을 지원하며,
                고객과의 긴밀한 협업으로 성공적인 프로젝트를 완성합니다.
              </p>
            </div>
            <div className="itm">
              <h3>
                모든 분야에 최적화된 <br />
                솔루션 공급
              </h3>
              <p>
                공공기관, 금융기관, 제조업 등 모든 분야에
                <br />
                통합 IT솔루션 서비스를 공급하며 최적화된 시스템 구축을 지원
                드립니다.
              </p>
            </div>
            <div className="itm">
              <h3>
                최적의
                <br />
                UI /UX IT 아웃소싱
              </h3>
              <p>
                최고의 개발 플랫폼으로 구성 되었으며,
                <br />
                사용자 개발자 모드의 측면을 고려한 시스템을 제공해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
