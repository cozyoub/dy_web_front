import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const qeyeFeatures = [
  "AI 기반 품질 불량 유형 학습을 통한 자동 품질 결함 분류",
  "NPL·CAL 라인 표면탐상기(SSD) 데이터 추출 미들웨어 및 통합 DB",
  "EfficientNet 기반 지속 학습 (10분 주기)",
  "결함수량/종류·판정결과·코일 등급 기간계 자동 연동",
  "통합 뷰어를 통한 스마트 품질관리 실현 (Q-Cost 절감)",
];

const qeyeSystemBoxes = [
  {
    title: "표면탐상기 설비",
    imageSrc: "/images/sub/solution03-04-inspection-equipment-visual.png",
    imageAlt: "NPL·CAL 라인의 표면탐상기 설비 시각화",
    items: [
      "NPL라인 표면탐상기(SSD)",
      "CAL라인 표면탐상기(SSD)",
      "코일 표면 이미지와 결함 정보 수집",
    ],
  },
  {
    title: "AS-IS 표면탐상기 운영 SW",
    imageSrc: "/images/sub/solution03-04-asis-software-visual.png",
    imageAlt: "기존 표면탐상기 운영 소프트웨어 시각화",
    items: [
      "Parsytec 운영 S/W",
      "주요 결함유형 8가지 모니터링",
      "기간계 시스템 연동 불가 및 오탐지율 이슈",
    ],
  },
  {
    title: "데이터 추출 미들웨어",
    imageSrc: "/images/sub/solution03-04-middleware-visual.png",
    imageAlt: "코일 표면 이미지와 메타파일 추출 미들웨어 시각화",
    items: [
      "10분 주기 코일표면 이미지와 메타파일 추출",
      "DB Scheme, IMG 저장, 메타파일 분석",
      "AI 분석을 위한 IMG 전처리",
    ],
  },
  {
    title: "AI 모듈·통합 DB",
    imageSrc: "/images/sub/solution03-04-ai-module-visual.png",
    imageAlt: "GPU 서버 기반 AI 분석 모듈과 통합 DB 시각화",
    items: [
      "GPU 서버 기반 지속 학습",
      "ResNet50, EfficientNet 모델 활용",
      "결함 유형과 판정 결과 통합 관리",
    ],
  },
  {
    title: "TO-BE SSD 운영",
    imageSrc: "/images/sub/solution03-04-tobe-ssd-visual.png",
    imageAlt: "TO-BE SSD 통합 운영 화면 시각화",
    items: [
      "운영 SW를 통한 통합 뷰어 제공",
      "결함수량·종류와 판정결과 자동 관리",
      "코일 등급 기간계 연동",
    ],
  },
  {
    title: "통합 데이터베이스",
    imageSrc: "/images/sub/solution03-04-database-visual.png",
    imageAlt: "기간계와 연동되는 통합 데이터베이스 시각화",
    items: [
      "신규 Scheme 체계 구성",
      "신규 메타정보 생성",
      "기간계 데이터베이스와 연동",
    ],
  },
];

const qeyeEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "Q-Cost 절감",
    desc: "AI 기반 자동 결함 분류로 품질 비용을 절감하고 스마트 품질관리를 실현합니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "AS-IS → TO-BE 전환",
    desc: "모니터링 전용 표면탐상기 운영에서 기간계 연동 TO-BE SSD 운영 체계로 고도화합니다.",
  },
  {
    icon: "/images/sub/ico_effect03.svg",
    title: "오탐지율 개선",
    desc: "EfficientNet 지속 학습으로 현업 상황에 맞는 정확한 결함 분류를 제공합니다.",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "통합 품질 데이터 관리",
    desc: "코일표면 이미지·메타파일을 통합 DB로 관리하고 GPU 서버 AI 모듈과 연동합니다.",
  },
];

export default function Solution03_04() {
  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-04.jpg"
        label="Qeye"
        description={
          <>
            이미지 학습 기반의 부적합 분류 및 통합 뷰어 솔루션
            <br />
            AI 기반 품질 불량 유형 학습을 통한 스마트 품질관리 실현 (Q-Cost 절감)
          </>
        }
      />
      <SolutionFetures
        items={qeyeFeatures}
        title={
          <>
            AI-Vision으로 실현하는
            <br />
            통합 품질관리 AI
          </>
        }
      />

      <div className="solution-diagram-full">
        <div className="sub-inner">
          <h2 className="sub-title">시스템 구성도</h2>
          <div className="qeye-line-shot" aria-label="NPL·CAL 라인 표면탐상기 위치 시안">
            <img
              src="/images/sub/solution03-04-diagram-1.png"
              alt="NPL·CAL 라인 표면탐상기 위치 시안"
            />
          </div>
          <ul className="qeye-system-grid">
            {qeyeSystemBoxes.map((box) => (
              <li key={box.title} className="qeye-system-card">
                <div className="qeye-system-visual">
                  <img src={box.imageSrc} alt={box.imageAlt} />
                </div>
                <h4>{box.title}</h4>
                <ul>
                  {box.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SolutionEffect
        title="솔루션 도입 기대효과"
        desc="표면탐상기 데이터를 AI로 분석하여 품질관리 체계를 통합하고 Q-Cost를 절감합니다."
        items={qeyeEffects}
      />
    </div>
  );
}
