import "./MainCircleAni.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainCircleAni() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const itemRefs = useRef([]);

  const innerGlowRef = useRef(null);
  const blur01Ref = useRef(null);
  const blur02Ref = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.4;

    gsap.to(circleRef.current, {
      y: -8,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".circle-highlight", {
      x: 18,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const ctx = gsap.context(() => {
      const items = itemRefs.current;
      const steps = items.length;

      const blurColors = [
        {
          b1: "#0460ff",
          b2: "#07DBC6",
        },
        {
          b1: "#7b2ff7",
          b2: "#7330E6",
        },
        {
          b1: "#7b2ff7",
          b2: "#4c1dff",
        },
        {
          b1: "#0460ff",
          b2: "#07DBC6",
        },
      ];

      gsap.set(items, {
        yPercent: 100,
        opacity: 0,
        force3D: true,
      });

      gsap.set(circleRef.current, {
        force3D: true,
      });

      gsap.set(items[0], {
        yPercent: 0,
        opacity: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${steps * 100}%`,
          scrub: true,
          pin: true,
        },
      });

      for (let i = 0; i < steps - 1; i++) {
        const current = items[i];
        const next = items[i + 1];

        tl.to(current, {
          yPercent: -100,
          opacity: 0,
          duration: 0.4,
          ease: "none",
        })
          .fromTo(
            next,
            {
              yPercent: 100,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.3,
              ease: "none",
            },
            "<",
          )
          .to(
            circleRef.current,
            {
              scale: 1 + (i + 1) * 0.08,
              duration: 1,
              ease: "none",
            },
            "<",
          )
          .to(
            innerGlowRef.current,
            {
              color: blurColors[i + 1].b1,
              duration: 1,
            },
            "<",
          )
          .to(
            blur02Ref.current,
            {
              backgroundColor: blurColors[i + 1].b2,
              duration: 1,
            },
            "<",
          );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setItemRef = (el, i) => {
    itemRefs.current[i] = el;
  };

  return (
    <div className="main-circle-ani" ref={sectionRef}>
      <div className="circle-blurred-group">
        <div className="blur blur01" ref={blur01Ref} />
        <div className="blur blur02" ref={blur02Ref} />
      </div>
      <div className="circle-carousel-group" ref={circleRef}>
        <div className="circle-video-shape">
          <video
            ref={videoRef}
            src="/images/main/motion2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="circle-inner-glow" ref={innerGlowRef} />

        <div className="circle-glass" />

        <div className="circle-highlight" />
        <div className="circle-highlight-small"></div>

        <div className="circle-rim" />
      </div>
      <div className="circle-caustics"></div>
      <div className="circle-text-viewport">
        <div className="circle-text-item" ref={(el) => setItemRef(el, 0)}>
          <p>
            오늘도 <span>반복되는 업무</span>에<br />
            너무 많은 <span>시간</span>을<br />
            쓰고 있지는 않으신가요?
          </p>
        </div>

        <div className="circle-text-item" ref={(el) => setItemRef(el, 1)}>
          <p>
            현장에서는 여전히
            <br />
            <span>사람이 눈으로 확인</span>하고
            <br />
            문제가 생긴 후에야
            <br />
            대응하고 있진 않으신가요?
          </p>
        </div>

        <div className="circle-text-item" ref={(el) => setItemRef(el, 2)}>
          <p>
            반복되는 관리 업무는 줄이고
            <br />
            <span>자동화</span>와 <span>실시간 감지</span>,<br />
            <span>데이터 기반 판단</span>으로
            <br />
            현장의 변화를 더 빠르게
            <br /> 이끌어갑니다.
          </p>
        </div>

        <div className="circle-text-item" ref={(el) => setItemRef(el, 3)}>
          <p>
            사무와 현장의 반복 업무,
            <br />
            이제 <span>하나로 자동화</span>할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
