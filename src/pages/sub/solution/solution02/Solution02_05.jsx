import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionCard from "@/components/sub/SolutionCard";

const tmsFeatures = [
  "GPS 기반 명환학 운송거리 및 경로, 예상 시간 도출 가능",
  "SA,GA 알고리즘 기반 경로 최적화 AI Agent 기능 실증 및 포함",
  "다양한 인터페이스 및 시스템별 고도화 지원 가능",
  "증빙서류를 앱을 통해 없애 무정차 물류 시스템 구축의 근간 마련",
  "입차호출시 다양한 업무 기준에 따라 호출이 가능하여 효율적인 업무 구성",
];

const tmsCard = [
  {
    number: 1,
    title: "AI 기반 및 알고리즘 기반 경로최적화",
    imgSrc: "/images/sub/tms_screen01.jpg",
    bullets: [
      "AI 기반 자동차량 배차",
      "차량인식 입출고 관리",
      "차량위치(GPS)",
      "자동계근 등 통합 물류 관리 실현(물류 Cost 절감, 대기시간 단축",
    ],
  },
  {
    number: 2,
    title: "계근시스템 고도화",
    imgSrc: "/images/sub/tms_screen02.jpg",
    bullets: [
      "계근시스템 PLC 고도화 및 상태 모니터링",
      "차량 OCR 및 센서등 계근시스템 관제(IMS)",
    ],
  },
  {
    number: 3,
    title: "계근시스템 PLC 고도화",
    imgSrc: "/images/sub/tms_screen03.jpg",
    bullets: [],
  },
  {
    number: 4,
    title: "종합관제 입차호출",
    imgSrc: "/images/sub/tms_screen04.jpg",
    bullets: [],
  },
  {
    number: 5,
    title: "영상시스템 연계",
    imgSrc: "/images/sub/tms_screen05.jpg",
    bullets: [],
  },
];

export default function Solution02_05() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-05.jpg"
          label="TMS"
          description={
            <>
              GPS·IoT 기반으로 실시간 물류를 통합 관리하고 무인계근시스템(WSS)과
              연계하여 <br />
              물류 관제 및 제어를 지원하는 스마트 물류 시스템
            </>
          }
        />
        <SolutionFetures
          items={tmsFeatures}
          title="스마트 물류 시스템의 핵심 기능"
        />
        <div className="tms-diagram-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>TMS 시스템 구성도</h3>
              <p>
               실시간 물류 데이터와 다양한 시스템을 연계한 TMS 통합 구성도입니다.
              </p>
            </div>
            <div className="diagram-img">
              <img src="/images/sub/tms_diagram.svg" alt="TMS 다이어그램" />
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
            <div className="feature-grid gr-3fr">
              {tmsCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
