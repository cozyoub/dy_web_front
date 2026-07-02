import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionMokup from "@/components/sub/SolutionMokup";

const faReatures = [
  "업무 표준화를 통한 전표 처리 간소화 및 체계적인 채권·채무 관리",
  "레거시 시스템, 금융 CMS, 전자세금계산서 등 타 시스템과의 연동을 통한 데이터 신뢰성 확보",
  "업무 효율성 향상을 위한 다양한 보조 기능 및 맞춤형 커스터마이징 제공",
  "효율적인 자금 운영을 위한 자금 계획·예산 통제 기능 제공",
];

const faMokups = [
  {
    title: "결재 진행 상태 실시간 확인",
    desc: (
      <>
        전자결재 및 증빙자료의 처리 현황을 실시간으로 조회할 수 있는 기능을 제공합니다.
      </>
    ),
    imgSrc: "/images/sub/fa_mokup01.svg",
  },
  {
    title: "손익계산서의 다양한 기능 제공",
    desc: (
      <>
        손익계산서의 월별·분기별·연도별 비교 분석 및 보조부·전표 발생 자료 연계 조회 기능 제공합니다.
      </>
    ),
    imgSrc: "/images/sub/fa_mokup02.svg",
  },
  {
    title: "CMS 연계 시스템 제공",
    desc: (
      <>
        법인카드, 전자어음, 당좌·예적금 등 다양한(우리,기업,신한,국민,농협) CMS 시스템 도입과 전자결재 연계를 통한 무증빙·무전표 업무 환경이 가능해집니다.
      </>
    ),
    imgSrc: "/images/sub/fa_mokup03.svg",
  },
];

export default function Solution01_03() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-03.jpg"
          label="FA"
          description={
            <>
              최신 IT기술이 적용된 스마트 재무회계 시스템
              <br />
              다양한 커스터마이징을 제공하는 기업 특화 재무회계 솔루션
            </>
          }
        />
        <SolutionFetures items={faReatures} title ={
          <>
            재무 데이터를 더 정확하고 스마트하게
          </>
        }/>
        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>N·Core 재무회계는 무엇이 다를까요?</h3>
            </div>
            <div className="solution-mokup-items">
              {faMokups.map(({ title, desc, imgSrc }, index) => (
                <SolutionMokup
                  key={index}
                  title={title}
                  desc={desc}
                  imgSrc={imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
