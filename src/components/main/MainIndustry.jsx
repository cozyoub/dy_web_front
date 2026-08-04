import { useState } from "react";
import MainSectionTitle from "./MainSectionTitle";
import "./MainIndustry.css";

const industryData = {
  auto: {
    label: "자동차 및 부품",
    cards: [
      {
        id: "monitor",
        title: "생산현황 관제",
        desc: "실시간 설비 현황 가시화로 이상 징후를 빠르게 감지",
        icon: "/images/main/industry_ico01.svg",
      },
      {
        id: "auto-control",
        title: "설비제어 무인 자동화",
        desc: "설비제어와 자동화를 통해 생산 중단 최소화",
        icon: "/images/main/industry_ico02.svg",
      },
      {
        id: "lot",
        title: "LOT 추적",
        desc: "원자재부터 출하물까지 LOT 단위 전주기 추적",
        icon: "/images/main/industry_ico03.svg",
      },
      {
        id: "efficiency",
        title: "설비효율 및 불량률 분석",
        desc: "설비 효율과 불량 데이터로 분석해 지속적으로 개선",
        icon: "/images/main/industry_ico04.svg",
      },
    ],
  },

  steel: {
    label: "철강 및 금속",
    cards: [
      {
        id: "quality",
        title: "품질 예측",
        desc: "설비 데이터를 표준화하여 품질 이상을 사전에 예측",
        icon: "/images/main/industry_ico01.svg",
      },
      {
        id: "process",
        title: "압연공정 모니터링",
        desc: "압연·열처리 공정을 실시간으로 통합 관제",
        icon: "/images/main/industry_ico02.svg",
      },
      {
        id: "trace",
        title: "생산이력 추적",
        desc: "소재부터 완제품까지 생산 이력을 통합 관리",
        icon: "/images/main/industry_ico03.svg",
      },
      {
        id: "energy",
        title: "에너지 사용 분석",
        desc: "전력과 가스 사용량을 분석해 운영 효율을 향상",
        icon: "/images/main/industry_ico04.svg",
      },
    ],
  },

  battery: {
    label: "배터리",
    cards: [
      {
        id: "safety",
        title: "안전 모니터링",
        desc: "온도와 가스 데이터를 실시간으로 감지해 사고를 예방",
        icon: "/images/main/industry_ico01.svg",
      },
      {
        id: "cell",
        title: "셀 생산 이력 관리",
        desc: "셀부터 모듈까지 생산 이력을 체계적으로 관리",
        icon: "/images/main/industry_ico02.svg",
      },
      {
        id: "quality",
        title: "품질 이상 예측",
        desc: "검사 데이터를 기반으로 품질 이상을 조기에 예측",
        icon: "/images/main/industry_ico03.svg",
      },
      {
        id: "equipment",
        title: "설비 상태 관리",
        desc: "설비 상태를 실시간으로 수집하고 운영 효율을 개선",
        icon: "/images/main/industry_ico04.svg",
      },
    ],
  },

  chemical: {
    label: "화학 및 소재",
    cards: [
      {
        id: "control",
        title: "공정 제어",
        desc: "공정 조건을 실시간으로 제어해 품질 편차를 최소화",
        icon: "/images/main/industry_ico01.svg",
      },
      {
        id: "mix",
        title: "배합 품질 관리",
        desc: "배합 데이터와 검사 결과를 연계해 품질을 관리",
        icon: "/images/main/industry_ico02.svg",
      },
      {
        id: "safety",
        title: "안전·환경 관리",
        desc: "유해물질과 환경 데이터를 통합 관리",
        icon: "/images/main/industry_ico03.svg",
      },
      {
        id: "inventory",
        title: "원료 재고 관리",
        desc: "원료 입출고와 재고 현황을 실시간으로 관리",
        icon: "/images/main/industry_ico04.svg",
      },
    ],
  },

  water: {
    label: "수처리 및 환경",
    cards: [
      {
        id: "water",
        title: "수질 모니터링",
        desc: "수질 데이터를 실시간으로 수집해 이상을 감지",
        icon: "/images/main/industry_ico01.svg",
      },
      {
        id: "facility",
        title: "설비 운영 관리",
        desc: "펌프와 밸브 등 주요 설비를 통합 관리",
        icon: "/images/main/industry_ico02.svg",
      },
      {
        id: "energy",
        title: "에너지 최적화",
        desc: "운영 데이터를 분석해 에너지 사용을 절감",
        icon: "/images/main/industry_ico03.svg",
      },
      {
        id: "alarm",
        title: "이상 알림",
        desc: "설비 이상 발생 시 즉시 알림과 대응을 지원",
        icon: "/images/main/industry_ico04.svg",
      },
    ],
  },

  logistics: {
    label: "물류",
    cards: [
      {
        id: "warehouse",
        title: "창고 관리",
        desc: "입출고와 재고를 실시간으로 관리",
        icon: "/images/main/industry_ico01.svg",
      },
      {
        id: "tracking",
        title: "물류 추적",
        desc: "제품 이동 경로를 실시간으로 추적",
        icon: "/images/main/industry_ico02.svg",
      },
      {
        id: "dispatch",
        title: "배차 최적화",
        desc: "배송 일정과 차량 운행을 효율적으로 관리",
        icon: "/images/main/industry_ico03.svg",
      },
      {
        id: "inventory",
        title: "재고 최적화",
        desc: "수요 기반 재고 운영으로 물류 효율을 향상",
        icon: "/images/main/industry_ico04.svg",
      },
    ],
  },
};
export default function MainIndustry() {
  const industryKeys = Object.keys(industryData);
  const [activeTab, setActiveTab] = useState(industryKeys[0]);

  const activeCards = industryData[activeTab].cards;

  return (
    <div className="main-industry">
      <MainSectionTitle
                eyebrow="어떤 산업이든, 제조 현장의 특성에 맞는 구축 경험"
                title={
                  <>
                    산업별 구축범위
                  </>
                }
              />

      <div className="main-industry__tabs">
        {industryKeys.map((key) => (
          <button
            key={key}
            type="button"
            className={`main-industry__tab${activeTab === key ? " is-active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {industryData[key].label}
          </button>
        ))}
      </div>

      <div className="main-industry__grid">
        {activeCards.length > 0 ? (
          activeCards.map((card) => (
            <div key={card.id} className="main-industry__card">
              <div className="main-industry__icon-wrap">
                <i>
                    <img src={card.icon} alt="" />
                </i>
              </div>
              <h3 className="main-industry__card-title">{card.title}</h3>
              <p className="main-industry__card-desc">{card.desc}</p>
            </div>
          ))
        ) : (
          <p className="main-industry__empty">준비 중입니다.</p>
        )}
      </div>
    </div>
  );
}