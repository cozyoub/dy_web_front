import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const ecmmsFeatures = [
  "TBM뿐만 아니라 CBM 기준의 설비보전 계획 수립",
  "통합설비관제시스템(ICS)과 연동한 실시간 설비 데이터 수집",
  "AI 모델 기반 이상신호 분석 및 예지보전 알람",
  "디지털 트윈 Lev 2/3 기반 설비 모니터링 및 시뮬레이션 결과 표출",
  "증강현실(AR) 기반 현장 설비 보전 활동 지원",
];

const ecmmsSystemFlow = [
  {
    title: "현장 설비·데이터 소스",
    desc: "NPL, CAL, SLT 라인과 검사장비, 전력계, 환경 센서의 생산·품질·보전 데이터를 수집합니다.",
  },
  {
    title: "ICS 데이터 수집",
    desc: "OPC 서버·클라이언트, 플러그인 모듈, N·Core DA Framework로 설비 데이터를 표준화합니다.",
  },
  {
    title: "Automation Gateway",
    desc: "OPC-UA, MQTT, GraphQL, 데이터 로거를 통해 현장 데이터와 기간계 데이터를 연결합니다.",
  },
  {
    title: "DT·AR 보전 활동",
    desc: "디지털 트윈 2·3단계와 AR 설비보전 활동으로 실시간 모니터링과 보전 결과를 표출합니다.",
  },
];

const ecmmsEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "OEEE 향상",
    desc: "실시간 데이터 기반 보전 활동으로 설비 가동률과 생산 효율을 높입니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "예지보전 체계 구축",
    desc: "AI 모델링 및 학습을 통해 고장을 사전에 예측하고 선제적 보전을 실현합니다.",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "보전 계획 고도화",
    desc: "CBM 기준 설비보전 계획 수립으로 보전 비용과 다운타임을 최소화합니다.",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "현장 보전 효율 향상",
    desc: "AR 기반 보전 활동과 기간계 실적 연동으로 현장 업무 생산성을 향상시킵니다.",
  },
];

export default function Solution03_02() {
  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-02.jpg"
        label="eCMMS"
        description={
          <>
            설비 관리의 고도화, TBM에서 CBM으로의 전환
            <br />
            설비 데이터 활용, 예지보전 AI 모델링 및 학습을 통한 실시간 데이터
            기반 보전 활동 체계 구축 (OEEE 향상)
          </>
        }
      />
      <SolutionFetures
        items={ecmmsFeatures}
        title={
          <>
            TBM에서 CBM으로의 전환,
            <br />
            통합 설비보전 AI
          </>
        }
      />

      <div className="solution-diagram-full">
        <div className="sub-inner">
          <h2 className="sub-title">시스템 구성도</h2>
          <ul className="solution03-summary-grid">
            {ecmmsSystemFlow.map((item) => (
              <li key={item.title} className="solution03-summary-card">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
          <img
            src="/images/sub/solution03-02-diagram-1.png"
            alt="N·Core eCMMS 시스템 구성도"
          />
        </div>
      </div>

      <SolutionEffect
        title={
          <>
            데이터 기반 보전으로 실현하는
            <br />
            스마트 설비보전 AI
          </>
        }
        desc="ICS 연동 데이터와 AI 분석을 통해 예지보전부터 AR 기반 현장 보전까지 통합 관리합니다."
        items={ecmmsEffects}
      />
    </div>
  );
}
