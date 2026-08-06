import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainNcoreInte.css";

gsap.registerPlugin(ScrollTrigger);

export default function NcoreInteAni() {
  const containerRef = useRef(null);
  const revealImgRef = useRef(null);
  const preRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const FEATHER = 15;

      const preTags = gsap.utils.toArray(".ncore-inte-pre .inte-tag");
      const afterTags = gsap.utils.toArray(".ncore-inte-after .inte-tag");

      gsap.set(preTags, { opacity: 0.3, scale: 1, filter: "blur(0px)" });
      gsap.set(afterTags, { opacity: 0, scale: 1, filter: "blur(0px)" });

      const progress = { value: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        },
      });

      // 로고 리빌
      tl.to(
        progress,
        {
          value: 100,
          ease: "none",
          onUpdate: () => {
            if (!revealImgRef.current) return; 
            const v = progress.value;
            const maskValue = `linear-gradient(to right, #000 ${v}%, transparent ${v + FEATHER}%)`;
            revealImgRef.current.style.webkitMaskImage = maskValue;
            revealImgRef.current.style.maskImage = maskValue;
          },
        },
        0,
      );

      // pre 태그: 살짝 시차 두고 사라짐 (blur out + scale down)
      tl.to(
        preTags,
        {
          opacity: 0,
          scale: 0.9,
          filter: "blur(0px)",
          ease: "power1.in",
          stagger: 0.06,
        },
        0,
      );

      // after 태그: 살짝 늦게, 시차 두고 또렷하게 나타남
      tl.to(
        afterTags,
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.06,
        },
        0.1,
      ); // pre보다 살짝 늦게 시작 → 겹치는 구간에 여운이 생김
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="ncore-inte-ani" ref={containerRef}>
        <div className="ncore-inte-center">
          <div className="ncore-inte-center-ghost">
            <img src="/images/sub/ncore-logo-wh.svg" alt="" />
          </div>
          <div className="ncore-inte-center-reveal">
            <img
              ref={revealImgRef}
              src="/images/sub/ncore-logo-wh.svg"
              alt=""
            />
          </div>
        </div>

        <div className="ncore-inte-pre" ref={preRef}>
          <span className="inte-tag inte-tag01 border-gradient">
            문제가 생긴 후 조치
          </span>
          <span className="inte-tag inte-tag02 border-gradient">
            반복적인 문서 처리
          </span>
          <span className="inte-tag inte-tag03 border-gradient">
            수기로 현황 파악
          </span>
          <span className="inte-tag inte-tag04 border-gradient">
            사람이 일일히 검사
          </span>
          <span className="inte-tag inte-tag05 border-gradient">
            흩어져 찾기 어려운 정보
          </span>
          <span className="inte-tag inte-tag06 border-gradient">
            끝없는 반복 업무
          </span>
        </div>
        <div className="ncore-inte-after" ref={afterRef}>
          <span className="inte-tag inte-tag01 border-gradient">미리찾아 사전 관리</span>
          <span className="inte-tag inte-tag02 border-gradient">AI가 자동 정리</span>
          <span className="inte-tag inte-tag03 border-gradient">실시간 자동 관리</span>
          <span className="inte-tag inte-tag04 border-gradient">정밀 AI 품질 검사</span>
          <span className="inte-tag inte-tag05 border-gradient">통합·분석 제공</span>
          <span className="inte-tag inte-tag06 border-gradient">전 과정 자동화</span>
        </div>
      </div>
    </>
  );
}
