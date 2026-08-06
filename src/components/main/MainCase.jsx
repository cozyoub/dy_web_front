import "./MainCase.css";
import MainSectionTitle from "./MainSectionTitle";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const caseItems = [
  {
    id: "case01",
    title: (
      <>
        디지털 트윈으로 병목공정을
        <br />
        발견하고 개선까지 연결하다.
      </>
    ),
    image: "/images/main/case_img1.png",
    steps: [
      {
        label: "DX 이전",
        text: "공정별 작업시간과 병목 위치를 수작업으로 확인",
      },
      {
        label: "전환",
        text: "설비 데이터와 Digital Twin 관제 시스템을 연결해 병목 원인을 분석",
      },
      {
        label: "DX 이후",
        text: "병목 공정을 식별하고 개선 권고와 운영조건 조정까지 지원",
      },
    ],
    tags: ["DT", "설비관제", "생산 데이터 연계"],
  },
  {
    id: "case02",
    title: (
      <>
        설비 데이터를 표준화해 코일 품질을 예측하다
      </>
    ),
    image: "/images/main/case_img2.png",
    steps: [
      {
        label: "DX 이전",
        text: "운영 파라미터와 품질 데이터가 분리되어 원인 분석이 어려움",
      },
      {
        label: "전환",
        text: "설비 데이터 표준화와 AI 품질 예측 모델 구축",
      },
      {
        label: "DX 이후",
        text: "품질 이상을 사전에 예측하고 대응 시간을 단축",
      },
    ],
    tags: ["AI/ML", "데이터 표준화", "품질 예측"],
  },
  {
    id: "case03",
    title: (
      <>
        계근대 설치부터 운송데이터 통합까지<br/>
        현장 환경을 구축하다
      </>
    ),
    image: "/images/main/case_img3.png",
    steps: [
      {
        label: "DX 이전",
        text: "현장 계근 환경과 공장별 운송 정보가 분리됨",
      },
      {
        label: "전환",
        text: "차량 계근대 설치, PLC 계근 시스템 구축, TMS 연동",
      },
      {
        label: "DX 이후",
        text: "차량 전입, 중량, 배차와 운송 상태를 실시간 통합 운영",
      },
    ],
    tags: ["TMS", "계근 연계", "글로벌 통합"],
  },
];

export default function MainCase() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 851px)", () => {
        gsap.set(".main-case__text", { opacity: 0, x: -60 });
        gsap.to(".main-case__text", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".main-case",
            start: "top 75%",
            once: true,
          },
        });

        gsap.set(".main-case__card", { opacity: 0, x: 80 });
        gsap.to(".main-case__card", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".main-case__content",
            start: "top 80%",
            once: true,
          },
        });

        return () => {
          gsap.set([".main-case__text", ".main-case__card"], {
            clearProps: "opacity,transform",
          });
        };
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-case" ref={rootRef} id="case">
      <div className="inner">
        <div className="main-case__text">
          <MainSectionTitle
            reverse
            title={
              <>
                현장의 변화를
                <br />
                <b>구축 결과</b>로 증명합니다
              </>
            }
            eyebrow={
              <>
                Digital Twin, AI 기반 품질 예측, 데이터 표준화 등 현장 중심의
                DX·AX 기술을 적용하여 생산성과 운영 효율을 높이고,데이터 기반의
                의사결정을 지원하는 실질적인 구축 성과를 만들어가고 있습니다.
              </>
            }
          />
        </div>

        <div className="main-case__content">
          {caseItems.map((item) => (
            <div key={item.id} className="main-case__card">
              {item.image && (
                <div className="main-case__img-wrap">
                  <img src={item.image} alt="" />
                </div>
              )}

              <h3 className="main-case__card-title">{item.title}</h3>

              <div className="main-case__steps">
                {item.steps.map((step) => (
                  <div key={step.label} className="main-case__step">
                    <span className="main-case__step-label">{step.label}</span>
                    <p className="main-case__step-text">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="main-case__step">
                <span className="main-case__tags-label">{item.tagLabel}</span>

                <div className="main-case__tags-list">
                  <span className="main-case__step-label">적용 솔루션</span>
                  <div className="main-case__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="main-case__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}