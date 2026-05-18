import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

const data = [
  {
    icon: "AI",
    name: "N·Core AI",
    sub: "생산공정최적화 시스템",
    body: "AI 기반 생산 계획 자동화 및 생산 공정 최적화를 통한 생산성 향상(생산종합효율)",
    tags: ["불량예측", "공정최적화"],
    img: ["/images/sub/ncore-ai.png"],
  },
  {
    icon: "Q",
    name: "N·Core Qeye",
    sub: "통합품질관리 시스템",
    body: "AI 기반 품질 불량 유형 학습을 통한 자동 품질 결함 분류 및 스마트 품질관리 실현(Q-Cost 절감)",
    tags: ["AI-Vision", "Q-Cost 절감"],
    img: ["/images/sub/ncore-qeye.png"],
  },
  {
    icon: "E",
    name: "N·Core ESH",
    sub: "환경안전경영 시스템",
    body: "중대재해 예방 및 환경안전보건 통합 업무 관리를 위한 기업환경안전경영 활동 체계 구축 (재해 Zero, 사고 Zero)",
    tags: ["재해 Zero", "사고 Zero"],
    img: ["/images/sub/ncore-esh.png"],
  },
  {
    icon: "D",
    name: "N·Core TMS",
    sub: "통합물류(운송)관리 시스템",
    body: "AI 기반 자동차량배차, 차량인식 입출고관리, 차량위치(GPS), 자동계근 등 통합 물류관리 실현 (물류 Cost 절감, 대기 시간 단축)",
    tags: ["수송관리", "Cost절감"],
    img: ["/images/sub/ncore-tms.png"],
  },
  {
    icon: "M",
    name: "N·Core eCMMS",
    sub: "통합설비보전 시스템",
    body: "설비 데이터 활용, 예지보전 AI 모델링 및 학습을 통한 실시간 데이터 기반 보전 활동 체계 구축 (OEEE 향상)",
    tags: ["예지보전", "OEEE향상"],
    img: ["/images/sub/ncore-ecmms.png"],
  },
  {
    icon: "C",
    name: "N·Core MCS",
    sub: "기업경영핵심 시스템",
    body: "전사적 경영관리를 위한 핵심 (Core) 업무 솔루션 도입 및 구축을 통한 실시간 데이터 중심의 업무관리 체계 실현 (업무 효율 향상, 사무 생산성 향상, 실적 및 원가 정합성 확보)",
    tags: ["MES", "FA", "HR", "PMS"],
    img: [
      "/images/sub/ncore-mcs01.png",
      "/images/sub/ncore-mcs02.png",
      "/images/sub/ncore-mcs03.png",
      "/images/sub/ncore-mcs04.png",
    ],
  },
  {
    icon: "AIoT",
    name: "N·Core ICS",
    sub: "통합설비관제 시스템",
    body: "현장 실시간 데이터 기반 생산공정 최적화 AI 모델 생성을 통한 지능형 설비 제어 및 디지털 트윈 구축",
    tags: ["디지털트윈", "자동화"],
    img: ["/images/sub/ncore-ics.png"],
  },
];

const satellites = [
  {
    id: "sat0",
    idx: 0,
    style: { top: "14px", left: "50%", transform: "translateX(-50%)" },
    label: "생산",
    eng: "P",
    name: "N·Core AI",
    desc: "생산공정최적화 시스템",
  },
  {
    id: "sat1",
    idx: 1,
    style: { top: "14px", right: "10%" },
    label: "품질",
    eng: "Q",
    name: "N·Core Qeye",
    desc: "통합품질관리 시스템",
  },
  {
    id: "sat2",
    idx: 2,
    style: { bottom: "40%", right: "14px" },
    label: "환경안전",
    eng: "E",
    name: "N·Core ESH",
    desc: "환경안전경영 시스템",
  },
  {
    id: "sat3",
    idx: 3,
    style: { bottom: "14px", right: "10%" },
    label: "물류",
    eng: "D",
    name: "N·Core TMS",
    desc: "통합물류(수송)관리 시스템",
  },
  {
    id: "sat4",
    idx: 4,
    style: { bottom: "14px", left: "50%", transform: "translateX(-50%)" },
    label: "설비",
    eng: "M",
    name: "N·Core eCMMS",
    desc: "통합설비보전 시스템",
  },
  {
    id: "sat5",
    idx: 5,
    style: { bottom: "80px", left: "14px" },
    label: "경영",
    eng: "C",
    name: "N·Core MCS",
    desc: "기업경영혁신 시스템",
  },
  {
    id: "sat6",
    idx: 6,
    style: { top: "100px", left: "14px" },
    label: "AIOT",
    eng: "AIOT",
    name: "N·Core ICS",
    desc: "통합설비관제 시스템",
  },
];

