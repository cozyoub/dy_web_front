// MainProcess.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainSectionTitle from "./MainSectionTitle";
import "./MainProcess.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: "step01",
    step: "Step01",
    title: "현장진단",
    desc: (
      <>
        사무·현장의 자동화 대상을 정의하고, 설비와 업무의 우선순위를 설정합니다.
      </>
    ),
    icon: (
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="1">
          <path
            d="M200 200H328"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 200L264 88"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 200L136 88"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 200H72"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 200L136 312"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 200L264 312"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M200 214C207.732 214 214 207.732 214 200C214 192.268 207.732 186 200 186C192.268 186 186 192.268 186 200C186 207.732 192.268 214 200 214Z"
          fill="#49CFFF"
        />
        <path
          d="M328 212C334.627 212 340 206.627 340 200C340 193.373 334.627 188 328 188C321.373 188 316 193.373 316 200C316 206.627 321.373 212 328 212Z"
          fill="#49CFFF"
        />
        <path
          d="M264 100C270.627 100 276 94.6274 276 88C276 81.3726 270.627 76 264 76C257.373 76 252 81.3726 252 88C252 94.6274 257.373 100 264 100Z"
          fill="#49CFFF"
        />
        <path
          d="M136 100C142.627 100 148 94.6274 148 88C148 81.3726 142.627 76 136 76C129.373 76 124 81.3726 124 88C124 94.6274 129.373 100 136 100Z"
          fill="#49CFFF"
        />
        <path
          d="M72 212C78.6274 212 84 206.627 84 200C84 193.373 78.6274 188 72 188C65.3726 188 60 193.373 60 200C60 206.627 65.3726 212 72 212Z"
          fill="#49CFFF"
        />
        <path
          d="M136 324C142.627 324 148 318.627 148 312C148 305.373 142.627 300 136 300C129.373 300 124 305.373 124 312C124 318.627 129.373 324 136 324Z"
          fill="#49CFFF"
        />
        <path
          d="M264 324C270.627 324 276 318.627 276 312C276 305.373 270.627 300 264 300C257.373 300 252 305.373 252 312C252 318.627 257.373 324 264 324Z"
          fill="#49CFFF"
        />
      </svg>
    ),
  },
  {
    id: "step02",
    step: "Step02",
    title: "통합 설계",
    desc: (
      <>
        현장 데이터를 수집·구조화하여 설비·생산·경영 시스템과 AI를 연결합니다.
      </>
    ),
    icon: (
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="1">
          <path
            d="M325 272C325 272.356 324.81 272.686 324.502 272.865L200.502 344.865C200.192 345.045 199.808 345.045 199.498 344.865L75.498 272.865C75.1898 272.686 75 272.356 75 272V128C75 127.644 75.1898 127.314 75.498 127.135L199.498 55.1348L199.617 55.0762C199.903 54.9578 200.23 54.9772 200.502 55.1348L324.502 127.135C324.81 127.314 325 127.644 325 128V272Z"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 56V344"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M324 128L76 272"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M324 272L76 128"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M200 214C207.732 214 214 207.732 214 200C214 192.268 207.732 186 200 186C192.268 186 186 192.268 186 200C186 207.732 192.268 214 200 214Z"
          fill="#49CFFF"
        />
        <path
          d="M200 68C206.627 68 212 62.6274 212 56C212 49.3726 206.627 44 200 44C193.373 44 188 49.3726 188 56C188 62.6274 193.373 68 200 68Z"
          fill="#49CFFF"
        />
        <path
          d="M324 140C330.627 140 336 134.627 336 128C336 121.373 330.627 116 324 116C317.373 116 312 121.373 312 128C312 134.627 317.373 140 324 140Z"
          fill="#49CFFF"
        />
        <path
          d="M324 284C330.627 284 336 278.627 336 272C336 265.373 330.627 260 324 260C317.373 260 312 265.373 312 272C312 278.627 317.373 284 324 284Z"
          fill="#49CFFF"
        />
        <path
          d="M200 356C206.627 356 212 350.627 212 344C212 337.373 206.627 332 200 332C193.373 332 188 337.373 188 344C188 350.627 193.373 356 200 356Z"
          fill="#49CFFF"
        />
        <path
          d="M76 284C82.6274 284 88 278.627 88 272C88 265.373 82.6274 260 76 260C69.3726 260 64 265.373 64 272C64 278.627 69.3726 284 76 284Z"
          fill="#49CFFF"
        />
        <path
          d="M76 140C82.6274 140 88 134.627 88 128C88 121.373 82.6274 116 76 116C69.3726 116 64 121.373 64 128C64 134.627 69.3726 140 76 140Z"
          fill="#49CFFF"
        />
      </svg>
    ),
  },
  {
    id: "step03",
    step: "Step03",
    title: "구축 및 검증",
    desc: (
      <>
        최적의 시스템과 현장 환경을 구축하고, 실제 운영자와 함께 안정성을
        검증합니다.
      </>
    ),
    icon: (
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M325 272C325 272.356 324.81 272.686 324.502 272.865L200.502 344.865C200.192 345.045 199.808 345.045 199.498 344.865L75.498 272.865C75.1898 272.686 75 272.356 75 272V128C75 127.644 75.1898 127.314 75.498 127.135L199.498 55.1348L199.617 55.0762C199.903 54.9578 200.23 54.9772 200.502 55.1348L324.502 127.135C324.81 127.314 325 127.644 325 128V272Z"
          stroke="white"
          strstrokeOpacity="1"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask
          id="path-2-outside-1_382_877"
          maskUnits="userSpaceOnUse"
          x="138"
          y="150"
          width="136"
          height="104"
          fill="black"
        >
          <rect fill="white" x="138" y="150" width="136" height="104" />
          <path d="M140 208L184 252L272 152" />
        </mask>
        <path
          d="M141.414 206.586C140.633 205.805 139.367 205.805 138.586 206.586C137.805 207.367 137.805 208.633 138.586 209.414L140 208L141.414 206.586ZM184 252L182.586 253.414C182.977 253.805 183.511 254.017 184.064 253.999C184.616 253.981 185.136 253.736 185.501 253.321L184 252ZM273.501 153.321C274.231 152.492 274.15 151.228 273.321 150.499C272.492 149.769 271.228 149.85 270.499 150.679L272 152L273.501 153.321ZM140 208L138.586 209.414L182.586 253.414L184 252L185.414 250.586L141.414 206.586L140 208ZM184 252L185.501 253.321L273.501 153.321L272 152L270.499 150.679L182.499 250.679L184 252Z"
          fill="white"
          fillOpacity="1"
          mask="url(#path-2-outside-1_382_877)"
          strokeWidth="5"
        />
        <path
          d="M200 68C206.627 68 212 62.6274 212 56C212 49.3726 206.627 44 200 44C193.373 44 188 49.3726 188 56C188 62.6274 193.373 68 200 68Z"
          fill="#49CFFF"
        />
        <path
          d="M324 140C330.627 140 336 134.627 336 128C336 121.373 330.627 116 324 116C317.373 116 312 121.373 312 128C312 134.627 317.373 140 324 140Z"
          fill="#49CFFF"
        />
        <path
          d="M324 284C330.627 284 336 278.627 336 272C336 265.373 330.627 260 324 260C317.373 260 312 265.373 312 272C312 278.627 317.373 284 324 284Z"
          fill="#49CFFF"
        />
        <path
          d="M200 356C206.627 356 212 350.627 212 344C212 337.373 206.627 332 200 332C193.373 332 188 337.373 188 344C188 350.627 193.373 356 200 356Z"
          fill="#49CFFF"
        />
        <path
          d="M76 284C82.6274 284 88 278.627 88 272C88 265.373 82.6274 260 76 260C69.3726 260 64 265.373 64 272C64 278.627 69.3726 284 76 284Z"
          fill="#49CFFF"
        />
        <path
          d="M76 140C82.6274 140 88 134.627 88 128C88 121.373 82.6274 116 76 116C69.3726 116 64 121.373 64 128C64 134.627 69.3726 140 76 140Z"
          fill="#49CFFF"
        />
        <path
          d="M140 220C146.627 220 152 214.627 152 208C152 201.373 146.627 196 140 196C133.373 196 128 201.373 128 208C128 214.627 133.373 220 140 220Z"
          fill="#49CFFF"
        />
        <path
          d="M184 266C191.732 266 198 259.732 198 252C198 244.268 191.732 238 184 238C176.268 238 170 244.268 170 252C170 259.732 176.268 266 184 266Z"
          fill="#49CFFF"
        />
        <path
          d="M272 164C278.627 164 284 158.627 284 152C284 145.373 278.627 140 272 140C265.373 140 260 145.373 260 152C260 158.627 265.373 164 272 164Z"
          fill="#49CFFF"
        />
      </svg>
    ),
  },
  {
    id: "step04",
    step: "Step04",
    title: "운영 및 개선",
    desc: (
      <>
        AI 분석과 개선 권고를 제공하며, 자율 운영 수준으로 지속적으로
        고도화합니다.
      </>
    ),
    icon: (
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="mp-icon__orbit-spin">
          <path
            d="M200 336C275.111 336 336 275.111 336 200C336 124.889 275.111 64 200 64C124.889 64 64 124.889 64 200C64 275.111 124.889 336 200 336Z"
            stroke="white"
            strstrokeOpacity="1"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 252C275.111 252 336 228.719 336 200C336 171.281 275.111 148 200 148C124.889 148 64 171.281 64 200C64 228.719 124.889 252 200 252Z"
            stroke="white"
            strstrokeOpacity="1"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M200 336C228.719 336 252 275.111 252 200C252 124.889 228.719 64 200 64C171.281 64 148 124.889 148 200C148 275.111 171.281 336 200 336Z"
            stroke="white"
            strstrokeOpacity="1"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M104 296L280 120"
          stroke="#49CFFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M240 120H280V160"
          stroke="#49CFFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M200 76C206.627 76 212 70.6274 212 64C212 57.3726 206.627 52 200 52C193.373 52 188 57.3726 188 64C188 70.6274 193.373 76 200 76Z"
          fill="#49CFFF"
        />
        <path
          d="M200 348C206.627 348 212 342.627 212 336C212 329.373 206.627 324 200 324C193.373 324 188 329.373 188 336C188 342.627 193.373 348 200 348Z"
          fill="#49CFFF"
        />
        <path
          d="M64 212C70.6274 212 76 206.627 76 200C76 193.373 70.6274 188 64 188C57.3726 188 52 193.373 52 200C52 206.627 57.3726 212 64 212Z"
          fill="#49CFFF"
        />
        <path
          d="M336 212C342.627 212 348 206.627 348 200C348 193.373 342.627 188 336 188C329.373 188 324 193.373 324 200C324 206.627 329.373 212 336 212Z"
          fill="#49CFFF"
        />
        <path
          d="M104 308C110.627 308 116 302.627 116 296C116 289.373 110.627 284 104 284C97.3726 284 92 289.373 92 296C92 302.627 97.3726 308 104 308Z"
          fill="#49CFFF"
        />
      </svg>
    ),
  },
];

