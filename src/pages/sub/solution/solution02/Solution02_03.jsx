import SolutionFlow from "@/components/sub/SoluitionFlow";
import SolutionCard from "@/components/sub/SolutionCard";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const cmmsFeatures = [
  "설비보전정보 분석을 통해 예방 예지 보전관리 체계 구축",
  "설비,작업,자재,자원등을 관리할 수 있는 체계화된 시스템 제공",
  "모바일을 활용한 실시간 작업 실적처리",
  "도면의 라인맵을 활용하여 가독성 및 편의성 제공",
];

const cmmsfeaturesCard = [
  {
    number: 1,
    title: "사용자 역할 기반 화면 구성",
    imgSrc: "/images/sub/cmms_mokup01.jpg",
    bullets: ["직관적인 UI", "사용자 역할에 맞는 화면 구성"],
  },
  {
    number: 2,
    title: "도면 기반 설비 관리",
    imgSrc: "/images/sub/cmms_mokup02.jpg",
    bullets: ["도면 정보 공유 및 이력 관리", "도면 이미지 마킹 기능 제공"],
  },
  {
    number: 3,
    title: "설비 자재 및 재고 관리",
    imgSrc: "/images/sub/cmms_mokup03.jpg",
    bullets: ["설비 전용 자재 및 재고 관리", "바코드 기반 수불 관리"],
  },
  {
    number: 4,
    title: "모바일 현장 관리",
    imgSrc: "/images/sub/cmms_mokup04.jpg",
    bullets: ["모바일 점검·고장·설비 관리", "바코드·QR코드를 활용한 실적 처리"],
  },
  {
    number: 5,
    title: "라인맵 기반 설비 관리",
    imgSrc: "/images/sub/cmms_mokup05.jpg",
    bullets: ["라인맵을 통한 설비 접근", "작업자 중심의 빠른 업무 처리"],
  },
  {
    number: 6,
    title: "프로젝트 관리",
    imgSrc: "/images/sub/cmms_mokup06.jpg",
    bullets: ["설비 도입 프로젝트 일정 관리", "도입 비용 전표 처리 기능 제공"],
  },
  {
    number: 7,
    title: "예방점검 관리",
    imgSrc: "/images/sub/cmms_mokup07.jpg",
    bullets: ["예방점검 기준에 따른 실적 관리", "점검 기준 및 방법 체계화"],
  },
  {
    number: 8,
    title: "분석 리포트 제공",
    imgSrc: "/images/sub/cmms_mokup08.jpg",
    bullets: [
      "다양한 형태의 분석 그래프",
      "사용자 요구사항을 반영한 리포트 제공",
    ],
  },
  {
    number: 9,
    title: "설비 가동현황 모니터링",
    imgSrc: "/images/sub/cmms_mokup09.jpg",
    bullets: [
      "설비 운영 데이터 실시간 모니터링",
      "현장 데이터 기반 분석 기능 제공",
    ],
  },
];

export default function Solution02_03() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-03.jpg"
          label="CMMS"
          description={
            <>
              설비의 도입부터 운영, 보전, 폐기까지 전 과정을 체계적으로 관리하여{" "}
              <br />
              설비 운영 효율과 생산성을 높이는 설비관리 시스템
            </>
          }
        />
        <SolutionFetures
          items={cmmsFeatures}
          title="설비 운영의 효율을 높이는 CMMS"
        />
        <div className="cmms-step">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>CMMS STEP</h3>
            </div>
            <ul className="st-list">
              <li className="st-itm">
                <span className="label">STEP 01</span>
                <i>
                  <img src="/images/sub/cmms-ico01.svg" alt="" />
                </i>
                <div className="text">
                  <h3>수기업무, 점검관리</h3>
                  <ul>
                    <li>수기 작업 지시 및 작업 실적 보고</li>
                    <li>페이퍼 체크리스트 관리</li>
                    <li>도면 및 관련 문서 수기 공유</li>
                  </ul>
                </div>
              </li>
              <li className="st-itm">
                <span className="label">STEP 02</span>
                <i>
                  <img src="/images/sub/cmms-ico02.svg" alt="" />
                </i>
                <div className="text">
                  <h3>CMMS</h3>
                  <ul>
                    <li>기준 DATA 정비(설비계층)</li>
                    <li>로드맵 기초단계 구축</li>
                    <li>통계 업무 관리로 전환</li>
                    <li>Time-based Management</li>
                  </ul>
                </div>
              </li>
              <li className="st-itm">
                <span className="label">STEP 03</span>
                <i>
                  <img src="/images/sub/cmms-ico03.svg" alt="" />
                </i>
                <div className="text">
                  <h3>IMC</h3>
                  <ul>
                    <li>AI 예지보전 기초단계 구축</li>
                    <li>설비관제 통합 및 모니터링</li>
                    <li>CMMS와 연계 모니터링</li>
                    <li>설비 데이터 관리 기준 확립</li>
                  </ul>
                </div>
              </li>
              <li className="st-itm">
                <span className="label">STEP 04</span>
                <i>
                  <img src="/images/sub/cmms-ico04.svg" alt="" />
                </i>
                <div className="text">
                  <h3>AI&BIG DATA</h3>
                  <ul>
                    <li>빅데이터 센터 구축</li>
                    <li>설비 데이터 누적 및 분석 모델 구축</li>
                    <li>고장, 사고, 불량 예지수명 예측</li>
                    <li>Condition-base Management</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <SolutionFlow
          title="프로그램 주요 업무 프로세스"
          imgSrc="/images/sub/cmms_flow.png"
        />
        
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>스마트 생산을 위한 핵심 기능</h3>
              <p>
                생산, 설비, 자재, 품질, 재고까지 제조 현장의 모든 업무를 하나의
                시스템에서 효율적으로 관리합니다.
              </p>
            </div>
            <div className="feature-grid">
              {cmmsfeaturesCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
