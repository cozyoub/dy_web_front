import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionTabDetail from "@/components/sub/SolutionTabDetail";

const icsFeatures = [
  "제조현장 설비 하드웨어부터 기간계 시스템 및 인공지능 소프트웨어까지 One-Stop 서비스 제공",
  "산업 표준 기반 대용량 고속 데이터 수집 및 실시간 설비 관제",
  "AAS(자산관리쉘) 표준화를 통한 데이터·연결·운영 표준 연동",
  "디지털 트윈 Lev 2/3 구축 및 AI 연동 시뮬레이션 디지털 트윈",
  "예지보전·생산·품질 최적화 AI 모델 기반 지능형 설비 제어",
];

const icsSystemFlow = [
  {
    title: "현장 설비 데이터",
    desc: "PLC, HMI, 센서, PC 제어, 파일·MSG 기반 데이터를 산업 표준 방식으로 수집합니다.",
  },
  {
    title: "AAS 표준 모델링",
    desc: "설비 자산과 데이터 속성을 표준화해 통신, 운영, 매핑 정보를 일관되게 관리합니다.",
  },
  {
    title: "ICS 통합 관제",
    desc: "대용량 고속 데이터 수집, CPS·DT 로직제어, N·Core DA Framework를 통해 실시간 관제를 수행합니다.",
  },
  {
    title: "AI·디지털 트윈",
    desc: "예지보전, 생산·품질 최적화, 시뮬레이션 결과를 현장 모니터링과 제어에 반영합니다.",
  },
];

const icsEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "실시간 설비 관제",
    desc: "현장 설비 데이터 수집 기반 관제 및 AI/ML 예지보전·생산·품질 최적화 모델링 구축",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "지능형 설비 제어",
    desc: "AI 분석을 통한 최적 설비운영 파라미터(독립변수) 기반 지능형 설비 제어 실현",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "디지털 트윈 구축",
    desc: "디지털 트윈 Lev 2/3 및 시뮬레이션을 통한 공정 최적화와 예측 운영",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "기간계 통합 연동",
    desc: "ERP·MES·CMMS·TMS 등 설비 데이터가 필요한 다양한 기간계 시스템과 실시간 연동",
  },
];

const icsCategories = [
  {
    label: "철강",
    cases: [
      {
        title: "압연설비 AI 지능형제어",
        imgSrc: "/images/sub/ics-screen02.jpg",
        bullets: [
          "설비관리시스템 임베디드 연동",
          "AI분석을 통한 코일 두께 예측",
          "설비운영 파라미터 데이터 표준화",
        ],
      },
    ],
  },
  {
    label: "자동차부품",
    cases: [
      {
        title: "설비제어 무인 자동화",
        imgSrc: "/images/sub/ics-screen05.jpg",
        bullets: [
          "공정 결과 기반 후공정 설비제어",
          "투입자재 포함 Lot 추적 데이터",
          "실시간 재작업, 최소생산타임",
        ],
      },
    ],
  },
  {
    label: "주조",
    cases: [
      {
        title: "주조기 품질 AI 분석",
        imgSrc: "/images/sub/ics-screen01.jpg",
        bullets: [
          "주조 금형 온도 열화상 카메라 분석",
          "수집 데이터 기반 머신러닝 모델",
          "실시간 품질 예측 데이터 관제",
        ],
      },
    ],
  },
  {
    label: "컬러강판",
    cases: [
      {
        title: "설비관제 및 실적 연동",
        imgSrc: "/images/sub/ics-screen06.jpg",
        bullets: [
          "작업지시 기준 생산실적 자동 연동",
          "설비 파트별 공무팀 관제, 알람",
          "설비종합 효율 분석",
        ],
      },
    ],
  },
  {
    label: "화학",
    cases: [
      {
        title: "생산공정 품질 관리",
        imgSrc: "/images/sub/ics-screen08.jpg",
        bullets: [
          "원격 품질 관리데이터 분석",
          "원격 설비 제어 (배관, 펌프, 밸브)",
          "환경안전 경보 알람 시스템 연동",
        ],
      },
    ],
  },
  {
    label: "필름",
    cases: [
      {
        title: "생산 제어 관제",
        imgSrc: "/images/sub/ics-screen09.jpg",
        bullets: [
          "기간계 자동실적 체계 구축",
          "중요 품질 데이터 관리 분석",
          "조건별 설비 제어",
        ],
      },
    ],
  },
  {
    label: "물류",
    cases: [
      {
        title: "계근대 통합 관제",
        imgSrc: "/images/sub/ics-screen10.jpg",
        bullets: [
          "운송관리 시스템 통합 연동",
          "PLC기반 계근 시스템 구축",
          "국내외 공장 통합 원격 관제 구축",
        ],
      },
    ],
  },
  {
    label: "열처리",
    cases: [
      {
        title: "품질 관리 및 알람",
        imgSrc: "/images/sub/ics-screen11.jpg",
        bullets: [
          "사용자 설정 기반 알람 시스템 구축",
          "작업지시별 생산 현황 관제",
          "품질이슈 발생 사항 사전 방지",
        ],
      },
    ],
  },
  {
    label: "유틸리티",
    cases: [
      {
        title: "수처리 설비 제어",
        imgSrc: "/images/sub/ics-screen12.jpg",
        bullets: [
          "구형 모자이크 판넬 현대화",
          "펌프, 계도밸브 원격지 제어 및 운영",
          "유틸리티 설비 제어 관제",
        ],
      },
    ],
  },
];

