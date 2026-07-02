import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionCard from "@/components/sub/SolutionCard";

const mesFeatues = [
  "설비와 장치를 통신으로 연결하여 통합운영이 가능한 실시간 시스템",
  "실시간으로 생산 데이터를 취득하여 실시간으로 모니터링",
  "제품에 대한 생산이력 및 원부자재에 대한 추적관리 기능 제공",
  "설비 및 계측 장비에 대한 데이터가 집계되어 품질 문제의 원인 파악 및 제품 품질 향상",
  "실시간 공장 현황 파악 및 예측 가능",
];

const mesfeaturesCard = [
  {
    number: 1,
    title: "생산현장 실시간 모니터링",
    imgSrc: "/images/sub/mes_mokup01.jpg",
    bullets: ["설비 비가동 알림", "생산 진행정보"],
  },
  {
    number: 2,
    title: "모바일 관리 기능 제공",
    imgSrc: "/images/sub/mes_mokup02.png",
    bullets: ["자재입고처리, 수입검사, 재고실사 기능 제공"],
  },
  {
    number: 3,
    title: "계획관리 기능 제공",
    imgSrc: "/images/sub/mes_mokup03.jpg",
    bullets: ["계획대비 실적관리 기능 제공 (영업,생산,자재)"],
  },
  {
    number: 4,
    title: "경영자 정보 제공",
    imgSrc: "/images/sub/mes_mokup04.jpg",
    bullets: [
      "실시간 의사결정을 위한 영업, 생산, 품질정보등의 자료 실시간 제공",
    ],
  },
  {
    number: 5,
    title: "생산현장 실적 처리",
    imgSrc: "/images/sub/mes_mokup05.jpg",
    bullets: [],
  },
  {
    number: 6,
    title: "LOT 추적 기능 제공",
    imgSrc: "/images/sub/mes_mokup06.jpg",
    bullets: [],
  },
  {
    number: 7,
    title: "설비가동률 분석",
    imgSrc: "/images/sub/mes_mokup07.jpg",
    bullets: [],
  },
  {
    number: 8,
    title: "기준일자 재고관리",
    imgSrc: "/images/sub/mes_mokup08.jpg",
    bullets: [],
  },
];

export default function Solution02_01() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-01.jpg"
          label="MES"
          description={
            <>
              ICT 기반의 지능화 생산체계를 통해
              <br />
              스마트공장 구축을 위한 최적의 솔루션
            </>
          }
        />
        <SolutionFetures
          items={mesFeatues}
          title="생산 현장을 데이터로 연결하다"
        />
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>스마트 생산을 위한 핵심 기능</h3>
              <p>생산, 설비, 자재, 품질, 재고까지 제조 현장의 모든 업무를 하나의 시스템에서 효율적으로 관리합니다.</p>
            </div>
            <div className="feature-grid">
              {mesfeaturesCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}