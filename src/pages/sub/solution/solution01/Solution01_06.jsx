import SolutionFlow from "@/components/sub/SoluitionFlow";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_06";

export default function Solution01_06() {
  const tr = useTr(en);

  const costEffects = [
    {
      icon: "/images/sub/ico_effect01.svg",
      title: tr("effect.items.0.title", "정확한 원가 산출"),
      desc: tr("effect.items.0.desc", "다양한 배부 기준 적용을 통해 신뢰도 높은 원가 정보를 제공합니다."),
    },
    {
      icon: "/images/sub/ico_effect03.svg",
      title: tr("effect.items.1.title", "원가 절감 실현"),
      desc: tr("effect.items.1.desc", "생산원가 분석을 기반으로 지속적인 비용 절감을 지원합니다."),
    },
    {
      icon: "/images/sub/ico_effect04.svg",
      title: tr("effect.items.2.title", "신속한 의사결정"),
      desc: tr("effect.items.2.desc", "생산량 변화에 따른 원가 예측으로 빠른 경영 의사결정을 지원합니다."),
    },
    {
      icon: "/images/sub/ico_effect05.svg",
      title: tr("effect.items.3.title", "경영 투명성 확보"),
      desc: tr("effect.items.3.desc", "거래처 및 영업팀별 손익 분석을 통해 투명한 경영관리를 실현합니다."),
    },
  ];

  const acFeatures = [
    tr("features.items.0", "제품별 실제 수익성을 정확하게 파악 어려움"),
    tr("features.items.1", "공통비 배부 기준이 명확하지 않아 원가 왜곡이 발생"),
    tr("features.items.2", "원가 데이터가 분산되어 신속한 분석이 어려움"),
    tr("features.items.3", "거래처 및 영업조직별 손익 분석에 많은 시간이 소요"),
    tr("features.items.4", "정확한 원가 정보 부재로 데이터 기반 의사결정의 어려움"),
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionFetures
          items={acFeatures}
          title={
            <>
              {tr("features.title1", "이러한 문제로 원가관리에")}
              <br />
              {tr("features.title2", "어려움을 겪고 계신가요?")}
            </>
          }
        />
        <div className="ac-visual">
          <div className="img">
            <img src="/images/sub/solution01-06.jpg" alt="" />
          </div>
          <div className="text solution-title">
            <h3>
              {tr("visual.title1", "N·Core 실제원가 솔루션으로")}
              <br />
              {tr("visual.title2", "기업의 숨은 수익을 발견하세요.")}
            </h3>
          </div>
        </div>
        <SolutionEffect
          title={
            <>
              {tr("effect.title1", "데이터 기반의 정확한 원가 분석으로")}
              <br />
              {tr("effect.title2", "기업의 수익성을 극대화합니다.")}
            </>
          }
          desc={tr("effect.desc", "실제원가 분석부터 손익 관리까지, 체계적인 원가관리 환경을 제공합니다.")}
          items={costEffects}
        />
        <SolutionFlow title={tr("flow.title", "사용자 업무 흐름도")} imgSrc="/images/sub/ac_flow.svg" />
        <SolutionNoticeCards />
      </div>
    </>
  );
}
