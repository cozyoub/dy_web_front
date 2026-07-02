import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionEffect from "@/components/sub/SolutionEffect";

gsap.registerPlugin(ScrollTrigger);

const erpEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "통합 데이터 기반 경영관리",
    desc: "전사 데이터를 통합 관리하여 신뢰도 높은 경영 환경을 제공합니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "데이터 정합성 및 신뢰성 확보",
    desc: "전산 시스템 기반의 데이터 입력과 통합 체계를 통해 데이터의 정확성과 신뢰성을 확보합니다.",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "투명한 경영 의사결정",
    desc: "원가·손익·수익 분석 체계를 기반으로 투명한 경영관리를 지원합니다.",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "업무 생산성 향상",
    desc: "업무 효율을 높이고 신속한 의사결정을 지원합니다.",
  },
];
const topRow = [
  {
    title: "기준 정보",
    items: [
      "기준정보관리",
      "생산기준정보",
      "거래처관리",
      "품목정보관리",
      "매뉴·권한관리",
    ],
  },
  {
    title: "영업 관리",
    items: [
      "견적관리",
      "프로젝트관리",
      "수주정보관리",
      "생산/출하의뢰",
      "매출관리",
    ],
  },
  {
    title: "출하관리",
    items: ["배차관리", "이송관리", "출하관리", "운송비관리"],
  },
  {
    title: "구매관리",
    items: ["계획관리", "발주관리", "입고관리", "마감관리"],
  },
  {
    title: "자재/재고관리",
    items: ["입출고관리", "창고이동관리", "기타입출고", "재고실사", "수불관리"],
  },
];

const bottomRow = [
  {
    title: "생산관리/생산",
    items: [
      "생산계획관리",
      "작업지시관리",
      "작업실적관리",
      "외주관리",
      "외주마감관리",
    ],
    dark: true,
  },
  {
    title: "설비관리",
    items: ["설비마스터", "설비수리", "설비점검", "금형관리", "치공구관리"],
    dark: true,
  },
  {
    title: "품질관리",
    items: [
      "수입/공정검사",
      "출하검사",
      "고객불만관리",
      "부적합관리",
      "계측기관리",
      "LOT추적관리",
    ],
    dark: true,
  },
  {
    title: "개발관리",
    items: ["품목정보관리", "BOM관리", "ECO관리", "도면관리"],
    dark: true,
  },
  {
    title: "모니터링",
    items: ["생산종합현황", "설비가동현황", "재고현황", "대쉬보드"],
    dark: true,
  },
];

const rightSections = [
  {
    col: "인사관리",
    items: [
      "조직관리",
      "인사관리",
      "증명서관리",
      "근태관리",
      "급여관리",
      "모바일관리",
    ],
  },
  {
    col: "회계관리",
    items: [
      "전표관리",
      "장부관리",
      "재무제표",
      "부가세관리",
      "자산관리",
      "자금관리",
      "CMS",
    ],
  },
  {
    col: "경영정보",
    items: ["영업정보", "생산/품질", "구매/자재", "자금정보"],
  },
  {
    col: "원가관리",
    items: ["배부기준", "공정원가", "제조원가", "손익관리"],
  },
];

const devices = [
  "Mitsubishi",
  "OMRON",
  "SIEMENS",
  "Allen-Bradley",
  "GE",
  "LS",
  "Keyence",
  "Advantech",
  "Modbus",
  "USER",
];

