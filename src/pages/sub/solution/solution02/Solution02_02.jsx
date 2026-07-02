import SolutionCard from "@/components/sub/SolutionCard";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const apsFeatues = [
  "지속적인 5M관리, 정보갱신과 계획대미 실적 반영",
  "생산일정과 동기화된 자재계획 수립",
  "변경관리에 신속대응을 위한 생산계획 수립",
  "능력제약자원을 활용한 DBR 관리를 통한 스루풋 향상",
  "긴급오더 발생신 최단시간 판별하여 생산계획 재스케쥴링",
];

const apsCard = [
  {
    number: 1,
    title: "스케쥴링 메인화면",
    imgSrc: "/images/sub/aps_mokup01.jpg",
    bullets: [],
  },
  {
    number: 2,
    title: "작업패턴 관리",
    imgSrc: "/images/sub/aps_mokup02.jpg",
    bullets: [],
  },
  {
    number: 3,
    title: "생산계획 정보관리",
    imgSrc: "/images/sub/aps_mokup03.jpg",
    bullets: [],
  },
  {
    number: 4,
    title: "스케쥴링 관리센터",
    imgSrc: "/images/sub/aps_mokup04.jpg",
    bullets: [],
  },
];

export default function Solution02_02() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-02.jpg"
          label="APS"
          description={
            <>
              공장관리의 전반적인 정보를 제공하는 기준이 되는
              <br />
              생산계획 및 스케쥴관리 솔루션
            </>
          }
        />
        <SolutionFetures items={apsFeatues} title="최적의 생산계획을 만드는 핵심 기능"/>
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>APS 주요 화면 및 기능</h3>
              <p>
                실시간 생산계획 관리와 스케줄링 최적화를 지원하는 APS의 주요 화면과 기능을 소개합니다.
              </p>
            </div>
            <div className="feature-grid">
              {apsCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