export default function MainProcess() {
  const sectionRef = useRef(null);
  const circleRefs = useRef([]);
  const progressRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".main-process article", {
        yPercent: 25,
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".main-process",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      const items = gsap.utils.toArray(".mp-item");

      items.forEach((li, i) => {
        const next = items[i + 1] || null;
        const circle = circleRefs.current[i];
        const progress = progressRefs.current[i];
        const iconWrap = iconRefs.current[i];

        gsap.set(progress, { height: 0 });

        const svg = iconWrap?.querySelector("svg");
        const lines = svg ? svg.querySelectorAll('path[stroke="white"]') : [];
        const dots = svg ? svg.querySelectorAll('path[fill="#49CFFF"]') : [];

        lines.forEach((line) => {
          const length = line.getTotalLength();
          gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });

        gsap.set(dots, { scale: 0, transformOrigin: "center center" });
        if (svg) gsap.set(svg, { filter: "drop-shadow(0 0 0px rgba(73,207,255,0))" });

        let ambientTl = null;

        // ★ 라인은 지우지 않고 유지한 채로, 점이 은은하게 맥동 + 아이콘 전체 글로우가 숨쉬는 앰비언트 루프
        const startAmbientLoop = () => {
          stopAmbientLoop();

          ambientTl = gsap.timeline({ repeat: -1 });

          if (dots.length) {
            ambientTl.to(
              dots,
              {
                scale: 1.22,
                duration: 1,
                ease: "sine.inOut",
                yoyo: true,
                repeat: 1,
                stagger: {
                  each: 0.14,
                  yoyo: true,
                },
              },
              0,
            );
          }

          if (svg) {
            ambientTl.to(
              svg,
              {
                filter: "drop-shadow(0 0 16px rgba(73,207,255,0.6))",
                duration: 1.6,
                ease: "sine.inOut",
                yoyo: true,
                repeat: 1,
              },
              0,
            );
          }
        };

        const stopAmbientLoop = () => {
          if (ambientTl) {
            ambientTl.kill();
            ambientTl = null;
          }
          gsap.set(dots, { scale: 1 });
          if (svg) {
            gsap.set(svg, {
              filter: "drop-shadow(0 0 0px rgba(73,207,255,0))",
            });
          }
        };

        const iconTl = gsap.timeline({
          paused: true,
          onComplete: startAmbientLoop, // ★ 다 그려지면 은은한 맥동 루프 시작
        });
        iconTl
          .to(lines, {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.05,
          })
          .to(
            dots,
            {
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
              stagger: 0.04,
            },
            "-=0.4",
          );

        ScrollTrigger.create({
          trigger: li,
          start: "top 70%",
          endTrigger: next || li,
          end: next ? "top 70%" : "bottom 40%",
          onEnter: () => {
            circle.classList.add("is-active");
            iconTl.play();
          },
          onEnterBack: () => {
            circle.classList.add("is-active");
            iconTl.play();
          },
          onLeaveBack: () => {
            circle.classList.remove("is-active");
            stopAmbientLoop();
            iconTl.reverse();
          },
        });

        gsap.fromTo(
          progress,
          { height: 0 },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: li,
              start: "top 70%",
              endTrigger: next || li,
              end: next ? "top 70%" : "bottom 40%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-process" ref={sectionRef}>
      {/* <article></article> */}
      <MainSectionTitle
        className="main-process__title"
        title={
          <>
            설계, 구축, 운영, 고도화까지
            <br /> 안정적인 <b>디지털 전환</b>을 제공합니다
          </>
        }
        eyebrow={
          <>
            현장 이해를 바탕으로 설계부터 운영, 개선까지
          </>
        }
      />

      <ul className="mp-list">
        {steps.map((item, i) => (
          <li key={item.id} className="mp-item">
            <div className="mp-item__txt">
              <span className="mp-item__step">{item.step}</span>
              <h3 className="mp-item__title">{item.title}</h3>
              <p className="mp-item__desc">{item.desc}</p>
            </div>

            <div className="mp-item__line-wrap">
              <div className="mp-item__circle-wrap">
                <div
                  className="mp-item__circle"
                  ref={(el) => (circleRefs.current[i] = el)}
                />
              </div>
              <div className="mp-item__line">
                <div
                  className="mp-item__progress"
                  ref={(el) => (progressRefs.current[i] = el)}
                />
              </div>
            </div>

            <div
              className="mp-item__geometry"
              ref={(el) => (iconRefs.current[i] = el)}
            >
              {item.icon}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}