import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    sub: "인사/급여",
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
    sub: "회계관리",
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
    sub: "경영정보",
    items: ["영업정보", "생산/품질", "구매/자재", "자금정보"],
  },
  {
    col: "원가관리",
    sub: "사후원가",
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
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const h2MaskRef = useRef(null);
  const subTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        imgWrapRef.current,
        { width: "55vw", height: "55vh", borderRadius: "20px" },
        { width: "100vw", height: "100vh", borderRadius: "0px", ease: "none" },
        0,
      );
      tl.fromTo(imgRef.current, { scale: 1.15 }, { scale: 1, ease: "none" }, 0);
      tl.fromTo(
        overlayRef.current,
        { opacity: 0.1 },
        { opacity: 0.55, ease: "none" },
        0,
      );
      tl.fromTo(
        h2MaskRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none" },
        "<",
      );
      tl.fromTo(
        subTitleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, ease: "none" },
        0.65,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="solution-wrap">
        <div ref={sectionRef} className="solution-intro">
          <div ref={imgWrapRef} className="solution-intro-img-wrap">
            <img ref={imgRef} src="/images/sub/solution01-01.jpg" alt="" />
          </div>
          <div ref={overlayRef} className="solution-intro-overlay" />
          <div className="solution-intro-main-title">
            <h2 className="h2-ghost">
              <img src="/images/sub/ncore-logo-wh.png" alt="" />{" "}
              <span>ERP</span>
            </h2>
            <h2 ref={h2MaskRef} className="h2-reveal">
              <img src="/images/sub/ncore-logo-wh.png" alt="" />{" "}
              <span>ERP</span>
            </h2>
          </div>

          <div ref={subTitleRef} className="solution-intro-sub-title">
            <p>
              도입기업 성장과 현안 과제 해결을 위해 필수 요구 사항 반영 및
              시스템 확장성을 고려한 <br />
              기업 맞춤형 효율적이고 안정적인 ERP 구축
            </p>
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
                          <div className="erp-right-card-sub">{s.sub}</div>
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
        <div className="solution-effect">
          <div className="sub-inner">
            <h2 className="sub-title">솔루션 도입 기대효과</h2>
            <ul>
              <li>
                모든 Data, 상호 연결된 유기적 구조, 무결성 원칙에 입각한
                경영관리
              </li>
              <li>
                모든 Data, 발생 장소에서 발생 주체자가 즉시 전산 시스템 으로
                Data 입력을 통한 데이터 정합성 확보
              </li>
              <li>
                모든 Data, 공유, 통합, 집계 되는 체계 구축을 통한 데이터 신뢰성
                확보
              </li>
              <li>
                월 마감 (결산)을 통한 명확한 원가, 손익, 수익이 되는 시스템
                구축을 통한 경영관리의 투명성 확보
              </li>
              <li>
                모든 보고 자료, 회의 자료가 시스템으로 관리되는 구조 실현을 통한
                업무 생산성 향상 및 의사결정 신속성 확보
              </li>
            </ul>
          </div>
        </div>
        <div className="solution-case">
          <div className="sub-inner">
            <h2 className="sub-title">구축 사례</h2>
          </div>
        </div>
      </div>
    </>
  );
}
