import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionMokup from "@/components/sub/SolutionMokup";

const rsFeatures = [
  "다양한 렌탈 비즈니스 환경에 유연하게 대응할 수 있는 최적화된 통합 업무 환경 제공",
  "고객 만족도 향상을 위한 효율적이고 편리한 렌탈 관리 기능 제공",
  "표준화된 인터페이스를 기반으로 다양한 시스템과의 유연한 연계 지원",
  "가전제품, 소비재, 건설장비, 헬스케어, 의료기기 등 다양한 상품군의 렌탈 서비스 운영 지원",
];

const rsMokups = [
  {
    title: "렌탈 비즈니스 관리",
    desc: (
      <>
        <ul>
          <li>기준정보(상품, 계약유형, 월렌탈료, 수수료)</li>
          <li>주문/해피콜/전자계약/신용조회/배송/설치</li>
          <li>영업채널관리(본사/영업그룹/지사/지점/대리점)</li>
          <li>AS, 정기점검, 계약서 관리</li>
          <li>접수부터 사후관리까지 체계적인 시스템</li>
          <li>체계적인 서비스 조직 관리(설치처/배송처/AS지점)</li>
        </ul>
      </>
    ),
    imgSrc: "/images/sub/rs_mokup01.jpg",
  },
  {
    title: "대외 연계 & 수납",
    desc: (
      <>
        정기점검·AS 업무 관리부터 전자계약서로 빠른 계약체결, 설치기사·A/S기사 전용 모바일 업무까지 지원합니다.
      </>
    ),
    imgSrc: "/images/sub/rs_mokup02.jpg",
  },
  {
    title: "고객 서비스",
    desc: (
      <>
        CMS계좌·신용카드·가상계좌 자동이체, 현금영수증·세금계산서 발행, 실시간·월정기 수납관리부터 미수관리·채권관리까지 통합 지원합니다.
      </>
    ),
    imgSrc: "/images/sub/rs_mokup03.jpg",
  },
   {
    title: "고객 서비스",
    desc: (
      <>
        <ul>
          <li>고객 인입 정보를 분석하여 업무에 필요한 기능을 한 화면에서 바로 처리 가능</li>
          <li>사용자의 역량에 따른 수기 작업 최소화</li>
          <li>다 건의 계약을 한번에 처리하여 후처리 작업 및 효율성 증가</li>
        </ul>
      </>
    ),
  },
];

export default function Solution01_08() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-08.jpg"
          label="RS"
          description={
            <>
              최신 렌탈 비즈니스 트렌드를 적용한
              <br />
              렌탈 기업 전문 솔루션
            </>
          }
        />
        <SolutionFetures items={rsFeatures} title="성공적인 렌탈 비즈니스의 시작"/>
        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>
                접수부터 사후관리까지<br/>체계적인 렌탈시스템
              </h3>
            </div>
            <div className="solution-mokup-items">
              {rsMokups.map(({ title, desc, imgSrc }, index) => (
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