export default function Service02() {
  const [active, setActive] = useState(0);
  const d = data[active];
  const [activeTab, setActiveTab] = useState(0);
  const sec01Ref = useRef(null);
  const sec02Ref = useRef(null);
  const tabRef = useRef(null);
  const [tabSticky, setTabSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target === sec02Ref.current ? 1 : 0);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-30% 0px -30% 0px",
      },
    );

    if (sec01Ref.current) observer.observe(sec01Ref.current);
    if (sec02Ref.current) observer.observe(sec02Ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tabEl = tabRef.current;
    if (!tabEl) return;

    const tabTop = tabEl.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      setTabSticky(window.scrollY >= tabTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <div ref={tabRef} className={`sub-tab-list${tabSticky ? " sticky" : ""}`}>
        <a href="#s0201" className={activeTab === 0 ? "active" : ""}>
          AI Platform 구축
        </a>
        <a href="#s0202" className={activeTab === 1 ? "active" : ""}>
          Manufacturing AI Platform 구축
        </a>
      </div>

      <div className="service02-01 sub-section" ref={sec01Ref} id="s0201">
        <div className="sub-page-info" data-reveal>
          <div className="sub-inner">
            <h2 className="title">AI Platform 구축</h2>
            <p className="desc">
              제조 민간에 필요한 스마트팩토리관점의 솔루션 및 Autonomous 제조
              달성을 위한 AI 를 적용하기위한 DX/AX 실행 전략 및 로드맵 수립
            </p>
          </div>
        </div>
        <div className="service02-01-01">
          <div className="sub-inner">
            <div className="row-wrap">
              <div className="row row01" data-reveal>
                <div className="side-tab l1">
                  <div className="tab-label">Layer 1</div>
                </div>
                <div className="content-box">
                  <div className="sec-header h-gray">
                    인간/제조 지표에 대한 진단/과제 영역
                  </div>
                  <div className="l1-body">
                    <div className="l1-grid">
                      <div className="l1-card">
                        <div className="l1-title">기업 진단</div>
                        <div className="l1-badge">
                          스마트팩토리
                          <br />
                          진단Tool
                        </div>
                        <div className="l1-badge">진단대상Data</div>
                      </div>
                      <div className="l1-card">
                        <div className="l1-title">공급망관리</div>
                        <div className="l1-badge">SCM</div>
                        <div className="l1-badge">S&amp;OP</div>
                      </div>
                      <div className="l1-card">
                        <div className="l1-title">생산성 향상</div>
                        <div className="l1-badge">제조데이터</div>
                        <div className="l1-badge">공정효율화</div>
                      </div>
                      <div className="l1-card">
                        <div className="l1-title">구매혁신/품질</div>
                        <div className="l1-badge">구매전략</div>
                        <div className="l1-badge">TQM</div>
                      </div>
                      <div className="l1-card">
                        <div className="l1-title">안전</div>
                        <div className="l1-badge">중대재해</div>
                        <div className="l1-badge">안전관리체계</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row02" data-reveal>
                <div className="side-tab l2">
                  <div className="tab-label">Layer 2</div>
                </div>
                <div className="content-box">
                  <div className="sec-header h-navy">
                    제조경쟁력 강화를 위한 데이터를 제공하는 영역
                  </div>
                  <div className="l2-body">
                    <div className="db-label">통합 DB</div>
                    <div className="db-grid">
                      <div className="db-item">원가</div>
                      <div className="db-item">생산성</div>
                      <div className="db-item">인력효율</div>
                      <div className="db-item">개발</div>
                      <div className="db-item">공급망</div>
                      <div className="db-item">설비관리</div>
                      <div className="db-item">DATA</div>
                    </div>
                    <div className="arrow-row">
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                      <div className="arr">
                        <img src="/images/sub/ico-compare-arrows.png" alt="" />
                      </div>
                    </div>
                    <div className="sys-grid">
                      <div className="sys-item">ERP</div>
                      <div className="sys-item">MES</div>
                      <div className="sys-item">HCM</div>
                      <div className="sys-item">PLM</div>
                      <div className="sys-item">SRM</div>
                      <div className="sys-item">FMS</div>
                      <div className="sys-item">MDM</div>
                    </div>
                    <div className="legend-wrap">
                      <div>
                        <div className="legend-item">
                          1) Enterprise Resource Planning
                        </div>
                        <div className="legend-item">
                          2) Manufacturing Execution System
                        </div>
                        <div className="legend-item">
                          3) Human Capital Management
                        </div>
                        <div className="legend-item">
                          4) Product Lifecycle Management
                        </div>
                      </div>
                      <div>
                        <div className="legend-item">
                          5) Supply Relationship Management
                        </div>
                        <div className="legend-item">
                          6) Facility Management System
                        </div>
                        <div className="legend-item">
                          7) Master Data Management (전사기준정보)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row03" data-reveal>
                <div className="side-tab l3">
                  <div className="tab-label">Layer 3</div>
                </div>
                <div className="content-box">
                  <div className="sec-header h-teal">
                    요소기술 및 인프라 영역
                  </div>
                  <div className="l3-body">
                    <div className="l3-glow"></div>
                    <div className="l3-title">
                      Digital Twin Transformation Tech
                    </div>
                    <div className="circle-row">
                      <div className="circle lg">
                        <div className="circle-text">Generative AI</div>
                      </div>
                      <div className="circle">
                        <div className="circle-text">
                          Hyper
                          <br />
                          Automation
                        </div>
                      </div>
                      <div className="circle">
                        <div className="circle-text">Cloud</div>
                      </div>
                      <div className="circle lg">
                        <div className="circle-text">Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service02-01-02">
          <div className="sub-inner">
            <div className="ai-wrap">
              <div className="ai-container">
                <div className="ai-left-section">
                  <div className="main-title" data-reveal>
                    AI Quick Innovation 과제 발굴
                  </div>
                  <div className="con" data-reveal data-delay="0.15">
                    <div className="box-section">
                      <div className="sub-title">
                        ① 기업별 산업 AI 적용 현황 및 AX· DX 수요조사 결과 활용
                      </div>
                      <div className="survey-col-wrap">
                        <div className="survey-row">
                          <div className="survey-label">수요</div>
                          <div className="survey-items">
                            <div className="survey-box">
                              기업 내부 제조 데이터 활용 현황
                            </div>
                            <div className="survey-box">
                              AI, RPA 등 디지털기술 접목 수요
                            </div>
                            <div className="survey-box">
                              기업 특성 고려 AX PoC 니즈 파악
                            </div>
                          </div>
                        </div>
                        <div className="survey-row">
                          <div className="survey-label supply">공급</div>
                          <div className="survey-items">
                            <div className="survey-box">
                              제조 AI 기술 접목 트렌드 조사
                            </div>
                            <div className="survey-box">
                              제조 IT 기업 기술 역량 파악
                            </div>
                            <div className="survey-box">
                              AI 기술 수요·활용사례 분석
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="matching-box">
                        산업별 IT기업역량 고려하여, AX · DX 효과 극대화 가능한
                        Matching 추진
                      </div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="half-grid">
                      <div className="box-section">
                        <div className="sub-title">② 아이디어 도출 워크숍</div>
                        <div className="content-box">
                          제조산업전문가, 기업 및 IT전문가, 학계교수 등<br />
                          아이디어 발굴 개방형 워크숍 추진
                        </div>
                      </div>
                      <div className="box-section">
                        <div className="sub-title">③ 과제 발굴</div>
                        <div className="content-box">
                          다각적 관점(해당산업기업, IT기업, 수행기업)에서
                          <br /> 실행과제 Pooling
                        </div>
                      </div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="half-grid">
                      <div className="box-section">
                        <div className="sub-title">④ 평가 지표 수립</div>
                        <div className="score-outer">
                          <div className="score-grid-inner">
                            <div className="score-item blue">효과성</div>
                            <div className="score-item blue">확장성</div>
                          </div>
                          <div className="score-grid-inner">
                            <div className="score-item">업무 효율성</div>
                            <div className="score-item">내재화 가능성</div>
                            <div className="score-item">범용성</div>
                            <div className="score-item">실행 용이성</div>
                          </div>
                          <div className="score-desc">
                            AI 활용 효과성 및 확장성 등 Quick Innovation 과제
                            평가 기준 수립
                          </div>
                        </div>
                      </div>
                      <div className="box-section">
                        <div className="sub-title">
                          ⑤ AI Quick Innovation 과제 확정
                        </div>
                        <div className="content-box">
                          선정된 평가 기준에 따라
                        </div>
                        <div className="notice">
                          AI Quick Innovation 과제 확정
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ai-right-section">
                  <div className="main-title" data-reveal>
                    AI Quick Innovation 수행
                  </div>
                  <div className="sub-panel" data-reveal data-delay="0.15">
                    <div className="sub-panel-title">
                      AI Quick Innovation 프로토타입 절차
                    </div>

                    <div className="proto-grid">
                      <div className="proto-step">
                        <div className="proto-name">
                          프로세스 분석 및 시나리오 설계
                        </div>
                        <div className="proto-desc">
                          <span>실제 업무 프로세스</span> vs AI 모델과 연계
                          시나리오 작성 (데이터셋 정의 등)
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="proto-step">
                        <div className="proto-name">시스템 아키텍처 설계</div>
                        <div className="proto-desc">
                          <span>기업 내 시스템</span>(ERP 등) vs{" "}
                          <span>AI 엔진 연동</span> 및 인터페이스 설계 (클라우드
                          고려)
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="proto-step">
                        <div className="proto-name">사용자 UI/UX 설계</div>
                        <div className="proto-desc">
                          API, 반자동 등 테스트 환경 구성 (GPU 활용 등){" "}
                          <span>사용자 결과 중심 화면</span> 시뮬레이션
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="proto-step">
                        <div className="proto-name">
                          테스트 및 해양기업 피드백
                        </div>
                        <div className="proto-desc">
                          수요vs공급기업간 시나리오 기반 테스트 수행{" "}
                          <span>(기업 사용자 대상 GPU 기반 Open-lab제공)</span>
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="proto-step">
                        <div className="proto-name">
                          기업 적용 고도화 계획 수립
                        </div>
                        <div className="proto-desc">
                          기업 내 최종 도입 위한 요구사항 및 기능 도출{" "}
                          <span>기업 AX〮DX 현황</span> 감안 로드맵 수립
                        </div>
                      </div>
                    </div>

                    <div className="proto-notice">
                      ✓ 기업 업무 프로세스와 AI 모델 특성 간 연계성 고려
                    </div>
                  </div>

                  <div className="sub-panel" data-reveal data-delay="0.3">
                    <div className="sub-panel-title">
                      AI Quick Innovation PoC 절차
                    </div>

                    <div className="poc-grid">
                      <div className="poc-step">
                        <div className="poc-name">목표 설정 및 범위 정의</div>
                        <div className="poc-desc">
                          과제별 AI 적용 가능성 검토(예측, 분류, 추천 등)
                          <span>AI 핵심 검증 기능 및 성과지표 정의 </span>
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="poc-step">
                        <div className="poc-name">데이터수집 및 정제</div>
                        <div className="poc-desc">
                          기업 <span>내부 데이터 확보</span>(DB, 시스템 로그 등){" "}
                          <span>내부 데이터 확보</span>
                          (결측/이상치 처리, 데이터셋 구축)
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="poc-step">
                        <div className="poc-name">AI 모델 개발/적용</div>
                        <div className="poc-desc">
                          <span>AI 알고리즘</span>(머신러닝, 딥러닝, NLP 등)
                          감안한 AI PoC 모델 개발(튜닝)
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="poc-step">
                        <div className="poc-name">테스트 및 실증</div>
                        <div className="poc-desc">
                          <span>AI 모델 기술 검증</span> (실제 업무 속도,
                          정확도, 성능 비교)
                        </div>
                      </div>
                      <div className="proto-arrow">▶</div>
                      <div className="poc-step">
                        <div className="poc-name">결과 분석 및 시사점</div>
                        <div className="poc-desc">
                          기업 내 적용 가능성, 한계성 등{" "}
                          <span>기업 DX 속도 감안한 결과보고</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service02-02" ref={sec02Ref} id="s0202">
        <div className="sub-page-info" data-reveal>
          <div className="sub-inner">
            <h2 className="title">
              Manufacturing AI
              <br />
              Platform 구축
            </h2>
            <p className="desc">
              동국산업그룹 DX/AX 중장기 로드맵 기반의 단계 별 실행 및 구축 실증
              노하우를 바탕으로 다양한 제조 산업의 맞춤형 AI 기반 DX/AX Platform
              구축
            </p>
          </div>
        </div>

        <div className="service02-02-01">
          <div className="ncore-wrap">
            <div className="ncore-diagram">
              <div className="sub-inner">
                <div className="ncore-diacram-con">
                  <div className="ncore-bg-glow" />
                  <div className="ncore-ring ncore-ring1" />
                  <div className="ncore-ring ncore-ring2" />

                  <div className="ncore-center-node">
                    <div className="ncore-cn-sub">AI 기반 제조산업</div>
                    <div className="ncore-cn-sub">DX/AX 핵심 플랫폼</div>
                    <div className="ncore-cn-main">
                      N·Core
                      <br />
                      Factory AI
                    </div>
                    
                  </div>

                  <div className="ncore-satellites-wrap">
                    {satellites.map((s) => (
                      <div
                        key={s.id}
                        className={`ncore-satellite${active === s.idx ? " active" : ""}`}
                        style={
                          isMobile ? {} : { position: "absolute", ...s.style }
                        }
                        onClick={() => setActive(s.idx)}
                        data-reveal="scale"
                        data-delay={`${s.idx * 0.08}`}
                      >
                        <div className="ncore-sat-box">
                          <div className="ncore-sat-label">{s.label}</div>
                          <div className="ncore-sat-name">{s.name}</div>
                          <div className="ncore-sat-desc">{s.desc}</div>
                          <div className="ncore-sat-eng">{s.eng}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ncore-detail-area sub-inner" data-reveal>
              <div className="ncore-detail-nav">
                {data.map((item, i) => (
                  <div
                    key={i}
                    className={`ncore-nav-item${active === i ? " active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span>{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>

              <div className="ncore-detail-card">
                <div className="ncore-detail-top">
                  <div className="ncore-detail-icon">{d.icon}</div>
                  <div>
                    <div className="ncore-detail-name">{d.name}</div>
                    <div className="ncore-detail-sub">{d.sub}</div>
                  </div>
                </div>
                <div className="ncore-detail-bottom">
                  <div className="ncore-detail-img">
                    {d.img.map((src, i) => (
                      <div>
                        <img
                          key={i}
                          src={src}
                          alt=""
                          className="ncore-detail-img-item"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ncore-detail-text">
                    <div className="ncore-detail-body">{d.body}</div>
                    <div className="ncore-detail-tags">
                      {d.tags.map((t, i) => (
                        <span key={i} className="ncore-detail-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
