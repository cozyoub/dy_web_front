import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution03_07";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

const koModules = [
  { label: "MES", desc: "통합 생산 시스템", role: "생산 실적, 공정, 현장 데이터를 업무관리 체계와 연결" },
  { label: "FA", desc: "재무회계 시스템", role: "원가, 손익, 수익 데이터를 월 마감 기준으로 정합화" },
  { label: "HR", desc: "인사관리 시스템", role: "인력, 조직, 업무 자료를 시스템 기반으로 관리" },
  { label: "PMS", desc: "구매관리 시스템", role: "구매, 자재, 협력사 데이터를 생산 운영 흐름과 연동" },
];

const koPrinciples = [
  { title: "원칙 1", desc: "모든 Data, 발생 장소에서 발생 주체가 즉시 전산 시스템으로 Data 입력(수립)하는 구조" },
  { title: "원칙 2", desc: "모든 Data, 상호 연결(Interface)된 유기적 구조, 무결성 원칙(Connected Enterprise)에 입각한 시스템" },
  { title: "원칙 3", desc: "모든 Data, 공유·통합·집계 되는 구조" },
  { title: "원칙 4", desc: "월 마감(결산)을 통한 명확한 원가, 손익, 수익이 되는 시스템" },
  { title: "원칙 5", desc: "모든 보고 자료, 회의 자료가 시스템으로 관리되는 구조" },
];

const koAiAreas = [
  {
    title: "경영관리 (전사)",
    badge: "Internal Control",
    imgSrc: "/images/sub/solution03-07-ics.png",
    imgAlt: "Internal Control System 대시보드",
    imgLabel: "Internal Control System",
    items: ["경영관리 데이터 자동 집계를 통한 AI 내부 회계 관리 실현", "실시간 데이터 중심의 AI 업무관리 체계 실현"],
  },
  {
    title: "물류관리 (생산)",
    badge: "APS Automation",
    imgSrc: "/images/sub/solution03-07-aps.png",
    imgAlt: "Advanced Planning & Scheduling Automation",
    imgLabel: "Advanced Planning & Scheduling Automation",
    items: ["현장 설비 데이터(통합관제시스템, ICS)와 MES 인터페이스를 통한 생산 작업 스케줄 자동 생성 및 관리"],
  },
];

export default function Solution03_07() {
  const tr = useTr(en);

  const mcsFeatures = trArr(tr, "features.items", [
    "전사적 경영관리를 위한 핵심(Core) 업무 솔루션: MES·FA·HR·PMS 통합",
    "실시간 데이터 중심의 AI 업무관리 체계 실현",
    "Connected Enterprise 무결성 원칙 기반 5대 데이터 원칙",
    "경영관리 데이터 자동 집계를 통한 AI 내부회계 관리",
    "ICS·MES 연동 생산 작업 스케줄 자동 생성 (APS Automation)",
  ]);

  const mcsModules = koModules.map((mod, i) => ({
    label: mod.label,
    desc: tr(`modules.items.${i}.desc`, mod.desc),
    role: tr(`modules.items.${i}.role`, mod.role),
  }));

  const mcsPrinciples = koPrinciples.map((p, i) => ({
    title: tr(`principles.items.${i}.title`, p.title),
    desc: tr(`principles.items.${i}.desc`, p.desc),
  }));

  const mcsAiAreas = koAiAreas.map((area, i) => ({
    ...area,
    title: tr(`aiAreas.items.${i}.title`, area.title),
    items: trArr(tr, `aiAreas.items.${i}.list`, area.items),
  }));

  const mcsEffects = [
    { icon: "/images/sub/ico_effect01.svg", title: tr("effect.items.0.title", "업무 효율 향상"), desc: tr("effect.items.0.desc", "실시간 데이터 중심 업무관리로 사무 생산성을 높입니다.") },
    { icon: "/images/sub/ico_effect02.svg", title: tr("effect.items.1.title", "원가·실적 정합성"), desc: tr("effect.items.1.desc", "월 마감 기반 명확한 원가·손익·수익 관리를 실현합니다.") },
    { icon: "/images/sub/ico_effect04.svg", title: tr("effect.items.2.title", "AI 내부회계 관리"), desc: tr("effect.items.2.desc", "경영관리 데이터 자동 집계를 통한 AI 내부 회계 관리를 지원합니다.") },
    { icon: "/images/sub/ico_effect06.svg", title: tr("effect.items.3.title", "Connected Enterprise"), desc: tr("effect.items.3.desc", "모든 데이터가 연결·공유·집계되는 유기적 경영 체계를 구축합니다.") },
  ];

  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-07.jpg"
        label={tr("intro.label", "MCS")}
        description={
          <>
            {tr("intro.d1", "제조업 생산 운영과 관리를 위한 동반자")}
            <br />
            {tr("intro.d2", "실시간 데이터 중심의 AI 업무관리 체계 실현")}
          </>
        }
      />
      <SolutionFetures
        items={mcsFeatures}
        title={
          <>
            {tr("features.title1", "핵심(Core) 업무 솔루션으로")}
            <br />
            {tr("features.title2", "기업 경영관리 AI")}
          </>
        }
      />

      <div className="mcs-modules">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>{tr("modules.title", "N·Core MCS 통합 모듈")}</h3>
            <p>
              {tr(
                "modules.desc",
                "전사적 경영관리를 위한 핵심(Core) 업무 솔루션 도입 및 구축을 통한 실시간 데이터 중심 업무관리 체계",
              )}
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
            <h3>{tr("principles.title", "Connected Enterprise 5대 원칙")}</h3>
            <p>{tr("principles.desc", "실시간 데이터 중심의 AI 업무관리 체계 실현")}</p>
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
            <strong>{tr("principles.spineTitle", "실시간 데이터 중심의 AI 업무관리 체계")}</strong>
            <span>{tr("principles.spineDesc", "입력, 연결, 공유, 집계, 보고까지 하나의 데이터 흐름으로 관리")}</span>
          </div>
        </div>
      </div>

      <div className="mcs-ai-areas">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>{tr("aiAreas.title", "AI 기반 경영·물류 관리")}</h3>
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
            {tr("effect.title1", "데이터 기반 AI 경영으로")}
            <br />
            {tr("effect.title2", "실현하는 스마트 제조 경영")}
          </>
        }
        desc={tr("effect.desc", "MES·FA·HR·PMS 통합과 AI 내부회계로 기업 경영 경쟁력을 강화합니다.")}
        items={mcsEffects}
      />
      <SolutionNoticeCards />
    </div>
  );
}
