import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const aiFeatures = [
  "AI 기반 생산 계획 자동화 및 생산 공정 최적화 (생산종합효율)",
  "MES·ERP·CMMS·ICS 기간계 시스템 연동 웹 기반 통합 자율 제조 플랫폼",
  "NPL 라인 디지털 트윈 DTw 3Lev 시뮬레이션 및 설비 관제",
  "AAS 자산관리쉘 기반 PLC·Tag 매핑 중앙관리·배포·검증",
  "Coil-No 추적 기반 Lot 관리, 오출하 방지 및 클레임 관리",
];

const aiEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "생산종합효율 향상",
    desc: "생산 계획 자동화와 공정 최적화로 생산성과 품질을 동시에 향상시킵니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "공정 최적화",
    desc: "시뮬레이션 AI 모델로 공정변수를 분석하여 최적의 설비 운영 파라미터를 도출합니다.",
  },
  {
    icon: "/images/sub/ico_effect03.svg",
    title: "품질 고도화",
    desc: "실시간 데이터 기반 품질 예측과 Lot 추적으로 불량을 사전에 방지합니다.",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "기간계 연동 자동화",
    desc: "MES·ERP·CMMS·ICS와 연동하여 작업지시·실적·보전 데이터를 자동으로 동기화합니다.",
  },
];

export default function Solution03_03() {
  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-03.jpg"
        label="AI"
        description={
          <>
            생산성 향상과 품질 고도화를 위한 최적화 솔루션
            <br />
            AI 기반 생산 계획 자동화 및 생산 공정 최적화 (생산종합효율)
          </>
        }
      />
      <SolutionFetures
        items={aiFeatures}
        title={
          <>
            데이터와 AI로 완성하는
            <br />
            생산공정 최적화 AI
          </>
        }
      />

      <div className="solution-diagram-full">
        <div className="sub-inner">
          <h2 className="sub-title">시스템 구성도</h2>
          <img
            src="/images/sub/solution03-03-diagram-ai.png"
            alt="N·Core AI 시스템 구성도"
          />
        </div>
      </div>

      <SolutionEffect
        title="솔루션 도입 기대효과"
        desc="시뮬레이션 AI와 디지털 트윈을 기반으로 생산 현장의 자율 제조를 실현합니다."
        items={aiEffects}
      />
    </div>
  );
}
