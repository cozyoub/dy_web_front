import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizonWrap.css";
gsap.registerPlugin(ScrollTrigger);

const OFFICE_PROBLEMS = [
  "반복 문서, 데이터 처리",
  "분산된 업무 정보와 늦은 의사결정",
];

const FIELD_PROBLEMS = [
  "사람 중심의 수작업 품질검사",
  "설비 이상 발생 후 사후 대응",
  "생산 및 설비 현황 수기 관리",
];

const START = "circle(0% at 50% 50%)";
const MID = "circle(70% at 50% 50%)";
const END = "circle(180% at 50% 50%)";

export default function HorizonGlow() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".circle-group", {
        clipPath: START,
        transformOrigin: "50% 50%",
      });
      gsap.set(".hz-group", { autoAlpha: 0 });
      gsap.set(".hz-group--office", { autoAlpha: 1 });
      gsap.set(".hz-office-card, .hz-field-card", { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl
        // 1. 사무 카드 등장
        .to(".hz-office-card", {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 0.5 })
        .to(".hz-office-card", {
          opacity: 0,
          y: -30,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        })
        .add("swap1")
        .to(".hz-group--office", { autoAlpha: 0, duration: 0.3 }, "swap1")
        .to(".hz-group--field", { autoAlpha: 1, duration: 0.3 }, "swap1+=0.05")
        // 2. 현장 카드 등장
        .to(
          ".hz-field-card",
          {
            opacity: 1,
            y: 0,
            stagger: 0.18,
            duration: 1,
            ease: "power2.out",
          },
          "swap1+=0.2"
        )
        .to({}, { duration: 0.5 })
        .to(".hz-field-card", {
          opacity: 0,
          y: -30,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        })
        .add("swap2")
        .to(".hz-group--field", { autoAlpha: 0, duration: 0.3 }, "swap2")

        // 3. 원(circle-group)이 화면 전체로 펼쳐짐
        .to(
          ".circle-group",
          { clipPath: MID, duration: 0.3, ease: "power2.in" },
          "swap2+=0.1"
        )
        .to(
          ".circle-group",
          { clipPath: END, duration: 0.5, ease: "power2.inOut" },
          ">-0.05"
        )
        .to(".hz-group--conclusion", { autoAlpha: 1, duration: 0.4 }, ">-0.3")
        .fromTo(
          ".horizon-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "<"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="horizon-wrap" ref={rootRef}>
      <div className="horizon-stage">
        {/* 참고 SVG 그대로, 색상만 사이트 팔레트로 교체 */}
        <div className="circle-group">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1220 1220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#hz_filter0_f)">
              <path
                d="M1090 610C1090 344.903 875.097 130 610 130C344.903 130 130 344.903 130 610C130 875.097 344.903 1090 610 1090C875.097 1090 1090 875.097 1090 610Z"
                stroke="url(#hz_paint0_linear)"
                strokeWidth="5.73379"
              />
            </g>
            <g style={{ mixBlendMode: "color-dodge" }} filter="url(#hz_filter1_f)">
              <path
                d="M1090 610C1090 344.903 875.097 130 610 130C344.903 130 130 344.903 130 610C130 875.097 344.903 1090 610 1090C875.097 1090 1090 875.097 1090 610Z"
                stroke="#48CEFF"
                strokeOpacity="0.6"
                strokeWidth="47.5085"
              />
            </g>
            <g style={{ mixBlendMode: "color-dodge" }} filter="url(#hz_filter2_f)">
              <path
                d="M1090 610C1090 344.903 875.097 130 610 130C344.903 130 130 344.903 130 610C130 875.097 344.903 1090 610 1090C875.097 1090 1090 875.097 1090 610Z"
                stroke="#23DEC0"
                strokeWidth="23.7543"
              />
            </g>
            <g filter="url(#hz_filter3_d)">
              <rect
                x="135.734"
                y="136.554"
                width="947.713"
                height="947.713"
                rx="473.857"
                fill="#060B14"
              />
            </g>
            <defs>
              <filter
                id="hz_filter0_f"
                x="121.399"
                y="121.399"
                width="977.201"
                height="977.201"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="2.86689" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="hz_filter1_f"
                x="82.4916"
                y="82.4913"
                width="1055.02"
                height="1055.02"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="11.8771" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="hz_filter2_f"
                x="0.170593"
                y="0.170593"
                width="1219.66"
                height="1219.66"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="58.9761" result="effect1_foregroundBlur" />
              </filter>
              <filter
                id="hz_filter3_d"
                x="25.1534"
                y="71.0247"
                width="1111.54"
                height="1111.54"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-28.6689" dy="16.3823" />
                <feGaussianBlur stdDeviation="40.9556" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.282 0 0 0 0 0.808 0 0 0 0 1 0 0 0 0.4 0"
                />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              </filter>
              <linearGradient
                id="hz_paint0_linear"
                x1="130"
                y1="610"
                x2="1090"
                y2="610"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#48CEFF" />
                <stop offset="0.65625" stopColor="#48CEFF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hz-group hz-group--office">
          <span className="hz-cards-label">사무</span>
          <div className="hz-cards-list">
            {OFFICE_PROBLEMS.map((text) => (
              <div className="hz-office-card" key={text}>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="hz-group hz-group--field">
          <span className="hz-cards-label">현장</span>
          <div className="hz-cards-list">
            {FIELD_PROBLEMS.map((text) => (
              <div className="hz-field-card" key={text}>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="hz-group hz-group--conclusion">
          <p className="horizon-text">
            사무와 현장의 반복 업무,
            <br />
            이제 AI로 자동화할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}