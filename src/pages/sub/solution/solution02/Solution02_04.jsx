import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionTabDetail from "@/components/sub/SolutionTabDetail";

const icsFeatures = [
  "제조현장 설비 하드웨어 부터 기간계 시스템 및 인공지능 소프트웨어까지 One-Stop 서비스 제공 가능",
  "산업군에서 사용하는 표준 데이터 수집/제어 플랫폼 적용",
  "실시간 데이터 기반의 디지털트윈 구축 및 AI와 연동한 시뮬레이션 디지털트윈 구축",
  "일반적 설비 원격제어 및 공정(생산,품질)최적화 AI와 연동한 지능형 설비 제어 운용",
  "데이터,연결,운영 표준에 의거한 AAS(자산관리쉘) 연동",
];
// data/icsCategories.js
export const icsCategories = [
  {
    label: "철강",
    cases: [
      {
        title: "디지털 트윈 시뮬레이션",
        imgSrc: "/images/sub/ics-screen01.jpg",
        bullets: [
          "Level3 디지털트윈",
          "공정최적화 AI 연동 시뮬레이션",
          "통합 설비관제/지능형 제어",
        ],
      },
      {
        title: "압연설비 AI 지능형제어",
        imgSrc: "/images/sub/ics-screen02.jpg",
        bullets: [
          "설비관리시스템 임베디드 연동",
          "AI분석을 통한 코일 두께 예측",
          "설비운영 파라미터 데이터 표준화",
        ],
      },
    ],
  },
  {
    label: "자동차부품",
    cases: [
      {
        title: "디지털트윈",
        imgSrc: "/images/sub/ics-screen03.jpg",
        bullets: [
          "Tool 사용이력 관리",
          "생산현황, 설비상태 관제",
          "기간계 작업지시 및 실적 연동",
        ],
      },
      {
        title: "공장 디지털 트윈",
        imgSrc: "/images/sub/ics-screen04.jpg",
        bullets: [
          "Wide-Plat단위의 디지털트윈",
          "AMR등 물류이동",
          "단계별 상세설비 디지털트윈",
        ],
      },
      {
        title: "제어 무인 자동화",
        imgSrc: "/images/sub/ics-screen05.jpg",
        bullets: [
          "공정 결과 기반 후공정 설비제어",
          "투입자재 포함 Lot 추적 데이터",
          "실시간 재작업, 최소생산타임",
        ],
      },
    ],
  },
  {
    label: "컬러강판",
    cases: [
      {
        title: "기간계 실적연동",
        imgSrc: "/images/sub/ics-screen06.jpg",
        bullets: [
          "작업지시 기준 생산실적 자동 연동",
          "설비 파트별 공무팀 관제, 알람",
          "설비종합 효율 분석",
        ],
      },
    ],
  },
  {
    label: "공공",
    cases: [
      {
        title: "차집시설 제어",
        imgSrc: "/images/sub/ics-screen07.jpg",
        bullets: [
          "환경공단 차집실설 관제",
          "수질, 전도도, 수위 데이터 관리",
          "원격 수문제어, 모터, 컴프레셔 관제",
        ],
      },
    ],
  },
  {
    label: "화학",
    cases: [
      {
        title: "생산공정 품질 관리",
        imgSrc: "/images/sub/ics-screen08.jpg",
        bullets: [
          "원격 품질 관리데이터 분석",
          "원격 설비 제어 (배관, 펌프, 밸브)",
          "환경안전 경보 알람 시스템 연동",
        ],
      },
    ],
  },
  {
    label: "필름",
    cases: [
      {
        title: "생산 제어 관제",
        imgSrc: "/images/sub/ics-screen09.jpg",
        bullets: [
          "기간계 자동실적 체계 구축",
          "중요 품질 데이터 관리 분석",
          "조건별 설비 제어",
        ],
      },
    ],
  },
  {
    label: "물류",
    cases: [
      {
        title: "무인계근시스템",
        imgSrc: "/images/sub/ics-screen10.jpg",
        bullets: [
          "운송관리 시스템 통합 연동",
          "PLC기반 계근 시스템 구축",
          "국내외 공장 통합 원격 관제 구축",
        ],
      },
    ],
  },
  {
    label: "열처리",
    cases: [
      {
        title: "품질관리 및 알람",
        imgSrc: "/images/sub/ics-screen11.jpg",
        bullets: [
          "사용자 설정 기반 알람 시스템 구축",
          "작업지시별 생산 현황 관제",
          "품질이슈 발생 사항 사전 방지",
        ],
      },
    ],
  },
  {
    label: "유틸리티",
    cases: [
      {
        title: "수처리 설비 제어",
        imgSrc: "/images/sub/ics-screen12.jpg",
        bullets: [
          "구형 모자이크 판넬 현대화",
          "펌프, 게도밸브 원격지 제어 및 운영",
          "유틸리티 설비 제어 관제",
        ],
      },
    ],
  },
];
export default function Solution02_04() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-04.jpg"
          label="ICS"
          description={
            <>
              산업 표준 프로토콜 기반으로 설비 데이터를 실시간 연계하여 <br />
              AI Factory 구축을 지원하는 통합 연계 솔루션
            </>
          }
        />
        <SolutionFetures
          items={icsFeatures}
          title={
            <>
              AI와 디지털트윈으로 완성하는
              <br />
              통합설비관제시스템
            </>
          }
        />

        <div className="solution-diagram-full">
          <div className="sub-inner">
            <h2 className="sub-title">시스템 구성도</h2>
            <img
              src="/images/sub/solution03-01-diagram-1.png"
              alt="N·Core ICS 시스템 구성도"
            />
          </div>
        </div>

        <div>
          <div className="sub-inner">
            <div className="solution-title">
              <h3>업종별 N·Core ICS 적용 사례</h3>
              <p>
                철강, 자동차부품, 화학, 물류 등 다양한 산업 현장에 디지털트윈과
                AI 기반 설비제어를 실제로 적용한 사례
              </p>
            </div>
            <SolutionTabDetail categories={icsCategories} />
          </div>
        </div>
      </div>
    </>
  );
}
