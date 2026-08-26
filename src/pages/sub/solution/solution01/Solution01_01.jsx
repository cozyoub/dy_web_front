import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_01";

gsap.registerPlugin(ScrollTrigger);

function trList(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

function trGroups(tr, base, koGroups) {
  return koGroups.map((g, i) => ({
    title: tr(`${base}.${i}.title`, g.title),
    items: trList(tr, `${base}.${i}.items`, g.items),
    dark: g.dark,
  }));
}

export default function Solution01_01() {
  const tr = useTr(en);
  const hexRef = useRef();

  const erpEffects = [
    {
      icon: "/images/sub/ico_effect01.svg",
      title: tr("effect.items.0.title", "통합 데이터 기반 경영관리"),
      desc: tr("effect.items.0.desc", "전사 데이터를 통합 관리하여 신뢰도 높은 경영 환경을 제공합니다."),
    },
    {
      icon: "/images/sub/ico_effect02.svg",
      title: tr("effect.items.1.title", "데이터 정합성 및 신뢰성 확보"),
      desc: tr("effect.items.1.desc", "전산 시스템 기반의 데이터 입력과 통합 체계를 통해 데이터의 정확성과 신뢰성을 확보합니다."),
    },
    {
      icon: "/images/sub/ico_effect04.svg",
      title: tr("effect.items.2.title", "투명한 경영 의사결정"),
      desc: tr("effect.items.2.desc", "원가·손익·수익 분석 체계를 기반으로 투명한 경영관리를 지원합니다."),
    },
    {
      icon: "/images/sub/ico_effect06.svg",
      title: tr("effect.items.3.title", "업무 생산성 향상"),
      desc: tr("effect.items.3.desc", "업무 효율을 높이고 신속한 의사결정을 지원합니다."),
    },
  ];

  const topRow = trGroups(tr, "detail.topRow", [
    { title: "기준 정보", items: ["기준정보관리", "생산기준정보", "거래처관리", "품목정보관리", "매뉴·권한관리"] },
    { title: "영업 관리", items: ["견적관리", "프로젝트관리", "수주정보관리", "생산/출하의뢰", "매출관리"] },
    { title: "출하관리", items: ["배차관리", "이송관리", "출하관리", "운송비관리"] },
    { title: "구매관리", items: ["계획관리", "발주관리", "입고관리", "마감관리"] },
    { title: "자재/재고관리", items: ["입출고관리", "창고이동관리", "기타입출고", "재고실사", "수불관리"] },
  ]);

  const bottomRow = trGroups(tr, "detail.bottomRow", [
    { title: "생산관리/생산", items: ["생산계획관리", "작업지시관리", "작업실적관리", "외주관리", "외주마감관리"], dark: true },
    { title: "설비관리", items: ["설비마스터", "설비수리", "설비점검", "금형관리", "치공구관리"], dark: true },
    { title: "품질관리", items: ["수입/공정검사", "출하검사", "고객불만관리", "부적합관리", "계측기관리", "LOT추적관리"], dark: true },
    { title: "개발관리", items: ["품목정보관리", "BOM관리", "ECO관리", "도면관리"], dark: true },
    { title: "모니터링", items: ["생산종합현황", "설비가동현황", "재고현황", "대쉬보드"], dark: true },
  ]);

  const rightSections = trGroups(tr, "detail.rightSections", [
    { title: "인사관리", items: ["조직관리", "인사관리", "증명서관리", "근태관리", "급여관리", "모바일관리"] },
    { title: "회계관리", items: ["전표관리", "장부관리", "재무제표", "부가세관리", "자산관리", "자금관리", "CMS"] },
    { title: "경영정보", items: ["영업정보", "생산/품질", "구매/자재", "자금정보"] },
    { title: "원가관리", items: ["배부기준", "공정원가", "제조원가", "손익관리"] },
  ]).map((s) => ({ col: s.title, items: s.items }));

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

  useEffect(() => {
    const cards = gsap.utils.toArray(".erp-hex-diagram .hex-text");

    gsap.set(cards, {
      y: 80,
      opacity: 0,
    });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: hexRef.current,
        start: "top 70%",
      },
    });
  }, []);
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-01.jpg"
          label={tr("intro.label", "ERP")}
          description={
            <>
              {tr(
                "intro.d1",
                "도입기업 성장과 현안 과제 해결을 위해 필수 요구 사항 반영 및 시스템 확장성을 고려한",
              )}{" "}
              <br />
              {tr("intro.d2", "기업 맞춤형 효율적이고 안정적인 ERP 구축")}
            </>
          }
        />
        <div className="erp-reason">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("reason.title", "ERP 구축으로 실현하는 업무 혁신")}</h3>
              <p>
                {tr(
                  "reason.desc",
                  "업무 프로세스의 표준화와 데이터 통합을 기반으로 기업 전반의 운영 효율성과 업무 가시성을 높입니다.",
                )}
              </p>
            </div>
            <ul>
              <li className="erp-reason01">
                <h3>{tr("reason.items.0.title", "업무 수행 프로세스 표준화")}</h3>
                <p>
                  {tr(
                    "reason.items.0.desc",
                    "업무 수행 프로세스와 절차, 규정을 표준화하여 일관된 업무 체계를 구축하고 운영 효율성을 향상시킵니다.",
                  )}
                </p>
              </li>

              <li className="erp-reason02">
                <h3>{tr("reason.items.1.title", "시스템 통합 및 데이터 표준 일원화")}</h3>
                <p>
                  {tr(
                    "reason.items.1.desc",
                    "고객사 내부 시스템을 통합하고 데이터를 표준화·일원화하여 정확하고 신뢰성 있는 정보 관리 환경을 제공합니다.",
                  )}
                </p>
              </li>

              <li className="erp-reason03">
                <h3>{tr("reason.items.2.title", "업무 Visibility 확보 및 고도화")}</h3>
                <p>
                  {tr(
                    "reason.items.2.desc",
                    "실시간 업무 Visibility를 확보하고 지속적인 업무 고도화를 통해 신속하고 정확한 의사결정을 지원합니다.",
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="erp-hex-diagram">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("hex.title", "왜 기업들은 N·Core ERP를 선택할까요?")}</h3>
              <p>
                {tr(
                  "hex.desc",
                  "풍부한 프로젝트 경험과 축적된 운영 노하우를 바탕으로 고객에게 최적의 ERP 구축과 안정적인 운영 환경을 제공합니다.",
                )}
              </p>
            </div>
            <div className="hex-diagram">
              <div className="hex-text hex-text-tl" ref={hexRef}>
                <h4>{tr("hex.tl.title", "풍부한 프로젝트 경험")}</h4>
                <ul>
                  <li>
                    {tr(
                      "hex.tl.items.0",
                      "동국산업 등 철강 및 자동차부품 업체 제조 현장 ERP 구축 및 운영 프로젝트 수행 경험",
                    )}
                  </li>
                  <li>
                    {tr(
                      "hex.tl.items.1",
                      "공금융 (BNK, 라이나생명, AJ네트웍스, 부산시, 한국환경공단 등), 제조 (HD현대중공업, BN그룹, 피플스(LG에너지솔루션), 동국산업그룹 등) 다양한 ERP, 그룹웨어/HR 프로젝트 수행 경험",
                    )}
                  </li>
                  <li>
                    {tr(
                      "hex.tl.items.2",
                      "다양한 Source로부터의 I/F, 다양한 UI로의 Data 제공 경험 보유 IT 인력 양성과 꾸준한 투자",
                    )}
                  </li>
                </ul>
              </div>

              <div className="hex-text hex-text-tr">
                <h4>{tr("hex.tr.title", "고객 전사 프로세스에 대한 이해")}</h4>
                <ul>
                  {["핵심 프로세스 설계/구축 및 Knowledge 확보", "프로세스 혁신 관점의 ERP 프로젝트 수행", "효율적인 프로젝트 추진", "고객별 특화된 프로세스 대응 능력 우수", "Risk에 대한 유연한 대처"].map(
                    (ko, i) => (
                      <li key={i}>{tr(`hex.tr.items.${i}`, ko)}</li>
                    ),
                  )}
                </ul>
              </div>

              <div className="hex-center">
                <div className="hex-core">
                  <img src="/images/common/logo_wh.svg" alt="동연에스엔티" />
                </div>
              </div>

              <div className="hex-text hex-text-bl">
                <h4>{tr("hex.bl.title", "시스템 운영에 대한 Know-How")}</h4>
                <ul>
                  <li>
                    {tr(
                      "hex.bl.items.0",
                      "다양한 산업 및 기업에서 축적한 유지보수 Know-how를 기반으로, 구축 이후를 고려한 설계/개발",
                    )}
                  </li>
                  <li>
                    {tr("hex.bl.items.1", "대규모 프로젝트 파트너로 참여 및 구축 후 운영 수행")}
                  </li>
                </ul>
              </div>

              <div className="hex-text hex-text-br">
                <h4>{tr("hex.br.title", "Digital Transformation 경험")}</h4>
                <ul>
                  {["제조업, 공급용, 서비스 등 다양한 산업의 DT 프로젝트 수행 및 운영", "Digital Worker 기반 업무 프로세스 혁신 수행", "지속 대상 Task 도출, 적용, 고도화 경험"].map(
                    (ko, i) => (
                      <li key={i}>{tr(`hex.br.items.${i}`, ko)}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-detail">
          <div className="sub-inner">
            <h2 className="sub-title">{tr("detail.title", "상세 솔루션")}</h2>
            <div className="erp-root">
              <div className="erp-top-row">
                <div className="erp-left-panel">
                  <div className="erp-top-row">
                    <div className="erp-side-col">
                      <div className="erp-side-panel">
                        <div className="erp-side-panel-header">{tr("detail.customerLabel", "고객")}</div>
                        <div className="erp-side-panel-body">
                          {["생산계획", "주문정보", "일검수", "클레임"].map((item, i) => (
                            <div key={item} className="erp-side-panel-item">
                              {tr(`detail.customer.${i}`, item)}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="erp-side-panel">
                        <div className="erp-side-panel-header">{tr("detail.scmLabel", "SCM")}</div>
                        <div className="erp-side-panel-body">
                          {[
                            "발주현황",
                            "납품처리",
                            "납입카드발행",
                            "납입현황",
                            "납품/검수관리",
                            "업체정보관리",
                          ].map((item, i) => (
                            <div key={item} className="erp-side-panel-item">
                              {tr(`detail.scm.${i}`, item)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="erp-arrow">⇄</div>

                    <div className="erp-section erp-main">
                      <div className="erp-main-header">{tr("detail.mainHeader", "통합생산시스템")}</div>
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

                  <div className="erp-bottom-row">
                    <div className="erp-section erp-pop">
                      <div className="erp-pop-header">{tr("detail.popHeader", "현장실적관리 (POP)")}</div>
                      <div className="erp-pop-body">
                        {tr("detail.pop.0", "Wi-Fi 연결")}
                        <br />
                        {tr("detail.pop.1", "현장 PC")}
                        <br />
                        {tr("detail.pop.2", "바코드 스캐너")}
                        <br />
                        {tr("detail.pop.3", "Mobile")}
                      </div>
                    </div>

                    <div className="erp-section erp-monitor">
                      <div className="erp-monitor-header">{tr("detail.monitorHeader", "모니터링 시스템")}</div>
                      <div className="erp-monitor-body">
                        <div className="erp-monitor-desc">
                          <img src="/images/sub/x-scada.png" alt="" />
                        </div>
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
                      <div className="erp-groupware-title">{tr("detail.groupwareTitle", "그룹웨어")}</div>
                      <div className="erp-groupware-btn">{tr("detail.groupwareBtn", "전자결재")}</div>
                    </div>
                    <div className="erp-arrow">⇄</div>
                  </div>
                </div>
                <div className="erp-arrow">⇄</div>
                <div className="erp-section erp-right-panel">
                  <div className="erp-right-panel-header">{tr("detail.rightPanelHeader", "일반관리")}</div>
                  <div className="erp-right-panel-grid">
                    {rightSections.map((s) => (
                      <div key={s.col} className="erp-right-card">
                        <div className="erp-right-card-header">{s.col}</div>
                        <div className="erp-right-card-body">
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
          title={tr("effect.title", "솔루션 도입 기대효과")}
          desc={tr(
            "effect.desc",
            "통합된 데이터와 표준 프로세스를 기반으로 기업의 업무 효율성과 경영 투명성을 향상시킵니다.",
          )}
          items={erpEffects}
        />
        <SolutionNoticeCards />
      </div>
    </>
  );
}
