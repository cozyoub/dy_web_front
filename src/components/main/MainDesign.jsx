import "./MainDesign.css";
import MainSectionTitle from "./MainSectionTitle";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/main/MainDesign";
gsap.registerPlugin(ScrollTrigger);

export default function MainDesign() {
  const tr = useTr(en);
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 851px)", () => {
        gsap.to(".main-design__content", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".main-design",
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
        },
      });

      });

      gsap.set(".main-design__itm", { opacity: 0, y: 60 });
      gsap.to(".main-design__itm", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".main-design__content",
          start: "top 80%",
          once: true,
        },
      });
      gsap.to(".main-design article", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".main-design",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      
      gsap.utils.toArray(".main-design__itm-ico").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? 8 : -8,
          duration: 2.5 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.25,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="main-design" ref={rootRef}>
        <MainSectionTitle
          reverse
          className="main-design__title"
          eyebrow={<>{tr("eyebrow", "시스템 구축을 넘어 제조운영 변화를 설계")}</>}
          title={
            <>
              <b>{tr("titleB", "현장 진단부터 운영고도화")}</b>
              {tr("title2a", "까지,")}
              <br />
              {tr("title2b", "전 과정을 함께합니다")}
            </>
          }
        />

        <div className="main-design__content inner">
          <article></article>
          <div className="main-design__itm">
            <h3 className="main-design__itm-title">{tr("items.0.title", "현장진단")}</h3>
            <i className="main-design__itm-ico">
              <img src="/images/main/design_ico01.svg" />
            </i>
            <p>{tr("items.0.desc", "자동화가 필요한 사무와 현장 업무를 정의하고 우선순위를 제안합니다.")}</p>
          </div>
          <div className="main-design__itm">
            <h3 className="main-design__itm-title">{tr("items.1.title", "통합 구축")}</h3>
            <i className="main-design__itm-ico">
              <img src="/images/main/design_ico02.svg" />
            </i>
            <p>{tr("items.1.desc", "설비, 생산, 경영, AI시스템을 하나의 데이터 흐름으로 연결합니다.")}</p>
          </div>
          <div className="main-design__itm">
            <h3 className="main-design__itm-title">{tr("items.2.title", "운영 고도화")}</h3>
            <i className="main-design__itm-ico">
              <img src="/images/main/design_ico03.svg" />
            </i>
            <p>{tr("items.2.desc", "AI 분석 결과를 권고와 제어에 활용해 자율 운영 수준을 높입니다.")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
