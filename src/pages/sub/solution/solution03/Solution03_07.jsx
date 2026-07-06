import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const mcsFeatures = [
  "전사적 경영관리를 위한 핵심(Core) 업무 솔루션: MES·FA·HR·PMS 통합",
  "실시간 데이터 중심의 AI 업무관리 체계 실현",
  "Connected Enterprise 무결성 원칙 기반 5대 데이터 원칙",
  "경영관리 데이터 자동 집계를 통한 AI 내부회계 관리",
  "ICS·MES 연동 생산 작업 스케줄 자동 생성 (APS Automation)",
];

const mcsModules = [
  {
    label: "MES",
    desc: "통합 생산 시스템",
    role: "생산 실적, 공정, 현장 데이터를 업무관리 체계와 연결",
  },
  {
    label: "FA",
    desc: "재무회계 시스템",
    role: "원가, 손익, 수익 데이터를 월 마감 기준으로 정합화",
  },
  {
    label: "HR",
    desc: "인사관리 시스템",
    role: "인력, 조직, 업무 자료를 시스템 기반으로 관리",
  },
  {
    label: "PMS",
    desc: "구매관리 시스템",
    role: "구매, 자재, 협력사 데이터를 생산 운영 흐름과 연동",
  },
];

const mcsPrinciples = [
  {
    title: "원칙 1",
    desc: "모든 Data, 발생 장소에서 발생 주체가 즉시 전산 시스템으로 Data 입력(수립)하는 구조",
  },
  {
    title: "원칙 2",
    desc: "모든 Data, 상호 연결(Interface)된 유기적 구조, 무결성 원칙(Connected Enterprise)에 입각한 시스템",
  },
  {
    title: "원칙 3",
    desc: "모든 Data, 공유·통합·집계 되는 구조",
  },
  {
    title: "원칙 4",
    desc: "월 마감(결산)을 통한 명확한 원가, 손익, 수익이 되는 시스템",
  },
  {
    title: "원칙 5",
    desc: "모든 보고 자료, 회의 자료가 시스템으로 관리되는 구조",
  },
];

const mcsAiAreas = [
  {
    title: "경영관리 (전사)",
    badge: "Internal Control",
    imgSrc: "/images/sub/solution03-07-ics.png",
    imgAlt: "Internal Control System 대시보드",
    imgLabel: "Internal Control System",
    items: [
      "경영관리 데이터 자동 집계를 통한 AI 내부 회계 관리 실현",
      "실시간 데이터 중심의 AI 업무관리 체계 실현",
    ],
  },
  {
    title: "물류관리 (생산)",
    badge: "APS Automation",
    imgSrc: "/images/sub/solution03-07-aps.png",
    imgAlt: "Advanced Planning & Scheduling Automation",
    imgLabel: "Advanced Planning & Scheduling Automation",
    items: [
      "현장 설비 데이터(통합관제시스템, ICS)와 MES 인터페이스를 통한 생산 작업 스케줄 자동 생성 및 관리",
    ],
  },
];

const mcsEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "업무 효율 향상",
    desc: "실시간 데이터 중심 업무관리로 사무 생산성을 높입니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "원가·실적 정합성",
    desc: "월 마감 기반 명확한 원가·손익·수익 관리를 실현합니다.",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "AI 내부회계 관리",
    desc: "경영관리 데이터 자동 집계를 통한 AI 내부 회계 관리를 지원합니다.",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "Connected Enterprise",
    desc: "모든 데이터가 연결·공유·집계되는 유기적 경영 체계를 구축합니다.",
  },
];

export default function Solution03_07() {
  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-07.jpg"
        label="MCS"
        description={
          <>
            제조업 생산 운영과 관리를 위한 동반자
            <br />
            실시간 데이터 중심의 AI 업무관리 체계 실현
          </>
        }
      />
      <SolutionFetures
        items={mcsFeatures}
        title={
          <>
            핵심(Core) 업무 솔루션으로
            <br />
            기업 경영관리 AI
          </>
        }
      />

      <div className="mcs-modules">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>N·Core MCS 통합 모듈</h3>
            <p>
              전사적 경영관리를 위한 핵심(Core) 업무 솔루션 도입 및 구축을 통한
              실시간 데이터 중심 업무관리 체계
            </p>
          </div>
          <ul className="mcs-modules-list">
            {mcsModules.map((mod) => (
              <li key={mod.label} className="mcs-module-item">
                <span className="mcs-module-code">{mod.label}</span>
                <strong>{mod.desc}</strong>
                <p>{mod.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mcs-principles">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>Connected Enterprise 5대 원칙</h3>
            <p>실시간 데이터 중심의 AI 업무관리 체계 실현</p>
          </div>
          <ul className="mcs-principles-list">
            {mcsPrinciples.map((p) => (
              <li key={p.title} className="mcs-principle-item">
                <span className="mcs-principle-label">{p.title}</span>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>
          <div className="mcs-data-spine">
            <strong>실시간 데이터 중심의 AI 업무관리 체계</strong>
            <span>입력, 연결, 공유, 집계, 보고까지 하나의 데이터 흐름으로 관리</span>
          </div>
        </div>
      </div>

      <div className="mcs-ai-areas">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>AI 기반 경영·물류 관리</h3>
          </div>
          <div className="mcs-ai-grid">
            {mcsAiAreas.map((area) => (
              <div key={area.title} className="mcs-ai-card">
                <span className="mcs-ai-badge">{area.badge}</span>
                <h4>{area.title}</h4>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mcs-ai-img">
                  <img src={area.imgSrc} alt={area.imgAlt} />
                  <span>{area.imgLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SolutionEffect
        title={
          <>
            데이터 기반 AI 경영으로
            <br />
            실현하는 스마트 제조 경영
          </>
        }
        desc="MES·FA·HR·PMS 통합과 AI 내부회계로 기업 경영 경쟁력을 강화합니다."
        items={mcsEffects}
      />
    </div>
  );
}
