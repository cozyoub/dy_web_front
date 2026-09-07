import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/CadMira";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

export default function CadMira() {
  const tr = useTr(en);

  /* ---------------- 01 · WHAT IS CADMIRA ---------------- */

  const pastItemsKo = [
    { label: "버전 혼재", desc: "개인 PC와 부서 폴더, 이메일로 흩어진 도면" },
    { label: "문맥 단절", desc: "생산·품질·구매가 서로 다른 사본으로 판단" },
    {
      label: "수기 재입력",
      desc: "BOM과 메타데이터를 사람이 다시 옮겨 적는 반복",
    },
  ];
  const pastItems = pastItemsKo.map((it, i) => ({
    label: tr(`what.past.items.${i}.label`, it.label),
    desc: tr(`what.past.items.${i}.desc`, it.desc),
  }));

  const targetItemsKo = [
    { label: "REVISION", desc: "최신 도면과 변경 이력이 한눈에" },
    {
      label: "BOM · METADATA",
      desc: "시스템이 바로 쓰는 구조화된 제조 데이터",
    },
    { label: "기업 활용", desc: "PLM·MES·ERP 연동과 AI 학습의 기반" },
  ];
  const targetItems = targetItemsKo.map((it, i) => ({
    label: tr(`what.target.items.${i}.label`, it.label),
    desc: tr(`what.target.items.${i}.desc`, it.desc),
  }));

  const digitalThreadStepsKo = [
    { num: "01", title: "DESIGN", sub: "CAD source" },
    { num: "02", title: "ORGANIZE", sub: "Revision" },
    { num: "03", title: "STRUCTURE", sub: "BOM · Metadata", active: true },
    { num: "04", title: "OPERATE", sub: "Enterprise" },
    { num: "05", title: "LEARN", sub: "Quality · AI" },
  ];
  const digitalThreadSteps = digitalThreadStepsKo.map((s, i) => ({
    ...s,
    title: tr(`what.thread.steps.${i}.title`, s.title),
    sub: tr(`what.thread.steps.${i}.sub`, s.sub),
  }));

  const platformCardsKo = [
    {
      title: "WebCAD",
      desc: "설치 없이 브라우저에서 쓰는 DWG 작업 공간",
      status: "PILOT",
    },
    {
      title: "Drive",
      desc: "도면-리비전 이력을 한곳에 정리해 저장하는 곳",
      status: "TARGET",
    },
    {
      title: "Converter",
      desc: "반복 변환을 자동화하는 포맷 파이프라인",
      status: "TARGET",
    },
    {
      title: "Extract",
      desc: "도면에서 객체·BOM·메타데이터를 추출",
      status: "TARGET",
    },
    {
      title: "AI",
      desc: "정리된 도면 데이터로 답하는 제조 AI",
      status: "VISION",
    },
  ];
  const platformCards = platformCardsKo.map((c, i) => ({
    ...c,
    title: tr(`what.platform.${i}.title`, c.title),
    desc: tr(`what.platform.${i}.desc`, c.desc),
  }));

  const detailCardsKo = [
    {
      badge: "TARGET",
      label: "01 · Knowledge Graph",
      title: "부품 중심 지식 그래프",
      desc: "정리된 도면을 부품 중심의 관계 데이터로 확장합니다. 도면-리비전-BOM-검사-공급사-공정이 하나의 그래프로 연결됩니다.",
      flow: {
        left: ["Drawing", "Revision"],
        center: "PART-001",
        right: ["BOM", "Inspect"],
      },
    },
    {
      badge: "TARGET",
      label: "02 · Data Pipeline",
      title: "CAD → 제조 데이터 전환",
      desc: "CAD 파일을 시스템이 이해하는 제조 데이터로 바꿉니다. 원본은 보존하고, 예외는 분리하고, 결과는 사람이 검수합니다.",
      flow: {
        left: ["CAD FILES"],
        center: "CONVERT · EXTRACT",
        right: ["BOM · META"],
      },
    },
    {
      badge: "VISION",
      label: "03 · CAD Intelligence",
      title: "근거를 추적하는 제조 AI",
      desc: '"REV C 이후 변경된 부품은?" — 정리된 도면 데이터에 질문하고, 답변에서 원본 도면까지 되짚어 확인합니다.',
      flow: {
        left: ["QUESTION"],
        center: "KNOWLEDGE",
        right: ["SOURCE TRACE"],
      },
    },
  ];
  const detailCards = detailCardsKo.map((c, i) => ({
    ...c,
    label: tr(`what.detail.${i}.label`, c.label),
    title: tr(`what.detail.${i}.title`, c.title),
    desc: tr(`what.detail.${i}.desc`, c.desc),
    flow: {
      left: trArr(tr, `what.detail.${i}.flow.left`, c.flow.left),
      center: tr(`what.detail.${i}.flow.center`, c.flow.center),
      right: trArr(tr, `what.detail.${i}.flow.right`, c.flow.right),
    },
  }));

  const riskItemsKo = [
    { title: "Revision Risk", desc: "서로 다른 도면으로 내리는 판단" },
    { title: "Process Delay", desc: "같은 정보를 다시 찾고 입력" },
    { title: "Knowledge Loss", desc: "변경 이유가 파일 밖으로 사라짐" },
  ];
  const riskItems = riskItemsKo.map((r, i) => ({
    title: tr(`what.risk.${i}.title`, r.title),
    desc: tr(`what.risk.${i}.desc`, r.desc),
  }));

  /* ---------------- 02 · WORKING EVIDENCE ---------------- */

  const calloutFeaturesKo = [
    { num: 1, title: "WASM Runtime", sub: "WebGPU 렌더" },
    { num: 2, title: "Drawing Tools", sub: "그리기·수정" },
    { num: 3, title: "Layers · Properties", sub: "레이어·속성" },
  ];
  const calloutFeatures = calloutFeaturesKo.map((c, i) => ({
    ...c,
    title: tr(`evidence.callouts.${i}.title`, c.title),
    sub: tr(`evidence.callouts.${i}.sub`, c.sub),
  }));

//   const calloutMarkers = [
//     { num: 1, top: "27%", left: "55%" },
//     { num: 2, top: "48%", left: "17%" },
//     { num: 3, top: "38%", left: "80%" },
//   ];

  const featureIconsKo = [
    {
      title: "DWG",
      sub: "Editing",
      desc: "도면 편집",
      icon: "/images/sub/ico_cad_edit.svg",
    },
    {
      title: "Layer",
      sub: "Management",
      desc: "레이어 관리",
      icon: "/images/sub/ico_cad_layer.svg",
    },
    {
      title: "Properties",
      desc: "속성 탐색",
      icon: "/images/sub/ico_cad_props.svg",
    },
    {
      title: "Revision",
      desc: "변경 문맥",
      icon: "/images/sub/ico_cad_revision.svg",
    },
    {
      title: "Collaboration",
      desc: "온라인 검토",
      icon: "/images/sub/ico_cad_collab.svg",
    },
    {
      title: "Permission",
      desc: "접근 통제",
      icon: "/images/sub/ico_cad_permission.svg",
    },
  ];
  const featureIcons = featureIconsKo.map((f, i) => ({
    ...f,
    title: tr(`evidence.features.${i}.title`, f.title),
    sub: f.sub ? tr(`evidence.features.${i}.sub`, f.sub) : undefined,
    desc: tr(`evidence.features.${i}.desc`, f.desc),
  }));

  const metricsKo = [
    {
      tag: "PRODUCTIVITY",
      title: "검토 시간",
      desc: "설치·업데이트, 도면 탐색과 검토 대기",
      color: "blue",
    },
    {
      tag: "QUALITY",
      title: "Revision 오류",
      desc: "구버전 사용과 변경 근거 추적",
      color: "green",
    },
    {
      tag: "OPERATION",
      title: "자동 변환",
      desc: "수동 처리, 성공·예외와 원본 추적",
      color: "orange",
    },
    {
      tag: "SECURITY",
      title: "데이터 통제",
      desc: "외부 의존, 반입 이력과 감사 근거",
      color: "red",
    },
  ];
  const metrics = metricsKo.map((m, i) => ({
    ...m,
    title: tr(`evidence.metrics.${i}.title`, m.title),
    desc: tr(`evidence.metrics.${i}.desc`, m.desc),
  }));

  /* ---------------- 03 · YOUR INDUSTRY, YOUR NETWORK ---------------- */

  const industryRowsKo = [
    {
      industry: "자동차",
      sub: "AUTOMOTIVE",
      problem: "수많은 부품 Revision과 협력사 배포문",
      solution: "WebCAD + Drive + Extract — 최신 도면 탐색·전달 확인",
      value: "변경 영향과 기준 도면 추적",
    },
    {
      industry: "조선",
      sub: "SHIPBUILDING",
      problem: "대형 프로젝트와 장기 변경 문맥",
      solution: "WebCAD + Drive + Converter — 도면군 열기·배치 처리",
      value: "변경 계보와 변환 예외 관리",
    },
    {
      industry: "반도체",
      sub: "SEMICONDUCTOR",
      problem: "설비 도면과 전용 보안 경계",
      solution: "Private Cloud + Controlled Data — 정책·접근·계보 검증",
      value: "기업 정책 기반 데이터 통제",
    },
    {
      industry: "방산",
      sub: "DEFENSE",
      problem: "인터넷 차단 환경의 CAD 운영",
      solution: "WASM Offline CAD — 반입·업데이트·롤백",
      value: "보안 운영과 감사 근거 강화",
    },
    {
      industry: "기계",
      sub: "MACHINERY",
      problem: "반복 변환과 3D 재입력",
      solution: "Converter + Extract + Verify — 변환 성공·예외·원본 추적",
      value: "재사용 가능한 제조 데이터화",
    },
  ];
  const industryRows = industryRowsKo.map((r, i) => ({
    ...r,
    industry: tr(`industry.rows.${i}.industry`, r.industry),
    problem: tr(`industry.rows.${i}.problem`, r.problem),
    solution: tr(`industry.rows.${i}.solution`, r.solution),
    value: tr(`industry.rows.${i}.value`, r.value),
  }));

  const deploymentOptionsKo = [
    {
      num: "01",
      title: "Cloud",
      headline: "빠른 시작",
      desc: "프로젝트 단위 검증과 조직 협업으로 가볍게 시작합니다.",
      fit: "일반 제조 업체",
      boundary: "Managed service",
    },
    {
      num: "02",
      title: "Private Cloud",
      headline: "전용 데이터 경계",
      desc: "기업 전용 접근·변경·운영 정책 위에서 운영합니다.",
      fit: "자동차·반도체·중공업",
      boundary: "Dedicated environment",
      active: true,
    },
    {
      num: "03",
      title: "Closed Network",
      headline: "완전 폐쇄망",
      desc: "고객 통제 영역에서 인터넷 비의존으로 운영합니다.",
      fit: "방산·보안 설계·연구소",
      boundary: "Customer controlled",
    },
  ];
  const deploymentOptions = deploymentOptionsKo.map((o, i) => ({
    ...o,
    headline: tr(`industry.deploy.${i}.headline`, o.headline),
    desc: tr(`industry.deploy.${i}.desc`, o.desc),
    fit: tr(`industry.deploy.${i}.fit`, o.fit),
    boundary: tr(`industry.deploy.${i}.boundary`, o.boundary),
  }));

  const deploymentCheckItems = trArr(tr, "industry.check", [
    "Network boundary",
    "Identity & license",
    "Update and rollback",
    "Log & backup",
  ]);

  /* ---------------- 04 · PILOT-LED ADOPTION ---------------- */

  const stagesKo = [
    {
      num: "01",
      title: "DISCOVER",
      headline: "도면 분석",
      desc: "형식·Revision·용량·데이터 흐름 진단",
      badge: "WEEK 0",
    },
    {
      num: "02",
      title: "VALIDATE",
      headline: "Pilot 검증",
      desc: "대표 업무·기준선 수립·전후 측정",
      badge: "PILOT",
    },
    {
      num: "03",
      title: "SECURE",
      headline: "보안·폐쇄망 검증",
      desc: "네트워크·라이선스·반입·롤백",
      badge: "REVIEW",
    },
    {
      num: "04",
      title: "SCALE",
      headline: "전사 배포",
      desc: "조직·협력사·기업 시스템 확장",
      badge: "ROLLOUT",
    },
  ];
  const stages = stagesKo.map((s, i) => ({
    ...s,
    headline: tr(`pilot.stages.${i}.headline`, s.headline),
    desc: tr(`pilot.stages.${i}.desc`, s.desc),
  }));

  return (
    <div className="cadmira-page">
      <SolutionIntro
        imageSrc="/images/sub/solution-cadmira.jpg"
        label={tr("intro.label", "CADMira")}
        showLogo={false}
        description={
          <>
            {tr("intro.d1", "CADMira는 파일을 관리하던 조직을,")}
            <br />
            {tr("intro.d2", "제조 지식을 축적하는 조직으로 바꿉니다.")}
          </>
        }
      />

      {/* 01 · WHAT IS CADMIRA */}
      <div className="wic-page">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>{tr("what.title", "CADMira란?")}</h3>
            <p>
              {tr(
                "what.desc1",
                "제조 경쟁력의 기준이 '얼마나 빨리 그리는가'에서",
              )}{" "}
              <strong>
                {tr("what.desc2", "도면 데이터를 얼마나 잘 활용하는가")}
              </strong>
              {tr("what.desc3", "로 이동하고 있습니다.")}
            </p>
          </div>

          <div className="wic-compare-row">
            <div className="wic-compare-box">
              <span className="wic-compare-label">
                {tr("what.past.label", "PAST · FILE SILOS")}
              </span>
              <p className="wic-compare-headline">
                {tr(
                  "what.past.headline",
                  "도면은 어디에나 있지만, 어디에도 연결되어 있지 않습니다.",
                )}
              </p>
              <ul>
                {pastItems.map((it) => (
                  <li key={it.label}>
                    <strong>{it.label}</strong> {it.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="wic-compare-mid">
              <span className="wic-compare-arrow">→</span>
              <span className="wic-compare-mid-label">CADMira</span>
              <span className="wic-compare-arrow">→</span>
            </div>

            <div className="wic-compare-box wic-compare-box-target">
              <span className="wic-compare-label wic-compare-label-target">
                {tr("what.target.label", "TARGET · CONNECTED DATA")}
              </span>
              <p className="wic-compare-headline">
                {tr(
                  "what.target.headline",
                  "잘 정리된 도면 데이터가 모든 판단의 기준이 됩니다.",
                )}
              </p>
              <ul>
                {targetItems.map((it) => (
                  <li key={it.label}>
                    <strong>{it.label}</strong> {it.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="wic-thread-panel">
            <div className="wic-thread-title-row">
              <span>{tr("what.thread.title", "DIGITAL THREAD")}</span>
              <span>
                {tr(
                  "what.thread.sub",
                  "WORKSPACE → DATA PLATFORM → INTELLIGENCE",
                )}
              </span>
            </div>

            <div className="wic-thread-steps">
              {digitalThreadSteps.map((s, i) => (
                <div className="wic-thread-step-wrap" key={s.num}>
                  <div
                    className={`wic-thread-step${s.active ? " wic-thread-step-active" : ""}`}
                  >
                    <span className="wic-thread-num">{s.num}</span>
                    <strong>{s.title}</strong>
                    <span className="wic-thread-sub">{s.sub}</span>
                  </div>
                  {i < digitalThreadSteps.length - 1 && (
                    <span className="wic-thread-chevron">›</span>
                  )}
                </div>
              ))}
            </div>

            <div className="wic-platform-grid">
              {platformCards.map((c) => (
                <div className="wic-platform-card" key={c.title}>
                  <strong>{c.title}</strong>
                  <p>{c.desc}</p>
                  <span
                    className={`wic-status-badge wic-status-${c.status.toLowerCase()}`}
                  >
                    <i />
                    {c.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="wic-thread-footer">
              <span>PLM &nbsp;&nbsp; MES &nbsp;&nbsp; ERP</span>
              <span>
                {tr(
                  "what.thread.footer",
                  "CONDITIONAL · ENTERPRISE INTEGRATION",
                )}
              </span>
            </div>
          </div>

          <div className="wic-detail-grid">
            {detailCards.map((c) => (
              <div className="wic-detail-card" key={c.label}>
                <div className="wic-detail-card-head">
                  <span>{c.label}</span>
                  <span
                    className={`wic-status-badge wic-status-${c.badge.toLowerCase()}`}
                  >
                    <i />
                    {c.badge}
                  </span>
                </div>
                <strong>{c.title}</strong>
                <p>{c.desc}</p>
                <div className="wic-mini-flow">
                  <div className="wic-mini-flow-col">
                    {c.flow.left.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="wic-mini-flow-arrow">→</span>
                  <div className="wic-mini-flow-center">{c.flow.center}</div>
                  <span className="wic-mini-flow-arrow">→</span>
                  <div className="wic-mini-flow-col">
                    {c.flow.right.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="wic-risk-row">
            {riskItems.map((r) => (
              <div className="wic-risk-item" key={r.title}>
                <strong>{r.title}</strong>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 02 · WORKING EVIDENCE */}
      <div className="working-evidence">
        <div className="sub-inner">
          <div className="we-hero">
            <div className="solution-title">
              <h3>
                {tr("evidence.title1", "설치 없이, 브라우저에서 DWG 작업이")}
                <br />
                {tr("evidence.title2", "시작됩니다")}
              </h3>
              <p className="we-desc">
                {tr(
                  "evidence.desc1",
                  "뷰어에 그치지 않고, 설계·검토·배포의 문맥이 연결되는",
                )}{" "}
                <strong>Enterprise CAD Workspace</strong>
                {tr("evidence.desc2", "를 지향합니다.")}
              </p>
            </div>
            <span className="we-badge">
              <i className="we-badge-dot" />
              {tr("evidence.badge", "OBSERVED · LOCAL RUNTIME")}
            </span>
          </div>
          <div className="we-screenshot">
            <img src="/images/sub/cadmira-screen.png" alt="CADMira 화면" />
            {/* {calloutMarkers.map((m) => (
              <span
                className="we-marker"
                key={m.num}
                style={{ top: m.top, left: m.left }}
              >
                {m.num}
              </span>
            ))} */}
          </div>

          <div className="we-callout-row">
            {calloutFeatures.map((c) => (
              <div className="we-callout-item" key={c.num}>
                <span className="we-callout-num">{c.num}</span>
                <strong>{c.title}</strong>
                <span>· {c.sub}</span>
              </div>
            ))}
          </div>

          <div className="we-caption-row">
            <p>
              {tr(
                "evidence.caption1",
                "WebCAD 인터페이스 참고 화면 · 도면 관리 · 레이어 · 속성 탐색",
              )}
            </p>
            <p>
              {tr(
                "evidence.caption2",
                "CADMira 제작 UI 레퍼런스 · 실사용 캡처 아님",
              )}
            </p>
          </div>

          <div className="we-compare-row">
            <div className="we-compare-box we-compare-before">
              <span className="we-compare-label">BEFORE</span>
              <p>{tr("evidence.before", "설치형 CAD — 개별 작업·파일 전달")}</p>
            </div>
            <span className="we-compare-arrow">→</span>
            <div className="we-compare-box we-compare-target">
              <span className="we-compare-label">
                TARGET · ENTERPRISE CAD WORKSPACE
              </span>
              <p>
                {tr("evidence.target", "Browser CAD — 조직 문맥·통제된 접근")}
              </p>
            </div>
          </div>

          <div className="we-feature-grid">
            {featureIcons.map((f) => (
              <div className="we-feature-item" key={f.title}>
                <img src={f.icon} alt={f.title} />
                <div className="we-feature-text">
                  <strong>
                    {f.title}
                    {f.sub && (
                      <>
                        <br />
                        {f.sub}
                      </>
                    )}
                  </strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="we-metric-title-row">
            <h3>
              {tr("evidence.metricTitle", "성과는 약속하지 않고, 측정합니다")}
            </h3>
            <p>
              {tr(
                "evidence.metricNote",
                "도입 판단은 같은 대표 도면의 Pilot 전후 지표로 합니다.",
              )}
            </p>
          </div>

          <div className="we-metric-grid">
            {metrics.map((m) => (
              <div
                className={`we-metric-card we-metric-${m.color}`}
                key={m.tag}
              >
                <span className="we-metric-tag">{m.tag}</span>
                <strong>{m.title}</strong>
                <p>{m.desc}</p>
                <span className="we-metric-flow">
                  BASELINE → PILOT → MEASURE
                </span>
              </div>
            ))}
          </div>

          <div className="we-roi-note">
            <span className="we-roi-badge">ROI PRINCIPLE</span>
            <p>
              {tr(
                "evidence.roi",
                "측정 항목과 기준선은 Pilot 시작 전에 고객과 합의하고, 도입 판단은 그 지표로 내립니다.",
              )}
            </p>
          </div>
        </div>
      </div>

      {/* 03 · YOUR INDUSTRY, YOUR NETWORK */}
      <div className="yi-page">
        <div className="sub-inner">
          <div className="yi-hero">
            <div className="solution-title">
              <h3>
                {tr("industry.title1", "당신의 산업에서, 당신의 네트워크")}
                <br />
                {tr("industry.title2", "안에서")}
              </h3>
              <p className="yi-desc">
                {tr(
                  "industry.desc",
                  "산업별 대표 문제를 제품 조합과 Pilot 검증 항목으로 구체화하고, 데이터 경계에 닿는 배포 경로를 검증합니다.",
                )}
              </p>
            </div>
            <span className="yi-badge">
              {tr("industry.badge", "CONDITIONAL · PILOT DEPLOYMENT PATH")}
            </span>
          </div>
          <div className="yi-table">
            <div className="yi-table-head">
              <span>INDUSTRY</span>
              <span>PROBLEM</span>
              <span>SOLUTION</span>
              <span>VALUE</span>
            </div>
            {industryRows.map((r) => (
              <div className="yi-table-row" key={r.sub}>
                <span className="yi-table-industry">
                  <strong>{r.industry}</strong>
                  <em>{r.sub}</em>
                </span>
                <span>{r.problem}</span>
                <span>{r.solution}</span>
                <span>{r.value}</span>
              </div>
            ))}
          </div>

          <div className="yi-note">
            <span className="yi-note-badge">PILOT PRINCIPLE</span>
            <p>
              {tr(
                "industry.note",
                "고객 사례처럼 보이는 보장 수치 대신, 대표 도면과 실제 보안 정책으로 적용 가능성을 검증합니다.",
              )}
            </p>
          </div>

          <div className="yi-deploy-grid">
            {deploymentOptions.map((o) => (
              <div
                className={`yi-deploy-card${o.active ? " yi-deploy-card-active" : ""}`}
                key={o.num}
              >
                <span className="yi-deploy-label">
                  {o.num} · {o.title}
                </span>
                <strong>{o.headline}</strong>
                <p>{o.desc}</p>
                <div className="yi-deploy-meta">
                  <span>
                    {tr("industry.fitLabel", "적합")}: {o.fit}
                  </span>
                  <span>
                    {tr("industry.boundaryLabel", "경계")}: {o.boundary}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="yi-flow-panel">
            <div className="yi-flow-title-row">
              <span>
                {tr("industry.flowTitle", "Closed Network Deployment")}
              </span>
              <span>
                {tr("industry.flowSub", "Conditional · Customer Environment")}
              </span>
            </div>

            <div className="yi-flow-row">
              <div className="yi-flow-box">
                <strong>APPROVED PACKAGE</strong>
                <p>App · WASM · Manifest</p>
                <span>
                  {tr("industry.approvedNote", "Signed release bundle")}
                </span>
              </div>

              <span className="yi-flow-arrow">›</span>

              <div className="yi-flow-box yi-flow-box-group">
                <span className="yi-flow-group-label">
                  {tr(
                    "industry.customerNetwork",
                    "Customer Network · Conditional",
                  )}
                </span>
                <div className="yi-flow-group-items">
                  <div>
                    <strong>BROWSER</strong>
                    <p>WebCAD Workspace</p>
                  </div>
                  <div className="yi-flow-group-item-active">
                    <strong>RUNTIME</strong>
                    <p>CADMira WASM</p>
                  </div>
                  <div>
                    <strong>LOCAL SERVER</strong>
                    <p>Package Log</p>
                  </div>
                </div>
              </div>

              <span className="yi-flow-arrow">›</span>

              <div className="yi-flow-box">
                <strong>ENTERPRISE</strong>
                <p>PLM / MES / ERP</p>
                <span>
                  {tr("industry.enterpriseNote", "Conditional integration")}
                </span>
              </div>
            </div>

            <div className="yi-check-row">
              <strong>{tr("industry.checkTitle", "Deployment Check")}</strong>
              {deploymentCheckItems.map((item, i) => (
                <span key={item}>
                  {String(i + 1).padStart(2, "0")} {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 04 · PILOT-LED ADOPTION */}
      <div className="pla-page">
        <div className="sub-inner">
          <div className="solution-title">
            <h3 className="pla-title">
              {tr("pilot.title", "작게 검증하고, 기업 플랫폼으로 확장합니다")}
            </h3>
             <p className="pla-desc">
            {tr(
              "pilot.desc",
              "기술 데모가 아니라 실제 도면·보안 정책·운영 지표로 도입 가치를 확인합니다.",
            )}
          </p>
          </div>
         

          <div className="pla-stage-grid">
            {stages.map((s) => (
              <div
                className={`pla-stage-card${s.active ? " pla-stage-card-active" : ""}`}
                key={s.num}
              >
                <span className="pla-stage-label">
                  {s.num} · {s.title}
                </span>
                <strong>{s.headline}</strong>
                <p>{s.desc}</p>
                <span className="pla-stage-badge">{s.badge}</span>
              </div>
            ))}
          </div>

          <div className="pla-note">
            <span className="pla-note-badge">PILOT CHECKLIST</span>
            <p>
              {tr(
                "pilot.checklist",
                "표본 도면 5~10장 · 대표 업무 시나리오 · 보안·네트워크 정책 · 측정 기준 합의 — 이 네 가지면 Pilot을 시작할 수 있습니다.",
              )}
            </p>
          </div>
        </div>
      </div>
      <SolutionNoticeCards/>
    </div>
  );
}
