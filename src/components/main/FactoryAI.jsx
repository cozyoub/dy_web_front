import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FactoryAI.css";
import MainTitle from "./MainTitle";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const leftData = [
  {
    category: "통합관제",
    title: "생상공정최적화 시스템",
    desc: "공정변수 기반 종속 변수에 대한 생순 / 품질 최적화 모델",
    tags: [{ label: "ICS", href: "/solution/solution03_01" }],
  },
  {
    category: "경영",
    title: "기업경영핵심 시스템",
    desc: "제조업 기반의 전사적 기업 경영 코어 솔루션",
    tags: [
      { label: "ERP", href: "/solution/solution02_04" },
      { label: "MES", href: "/solution/solution02_01" },
      { label: "FA", href: "/solution/solution01_03" },
      { label: "HR", href: "/solution/solution01_02" },
      { label: "GW", href: "/solution/solution01_10" },
      { label: "PMS", href: "/solution/solution01_04" },
    ],
  },
  {
    category: "설비",
    title: "통합설비보전 시스템",
    desc: "설비 상태에 대한 데이터 기반의 통합설비 관리 시스템",
    tags: [{ label: "CMMS", href: "/solution03_02" }],
  },
];

const rightData = [
  {
    category: "생산",
    title: "생산공정최적화 시스템",
    desc: "종속변수에 대한 생산/품질 최적화 AI 모델",
    tags: [{ label: "AI", href: "/solution/solution03_03" }],
  },
  {
    category: "품질",
    title: "통합품질관리 시스템",
    desc: "비전데이터를 활용한 품질 판정 AI 모델",
    tags: [{ label: "Qeye", href: "/solution/solution03_04" }],
  },
  {
    category: "환경안전",
    title: "환경안전경영 시스템",
    desc: "중재재해 예방 및 현장 위험을 최소화 하기 위한 모델",
    tags: [{ label: "ESH", href: "/solution/solution/solution03_05" }],
  },
  {
    category: "물류",
    title: "통합물류(운송)관리 시스템",
    desc: "물류흐름 실시간 관리 및 자동배차 시스템",
    tags: [{ label: "TMS", href: "/solution/solution03_06" }],
  },
];

function DiagramCard({ item }) {
  return (
    <div className="ai-diagram-card border-gradient">
      <span className="card-category">{item.category}</span>
      <strong className="card-title">{item.title}</strong>
      <p className="card-desc">{item.desc}</p>

      <div className="card-tags">
        {item.tags.map((tag) => {
          const isExternal = tag.href?.startsWith("http");

          return isExternal ? (
            <a
              key={tag.label}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-btn"
            >
              {tag.label}
              <img src="/images/main/ico_link.svg" alt="" />
            </a>
          ) : (
            <Link key={tag.label} to={tag.href} className="tag-btn">
              {tag.label}
              <img src="/images/main/ico_link.svg" alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function FactoryAI() {
  const wrapRef = useRef(null);

  // 배경 블러 떠다니는 애니메이션
  useEffect(() => {
    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }

    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray(".factory-ai-wrap .blur");
    const tweens = [];

    function rotate(target, direction) {
      const tween = gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        ease: "sine.inOut",
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
      tweens.push(tween);
    }
    function moveX(target, direction) {
      const tween = gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: "sine.inOut",
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
      tweens.push(tween);
    }
    function moveY(target, direction) {
      const tween = gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: "sine.inOut",
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
      tweens.push(tween);
    }

    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });
      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });

    return () => {
      tweens.forEach((t) => t.kill());
      gsap.killTweensOf(blurs);
    };
  }, []);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 851px)", () => {
        const leftCards = gsap.utils.toArray(
          ".diagram-col-left .ai-diagram-card",
        );
        const rightCards = gsap.utils.toArray(
          ".diagram-col-right .ai-diagram-card",
        );

        gsap.set(leftCards, { x: -80, opacity: 0 });
        gsap.set(rightCards, { x: 80, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".ncore-ai-diagram-wrap",
            start: "top 75%",
          },
        });

        tl.to(
          leftCards,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          },
          0,
        ).to(
          rightCards,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          },
          "<",
        );

        return () => tl.scrollTrigger?.kill();
      });
    }, wrap);

    return () => ctx.revert();
  }, []);
  return (
    <div className="factory-ai-wrap" ref={wrapRef}>
      <div className="blur blur1" />
      <div className="blur blur2" />
      <div className="blur blur3" />

      <div className="inner">
        <MainTitle
          title={
            <>
              제조 현장의 DX·AX를 이끄는 <br />
              스마트 AI 플랫폼, N·Core Factory AI
            </>
          }
          desc="AI와 데이터 기반의 스마트 제조 환경을 구축하여 기업의 DX·AX 혁신을 가속화합니다."
        />

        <div className="ncore-ai-diagram-wrap">
          <div className="diagram-col diagram-col-left">
            {leftData.map((item) => (
              <DiagramCard key={item.category} item={item} />
            ))}
          </div>

          <div className="ncore-ai-diagram">
            <div className="ncore-ring ncore-ring1">
              <svg width="490" height="490" viewBox="0 0 490 490">
                <circle
                  cx="245"
                  cy="245"
                  r="244"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1"
                  strokeDasharray="10 25"
                />
              </svg>
            </div>
            <div className="ncore-ai-node">
              <img src="/images/common/ncore_wh.svg" alt="N·Core" />
              <p>Factory AI</p>
            </div>
          </div>

          <div className="diagram-col diagram-col-right">
            {rightData.map((item) => (
              <DiagramCard key={item.category} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
