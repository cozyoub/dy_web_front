import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./MainVideoVisu.css";

export default function MainVideoVisu() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".main-video-visu__vd",
        { clipPath: "inset(49.5% 0% 49.5% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "power4.inOut",
        }
      )
        .fromTo(
          ".main-video-visu__overlay",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "sine.out" },
          "-=1.2"
        )
        .fromTo(
          ".mvv-eyebrow-inner",
          { yPercent: 100 },
          { yPercent: 0, duration: 0.9, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".mvv-title-line-inner",
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.6"
        )
        .fromTo(
          ".mvv-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "sine.out" },
          "-=0.5"
        )
        .fromTo(
          ".mvv-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "sine.out" },
          "-=0.4"
        )
        .fromTo(
          ".mvv-scroll-cue",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6, ease: "sine.out" },
          "-=0.3"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-video-visu" ref={rootRef}>
      <div className="main-video-visu__vd">
        <video
          src="/images/main/mainVisu.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="main-video-visu__overlay" />

      <div className="main-video-visu__txt">
        {/* <div className="mvv-eyebrow">
          <span className="mvv-eyebrow-inner">N·Core Factory AI</span>
        </div> */}

        <h1 className="mvv-title">
          <span className="mvv-title-line mvv-title-line--sm">
            <span className="mvv-title-line-inner">현장 데이터부터 ERP·MES·AI까지 연결해</span>
          </span>
          <span className="mvv-title-line mvv-title-line--lg">
            <span className="mvv-title-line-inner">
              제조 운영의 <b>디지털 전환</b>을 완성합니다
            </span>
          </span>
          {/* <span className="mvv-title-line mvv-title-line--lg">
            <span className="mvv-title-line-inner">.</span>
          </span> */}
        </h1>

        <p className="mvv-desc">
          분산된 설비와 업무 데이터를 실시간 운영, 분석, 의사결정에 
          <br />
           활용할 수 있는 환경으로 전환합니다.
        </p>

        <div className="mvv-cta">
          <a href="/contact" className="mvv-cta__btn primary">
            도입 상담
            <span className="mvv-cta__btn__arrow" aria-hidden="true">→</span>
          </a>
          <a href="#case" className="mvv-cta__btn outline">
            구축 사례
          </a>
        </div>
      </div>

      <div className="mvv-scroll-cue">
        <span className="mvv-scroll-cue__line" />
        <span className="mvv-scroll-cue__text">Scroll</span>
      </div>
    </div>
  );
}