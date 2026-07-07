import SolutionCard from "@/components/sub/SolutionCard";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionIntro from "@/components/sub/SolutionIntro";

const eshEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "사업장 필수 법규 통합 대응",
    desc: [
      "중대재해처벌법 및 산업안전보건법 등, 복잡하고 다양한 화학,환경,에너지등 분야별 법령 준수까지!",
      "기업의 모든 법적 리스크를 빈틈없이 차단하는 통합 방어체계시스템 제공",
    ],
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "정교한 보고서 제공",
    desc: [
      "중대재해처벌법 규제대응 현황",
      "안전보건 현황 공시 보고",
      "ESG 보고서 (환경 및 에너지, 안전지표 자동 작성)",
    ],
  },
  {
    icon: "/images/sub/ico_effect05.svg",
    title: "스마트안전관리 시스템 구축",
    desc: [
      "스마트 웨어러블 측정",
      "지능형 영상분석",
      "환경 및 가스감지",
      "위치기반 측위 센서",
    ],
  },
];

const eshCard = [
  {
    number: 1,
    title: "경영정보",
    imgSrc: "/images/sub/esh_screen01.jpg",
    bullets: [
    ]
  },
  {
    number: 2,
    title: "안전관리",
    imgSrc: "/images/sub/esh_screen02.jpg",
    bullets: [
     
    ],
  },
  {
    number: 3,
    title: "보건관리 구성도",
    imgSrc: "/images/sub/esh_screen03.jpg",
    bullets: [],
  },
  {
    number: 4,
    title: "환경관리 구성도",
    imgSrc: "/images/sub/esh_screen04.jpg",
    bullets: [],
  },
];

export default function Solution02_06() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-06.jpg"
          label="ESH"
          description={
            <>
              전방위적 ESH 규제대응부터 안전보건공시까지.
              <br />
              ESG 가치를 증명하는 지능형 AX기반 환경안전경영 시스템
            </>
          }
        />
        <div className="solution-diagram-full">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>ESH 목표시스템 구성도</h3>
              <p>지능형 AX 기반 ESH 목표시스템 구성도입니다.</p>
            </div>
            <div className="diagram-img">
              <img src="/images/sub/esh-flow.jpg" alt="TMS 다이어그램" />
            </div>
          </div>
        </div>
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>TMS 주요 화면 및 기능</h3>
              <p>
                AI 기반 경로 최적화와 실시간 운송 관리를 지원하는 TMS의 핵심
                화면과 주요 기능을 통해 효율적인 물류 운영 환경을 제공합니다.
              </p>
            </div>
            <div className="feature-grid gr-2fr">
              {eshCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
        <SolutionEffect
          title={
            <>
              안전하고 지속가능한 <br />
              사업장을 위한 ESH
            </>
          }
          desc="법규 준수부터 스마트 안전관리, ESG 보고까지 사업장 운영에 필요한 ESH 환경을 통합 지원합니다."
          items={eshEffects}
        />
      </div>
    </>
  );
}
