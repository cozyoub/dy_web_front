import SolutionCard from "@/components/sub/SolutionCard";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution02_06";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

export default function Solution02_06() {
  const tr = useTr(en);

  const eshEffects = [
    {
      icon: "/images/sub/ico_effect01.svg",
      title: tr("effect.items.0.title", "사업장 필수 법규 통합 대응"),
      desc: trArr(tr, "effect.items.0.desc", [
        "중대재해처벌법 및 산업안전보건법 등, 복잡하고 다양한 화학,환경,에너지등 분야별 법령 준수까지!",
        "기업의 모든 법적 리스크를 빈틈없이 차단하는 통합 방어체계시스템 제공",
      ]),
    },
    {
      icon: "/images/sub/ico_effect02.svg",
      title: tr("effect.items.1.title", "정교한 보고서 제공"),
      desc: trArr(tr, "effect.items.1.desc", [
        "중대재해처벌법 규제대응 현황",
        "안전보건 현황 공시 보고",
        "ESG 보고서 (환경 및 에너지, 안전지표 자동 작성)",
      ]),
    },
    {
      icon: "/images/sub/ico_effect05.svg",
      title: tr("effect.items.2.title", "스마트안전관리 시스템 구축"),
      desc: trArr(tr, "effect.items.2.desc", [
        "스마트 웨어러블 측정",
        "지능형 영상분석",
        "환경 및 가스감지",
        "위치기반 측위 센서",
      ]),
    },
  ];

  const eshCard = [
    { number: 1, title: tr("card.items.0.title", "경영정보"), imgSrc: "/images/sub/esh_screen01.jpg", bullets: [] },
    { number: 2, title: tr("card.items.1.title", "안전관리"), imgSrc: "/images/sub/esh_screen02.jpg", bullets: [] },
    { number: 3, title: tr("card.items.2.title", "보건관리 구성도"), imgSrc: "/images/sub/esh_screen03.jpg", bullets: [] },
    { number: 4, title: tr("card.items.3.title", "환경관리 구성도"), imgSrc: "/images/sub/esh_screen04.jpg", bullets: [] },
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-06.jpg"
          label={tr("intro.label", "ESH")}
          description={
            <>
              {tr("intro.d1", "전방위적 ESH 규제대응부터 안전보건공시까지.")}
              <br />
              {tr("intro.d2", "ESG 가치를 증명하는 지능형 AX기반 환경안전경영 시스템")}
            </>
          }
        />
        <div className="solution-diagram-full">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("diagram.title", "ESH 목표시스템 구성도")}</h3>
              <p>{tr("diagram.desc", "지능형 AX 기반 ESH 목표시스템 구성도입니다.")}</p>
            </div>
            <div className="diagram-img">
              <img src="/images/sub/esh-flow.jpg" alt={tr("diagram.alt", "ESH 다이어그램")} />
            </div>
          </div>
        </div>
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("card.title", "ESH 주요 화면 및 기능")}</h3>
              <p>{tr("card.desc", "ESH 법규 준수와 안전관리를 지원하는 주요 화면과 기능입니다.")}</p>
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
              {tr("effect.title1", "안전하고 지속가능한")} <br />
              {tr("effect.title2", "사업장을 위한 ESH")}
            </>
          }
          desc={tr(
            "effect.desc",
            "법규 준수부터 스마트 안전관리, ESG 보고까지 사업장 운영에 필요한 ESH 환경을 통합 지원합니다.",
          )}
          items={eshEffects}
        />
        <SolutionNoticeCards />
      </div>
    </>
  );
}