export default function Solution01_01() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-01.jpg"
          label="ERP"
          description={
            <>
              도입기업 성장과 현안 과제 해결을 위해 필수 요구 사항 반영 및
              시스템 확장성을 고려한 <br />
              기업 맞춤형 효율적이고 안정적인 ERP 구축
            </>
          }
        />
        <div className="erp-reason">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>왜 기업들은 N·Core ERP를 선택할까요?</h3>
            </div>
            <ul>
              <li className="erp-reason01">
                <h3>검증된 제조 ERP 구축 역량</h3>
                <p>
                  철강·자동차 부품 산업 등 다양한 제조 현장의 ERP 구축 경험을
                  바탕으로 안정적인 시스템을 제공합니다.
                </p>
              </li>
              <li className="erp-reason02">
                <h3>고객 중심 프로세스 최적화</h3>
                <p>
                  고객사의 업무 환경과 운영 프로세스를 깊이 이해하여 기업별
                  특성에 최적화된 ERP를 구현합니다.
                </p>
              </li>
              <li className="erp-reason03">
                <h3>디지털 전환을 이끄는 전문성</h3>
                <p>
                  제조, 유통, 서비스 산업 전반의 Digital Transformation 경험을
                  바탕으로 지속 가능한 혁신을 지원합니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="solution-detail">
          <div className="sub-inner">
            <h2 className="sub-title">상세 솔루션</h2>
            <div className="erp-root">
              <div className="erp-top-row">
                <div className="erp-left-panel">
                  <div className="erp-top-row">
                    {/* 고객 + SCM */}
                    <div className="erp-side-col">
                      <div className="erp-side-panel">
                        <div className="erp-side-panel-header">고객</div>
                        <div className="erp-side-panel-body">
                          {["생산계획", "주문정보", "일검수", "클레임"].map(
                            (item) => (
                              <div key={item} className="erp-side-panel-item">
                                {item}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                      <div className="erp-side-panel">
                        <div className="erp-side-panel-header">SCM</div>
                        <div className="erp-side-panel-body">
                          {[
                            "발주현황",
                            "납품처리",
                            "납입카드발행",
                            "납입현황",
                            "납품/검수관리",
                            "업체정보관리",
                          ].map((item) => (
                            <div key={item} className="erp-side-panel-item">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="erp-arrow">⇄</div>

                    {/* 통합생산시스템 */}
                    <div className="erp-section erp-main">
                      <div className="erp-main-header">통합생산시스템</div>
                      <div className="erp-main-body">
                        <div className="erp-module-row">
                          {topRow.map((m) => (
                            <div key={m.title} className="erp-module-card">
                              <div className="erp-module-card-header">
                                {m.title}
                              </div>
                              <div className="erp-module-card-body">
                                {m.items.map((item) => (
                                  <div
                                    key={item}
                                    className="erp-module-card-item"
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="erp-module-row">
                          {bottomRow.map((m) => (
                            <div key={m.title} className="erp-module-card">
                              <div className="erp-module-card-header erp-module-card-header-dark">
                                {m.title}
                              </div>
                              <div className="erp-module-card-body">
                                {m.items.map((item) => (
                                  <div
                                    key={item}
                                    className="erp-module-card-item"
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 하단 */}
                  <div className="erp-bottom-row">
                    <div className="erp-section erp-pop">
                      <div className="erp-pop-header">현장실적관리 (POP)</div>
                      <div className="erp-pop-body">
                        Wi-Fi 연결
                        <br />
                        현장 PC
                        <br />
                        바코드 스캐너
                        <br />
                        Mobile
                      </div>
                    </div>

                    <div className="erp-section erp-monitor">
                      <div className="erp-monitor-header">모니터링 시스템</div>
                      <div className="erp-monitor-body">
                        <div className="erp-monitor-desc">
                          {/* Data Acquisition Server · X-STADA · OPC UA · X-DAS */}
                          <img src="/images/sub/x-scada.png" alt="" />
                        </div>
                        {/* <div className="erp-monitor-sub">
                          Field Devices (PLC, I/O Module)
                        </div> */}
                        <div className="erp-monitor-tags">
                          {devices.map((d) => (
                            <span key={d} className="erp-monitor-tag">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="erp-section erp-groupware">
                      <div className="erp-groupware-title">그룹웨어</div>
                      <div className="erp-groupware-btn">전자결재</div>
                    </div>
                    <div className="erp-arrow">⇄</div>
                  </div>
                </div>
                <div className="erp-arrow">⇄</div>
                {/* 일반관리 */}
                <div className="erp-section erp-right-panel">
                  <div className="erp-right-panel-header">일반관리</div>
                  <div className="erp-right-panel-grid">
                    {rightSections.map((s) => (
                      <div key={s.col} className="erp-right-card">
                        <div className="erp-right-card-header">{s.col}</div>
                        <div className="erp-right-card-body">
                          {/* <div className="erp-right-card-sub">{s.sub}</div> */}
                          {s.items.map((item) => (
                            <div key={item} className="erp-right-card-item">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SolutionEffect
          title="솔루션 도입 기대효과"
          desc="통합된 데이터와 표준 프로세스를 기반으로 기업의 업무 효율성과 경영 투명성을 향상시킵니다."
          items={erpEffects}
        />
      </div>
    </>
  );
}
