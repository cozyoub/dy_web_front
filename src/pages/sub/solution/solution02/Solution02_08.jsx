import SolutionCard from "@/components/sub/SolutionCard";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const femsCard = [
  {
    number: 1,
    title: "출력제어",
    imgSrc: "/images/sub/fems_sceen01.jpg",
    bullets: [],
  },
  {
    number: 2,
    title: "원격제어",
    imgSrc: "/images/sub/fems_sceen02.jpg",
    bullets: [],
  },
  {
    number: 3,
    title: "계통도",
    imgSrc: "/images/sub/fems_sceen03.jpg",
    bullets: [],
  },
  {
    number: 4,
    title: "채널상태",
    imgSrc: "/images/sub/fems_sceen04.jpg",
    bullets: [],
  },
  {
    number: 5,
    title: "트렌드 분석",
    imgSrc: "/images/sub/fems_sceen05.jpg",
    bullets: [],
  },
  {
    number: 6,
    title: "알람 및 제어이력",
    imgSrc: "/images/sub/fems_sceen06.jpg",
    bullets: [],
  },
  {
    number: 7,
    title: "모니터링",
    imgSrc: "/images/sub/fems_sceen07.jpg",
    bullets: [],
  },
  {
    number: 8,
    title: "순시트렌드",
    imgSrc: "/images/sub/fems_sceen08.jpg",
    bullets: [],
  },
];

const femsFeatures = [
  "Off-Grid PV 인버터 출력 제어 기반 전력 운영 최적화",
  "기간계 연동을 통한 원단위 비용·생산 데이터 기반 분석",
  "전력계통 및 설비 상태의 실시간 통합 모니터링",
  "발전·소비·부하 데이터 기반 예측 및 에너지 운영 최적화",
  "PLC 및 ICS 연동을 통한 이중 제어 및 안정적 설비 운영"
];

export default function Solution02_08() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-08.jpg"
          label="FEMS"
          description={
            <>
              단순 모니터링을 넘어 PV 인버터(On/Off Grid) 출력까지
              <br /> 직접 제어하는 전력 운영 솔루션
            </>
          }
        />
        <SolutionFetures items={femsFeatures} title={<>실시간 전력 제어로 완성하는 <br/>에너지 최적화 시스템</>}/>
        <div className="solution-diagram-full">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>FEMS 주요 업무 프로세스</h3>
             
            </div>
            <div className="diagram-img">
              <img src="/images/sub/fems_flow.jpg" alt="fmes_flow 다이어그램" />
            </div>
          </div>
        </div>
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>FEMS 주요 화면 및 기능</h3>
              <p>
                기간계 연동을 통해 전력 데이터를 분석하고 원단위 기준 수립 및 ESG 경영 대응을 지원하는 FEMS의 주요
                화면과 기능을 소개합니다.
              </p>
            </div>
            <div className="feature-grid">
              {femsCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
