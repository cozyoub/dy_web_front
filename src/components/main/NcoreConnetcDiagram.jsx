import MainSectionTitle from "./MainSectionTitle";
import "./NcoreConnectDiagram.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PROCESS = [
  {
    no: "01",
    title: "사무업무 자동화",
    desc: "자료를 분류하고 입력하며 보고서 작성과 반복 업무를 자동화합니다.",
  },
  {
    no: "02",
    title: "AI 품질 검사",
    desc: "AI 비전이 제품 상태를 판정하고 품질검사를 자동화합니다.",
  },
  {
    no: "03",
    title: "이상감지·정비권고",
    desc: "AI가 지상 징후를 감지하고 점검과 정비 시점을 권고합니다.",
  },
  {
    no: "04",
    title: "실시간 통합관제",
    desc: "현장 데이터를 자동 수집하여 실시간으로 통합 관제합니다.",
  },
  {
    no: "05",
    title: "데이터 기반 의사결정",
    desc: "AI가 업무 데이터를 분석하고 필요한 정보와 대응 방향을 제안합니다.",
  },
];

// 원 하나씩 자동으로 active 시키는 간격 (ms)
const AUTO_ACTIVE_INTERVAL = 2400;

export default function NcoreConnectDiagram() {
  const rootRef = useRef(null);

  useEffect(() => {
    let intervalId = null;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 851px)", () => {
        gsap.set(".cir", { opacity: 0, y: 80, scale: 0.85 });

        gsap.to(".cir", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".process-wrap",
            start: "top 80%",
            once: true,
          },
        });

        return () => {
          gsap.set(".cir", { clearProps: "opacity,transform" });
        };
      });

      gsap.to(".ncore-connect article", {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".ncore-connect",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".process-wrap", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".ncore-connect",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 일정 시간 간격으로 원을 하나씩 자동 active
      ScrollTrigger.create({
        trigger: ".process-wrap",
        start: "top 80%",
        once: true,
        onEnter: () => {
          const circles = gsap.utils.toArray(".cir");
          if (!circles.length) return;

          let idx = 0;
          const activate = (i) => {
            circles.forEach((el, n) =>
              el.classList.toggle("is-active", n === i),
            );
          };

          activate(idx);
          intervalId = setInterval(() => {
            idx = (idx + 1) % circles.length;
            activate(idx);
          }, AUTO_ACTIVE_INTERVAL);
        },
      });
    }, rootRef);

    return () => {
      if (intervalId) clearInterval(intervalId);
      ctx.revert();
    };
  }, []);
  return (
    <div className="ncore-connect" ref={rootRef}>
      <article></article>
      <div className="rotate-bg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1230 1230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="1229"
            height="1229"
            rx="614.5"
            stroke="white"
            strokeOpacity="0.3"
            strokeDasharray="10 10"
          />
          <g className="orb orb1">
            <rect
              x="1036"
              y="171"
              width="20"
              height="20"
              rx="10"
              fill="#48CEFF"
            />
            <rect
              x="1031"
              y="166"
              width="30"
              height="30"
              rx="15"
              stroke="#67E8F9"
              strokeDasharray="3 3"
            />
          </g>
          <g className="orb orb2">
            <rect
              x="83"
              y="929"
              width="20"
              height="20"
              rx="10"
              fill="#48CEFF"
            />
            <rect
              x="78"
              y="924"
              width="30"
              height="30"
              rx="15"
              stroke="#67E8F9"
              strokeDasharray="3 3"
            />
          </g>
        </svg>
      </div>

      <div className="ncore-connect-inner">
        <MainSectionTitle
          eyebrow={
            <>
              사무업무부터 실시간 관제, 의사결정까지
              <br />
              <b> N·Core </b>가 하나로 연결합니다
            </>
          }
          title={<>하나로 연결되는 스마트 팩토리 솔루션</>}
        />
        <ul className="process-wrap">
          {PROCESS.map((item) => (
            <li className="cir" key={item.no}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="387"
                height="387"
                viewBox="0 0 387 387"
              >
                <g fill="none" stroke="#fff" strokeWidth="1">
                  <circle cx="193.5" cy="193.5" r="193" fill="none" />
                </g>
              </svg>
              <div className="txt">
                <span className="txt-no">{item.no}</span>
                <h3 className="txt-title">{item.title}</h3>
                <p
                  className="txt-desc"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}