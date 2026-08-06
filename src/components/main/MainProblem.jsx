import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Share2, Eye, Wrench, ClipboardList } from "lucide-react";
import "./MainProblem.css";

gsap.registerPlugin(ScrollTrigger);

const officeItems = [
  {
    icon: FileText,
    title: ["반복되는 문서 작업,", "쌓여만 가는 인적 비용"],
    desc: "자료 분류와 입력, 보고서 작성까지 매번 사람 손을 거치는 반복 업무는 결국 인건비 낭비와 휴먼 에러로 이어집니다.",
  },
  {
    icon: Share2,
    title: ["흩어진 업무 정보,", "늦어지는 의사결정"],
    desc: "부서마다 파편화된 데이터 속에서 필요한 정보를 찾느라 정작 중요한 순간의 의사결정이 지연됩니다.",
  },
];

const fieldItems = [
  {
    icon: Eye,
    title: ["사람 눈에 의존한 품질검사,", "놓치는 불량"],
    desc: "육안·수작업 검사는 검사자의 컨디션과 숙련도에 따라 편차가 크고, 미세한 불량을 놓칠 위험이 항상 존재합니다.",
  },
  {
    icon: Wrench,
    title: ["설비 이상 징후 포착 실패,", "사후 대응의 함정"],
    desc: "이상 징후를 사전에 감지하지 못한 채 고장이 난 후에야 대응하다 보니, 골든타임을 놓치고 정비 비용은 커집니다.",
  },
  {
    icon: ClipboardList,
    title: ["수기로 기록되는 생산 현황,", "실시간 파악 불가"],
    desc: "현장 데이터가 종이와 개인 기록에 의존하다 보니 실시간 통합 관제가 불가능하고, 문제 발생 시 대응이 항상 한 박자 늦습니다.",
  },
];

function ProblemCard({ icon: Icon, title, desc }) {
  return (
    <div className="problem-card">
      <div className="problem-card__icon">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="problem-card__title">
        {title.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < title.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      <p className="problem-card__desc">{desc}</p>
    </div>
  );
}

export default function MainProblem() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const bodyRef = useRef(null);
  const groupRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      )
        .fromTo(
          headlineRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.35",
        )
        .fromTo(
          bodyRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        );

      groupRefs.current.forEach((group) => {
        if (!group) return;
        const cards = group.querySelectorAll(".problem-card");
        gsap.fromTo(
          cards,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      // 851px 이상 데스크탑에서만 헤드 텍스트 패럴랙스
      const mm = gsap.matchMedia();
      mm.add("(min-width: 851px)", () => {
        gsap.to(eyebrowRef.current, {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(headlineRef.current, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        return () => {
          const targets = [eyebrowRef.current, headlineRef.current].filter(
            Boolean,
          );
          if (targets.length) {
            gsap.set(targets, { clearProps: "transform" });
          }
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="problem-section" ref={sectionRef}>
      <div className="problem-section__head">
        <p className="problem-section__eyebrow" ref={eyebrowRef}>
          사무실엔 쌓여만 가는 문서, 현장엔 감으로 하는 품질검사...
        </p>
        <h2 className="problem-section__headline" ref={headlineRef}>
          이대로 괜찮을까요?
        </h2>
        <p className="problem-section__body" ref={bodyRef}>
          설비 이상을 사전에 감지하지 못해 발생하는 비계획 정지 비용은 연간 수억 원*에 달하지만
          <br />
          많은 제조 기업은 아직도 반복 업무를 수작업으로, 설비 상태를 사후 대응으로 관리하고 있습니다.
          <br />
          그러나 데이터 없이 이뤄지는 사무·현장 관리는 의사결정 지연과 품질 리스크를 초래하며
          <br />
          기업에 보이지 않는 손실을 만듭니다.
        </p>
      </div>

      <div
        className="problem-section__group"
        ref={(el) => (groupRefs.current[0] = el)}
      >
        <div className="problem-section__label">
          <span>사무</span>
        </div>
        <div className="problem-section__grid problem-section__grid--office">
          {officeItems.map((item, i) => (
            <ProblemCard key={i} {...item} />
          ))}
        </div>
      </div>

      <div
        className="problem-section__group"
        ref={(el) => (groupRefs.current[1] = el)}
      >
        <div className="problem-section__label">
          <span>현장</span>
        </div>
        <div className="problem-section__grid problem-section__grid--field">
          {fieldItems.map((item, i) => (
            <ProblemCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}