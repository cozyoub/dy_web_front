import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";

const costEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "정확한 원가 산출",
    desc: "다양한 배부 기준 적용을 통해 신뢰도 높은 원가 정보를 제공합니다.",
  },
  {
    icon: "/images/sub/ico_effect03.svg",
    title: "원가 절감 실현",
    desc: "생산원가 분석을 기반으로 지속적인 비용 절감을 지원합니다.",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "신속한 의사결정",
    desc: "생산량 변화에 따른 원가 예측으로 빠른 경영 의사결정을 지원합니다.",
  },
  {
    icon: "/images/sub/ico_effect05.svg",
    title: "경영 투명성 확보",
    desc: "거래처 및 영업팀별 손익 분석을 통해 투명한 경영관리를 실현합니다.",
  },
];

const acFeatures = [
  "제품별 실제 수익성을 정확하게 파악 어려움",
  "공통비 배부 기준이 명확하지 않아 원가 왜곡이 발생",
  "원가 데이터가 분산되어 신속한 분석이 어려움",
  "거래처 및 영업조직별 손익 분석에 많은 시간이 소요",
  "정확한 원가 정보 부재로 데이터 기반 의사결정의 어려움",
];
export default function Solution01_06() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionFetures
          items={acFeatures}
          title={
            <>
              이러한 문제로 원가관리에
              <br />
              어려움을 겪고 계신가요?
            </>
          }
        />
        <div className="ac-visual">
          <div className="img">
            <img src="/images/sub/solution01-06.jpg" alt="" />
          </div>
          <div className="text solution-title">
            <h3>
              N·Core 실제원가 솔루션으로
              <br />
              기업의 숨은 수익을 발견하세요.
            </h3>
          </div>
        </div>
        <SolutionEffect
          title={
            <>
              데이터 기반의 정확한 원가 분석으로
              <br />
              기업의 수익성을 극대화합니다.
            </>
          }
          desc="실제원가 분석부터 손익 관리까지, 체계적인 원가관리 환경을 제공합니다."
          items={costEffects}
        />
      </div>
    </>
  );
}