const icsCaseFlows = [
  {
    title: "AAS·AI·Digital Twin",
    desc: "현장 설비와 데이터 소스를 AAS로 모델링하고, AI 분석 결과를 디지털 트윈 시뮬레이션에 적용합니다.",
  },
  {
    title: "기간계 시스템 연동",
    desc: "MES, ERP, CMMS, ICS 데이터를 통합해 웹 기반 자율 제조 플랫폼과 설비 관제 화면으로 연결합니다.",
  },
];

export default function Solution03_01() {
  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-01.jpg"
        label="ICS"
        description={
          <>
            Factory AI를 위한 기초 BASE 구축
            <br />
            현장 실시간 데이터 기반 지능형 설비 제어 및 디지털 트윈 구축
          </>
        }
      />
      <SolutionFetures
        items={icsFeatures}
        title={
          <>
            AI와 디지털트윈으로 완성하는
            <br />
            통합 설비관제 AI
          </>
        }
      />

      <div className="solution-diagram-full">
        <div className="sub-inner">
          <h2 className="sub-title">시스템 구성도</h2>
          <ul className="solution03-summary-grid">
            {icsSystemFlow.map((item) => (
              <li key={item.title} className="solution03-summary-card">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
          <img
            src="/images/sub/solution03-01-diagram-1.png"
            alt="N·Core ICS 시스템 구성도"
          />
        </div>
      </div>

      <div>
        <div className="sub-inner">
          <div className="solution-title">
            <h3>업종별 N·Core ICS AI 적용 사례</h3>
            <p>
              철강, 자동차부품, 화학, 물류 등 다양한 산업 현장에 디지털트윈과
              AI 기반 설비제어를 실제로 적용한 사례
            </p>
          </div>
          <SolutionTabDetail categories={icsCategories} />
        </div>
      </div>

      <div className="solution-diagram-full">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>AAS, AI, Digital Twin 적용사례 1</h3>
            <p>니켈 도금라인 디지털 트윈: 공정 최적화 AI 모델 및 지능제어</p>
          </div>
          <ul className="solution03-summary-grid solution03-summary-grid--2">
            {icsCaseFlows.map((item) => (
              <li key={item.title} className="solution03-summary-card">
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
          <img
            src="/images/sub/solution03-01-diagram-2.png"
            alt="AAS AI Digital Twin 적용사례 1"
          />
        </div>
      </div>

      <div className="solution-diagram-full">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>기간계 시스템연동 적용사례 2</h3>
            <p>
              통합 공장가동현황 종합지표 관리 시스템: 실시간 통합 공장현황
            </p>
          </div>
          <img
            src="/images/sub/solution03-01-diagram-3.png"
            alt="기간계 시스템연동 적용사례 2"
          />
        </div>
      </div>

      <SolutionEffect
        title="솔루션 도입 기대효과"
        desc="실시간 설비 데이터 수집부터 AI 모델링·지능형 제어까지 Factory AI의 기초 BASE를 구축합니다."
        items={icsEffects}
      />
    </div>
  );
}
