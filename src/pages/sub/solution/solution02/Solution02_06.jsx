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
      "ESG 보고서 (환경 및 에너지, 안전지표 자동 작성)"
    ],
  },
   {
    icon: "/images/sub/ico_effect05.svg",
    title: "스마트안전관리 시스템 구축",
    desc: [
     "스마트 웨어러블 측정",
     "지능형 영상분석",
     "환경 및 가스감지",
     "위치기반 측위 센서"
    ],
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
        <SolutionEffect
          title={<>안전하고 지속가능한 <br/>사업장을 위한 ESH</>}
          desc="법규 준수부터 스마트 안전관리, ESG 보고까지 사업장 운영에 필요한 ESH 환경을 통합 지원합니다."
          items={eshEffects}
        />
      </div>
    </>
  );
}
