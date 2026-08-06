import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./MainVideoVisu.css";

export default function MainVideoVisu() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. clip-path로 보이는 영역만 얇은 줄 → 전체 화면으로 펼쳐짐
      // 비디오 자체는 전혀 움직이거나 확대되지 않음
      tl.fromTo(
        ".main-video-visu__vd",
        { clipPath: "inset(49.5% 0% 49.5% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.6,
          ease: "power4.inOut",
        }
      )
        // 2. 오버레이 페이드인
        .fromTo(
          ".main-video-visu__overlay",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "sine.out" },
          "-=1.2"
        )
        // 3. eyebrow 마스크 리빌
        .fromTo(
          ".mvv-eyebrow-inner",
          { yPercent: 100 },
          { yPercent: 0, duration: 0.9, ease: "power3.out" },
          "-=0.8"
        )
        // 4. 타이틀 한 줄씩 마스크 리빌
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
        // 5. 서브 텍스트 fade up
        .fromTo(
          ".mvv-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "sine.out" },
          "-=0.5"
        )
        // 6. 스크롤 인디케이터
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
        <div className="mvv-eyebrow">
          <span className="mvv-eyebrow-inner">N·Core Factory AI</span>
        </div>

        <h1 className="mvv-title">
          <span className="mvv-title-line">
            <span className="mvv-title-line-inner">
              디지털 전환을 완성하는
            </span>
          </span>
          <span className="mvv-title-line">
            <span className="mvv-title-line-inner">
              새로운 방식
            </span>
          </span>
        </h1>

        <p className="mvv-desc">
          현장 진단부터 시스템 구축, 운영 고도화까지
          <br />
          자율제조로 가는 전 과정을 N·Core가 함께합니다.
        </p>
      </div>

      <div className="mvv-scroll-cue">
        <span className="mvv-scroll-cue__line" />
        <span className="mvv-scroll-cue__text">Scroll</span>
      </div>
    </div>
  );
}