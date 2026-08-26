import SolutionFlow from "@/components/sub/SoluitionFlow";
import SolutionCard from "@/components/sub/SolutionCard";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution02_03";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

const stepIcons = [
  "/images/sub/cmms-ico01.svg",
  "/images/sub/cmms-ico02.svg",
  "/images/sub/cmms-ico03.svg",
  "/images/sub/cmms-ico04.svg",
];

export default function Solution02_03() {
  const tr = useTr(en);

  const cmmsFeatures = trArr(tr, "features.items", [
    "설비보전정보 분석을 통해 예방 예지 보전관리 체계 구축",
    "설비,작업,자재,자원등을 관리할 수 있는 체계화된 시스템 제공",
    "모바일을 활용한 실시간 작업 실적처리",
    "도면의 라인맵을 활용하여 가독성 및 편의성 제공",
  ]);

  const cmmsfeaturesCard = [
    { number: 1, title: tr("card.items.0.title", "사용자 역할 기반 화면 구성"), imgSrc: "/images/sub/cmms_mokup01.jpg", bullets: trArr(tr, "card.items.0.bullets", ["직관적인 UI", "사용자 역할에 맞는 화면 구성"]) },
    { number: 2, title: tr("card.items.1.title", "도면 기반 설비 관리"), imgSrc: "/images/sub/cmms_mokup02.jpg", bullets: trArr(tr, "card.items.1.bullets", ["도면 정보 공유 및 이력 관리", "도면 이미지 마킹 기능 제공"]) },
    { number: 3, title: tr("card.items.2.title", "설비 자재 및 재고 관리"), imgSrc: "/images/sub/cmms_mokup03.jpg", bullets: trArr(tr, "card.items.2.bullets", ["설비 전용 자재 및 재고 관리", "바코드 기반 수불 관리"]) },
    { number: 4, title: tr("card.items.3.title", "모바일 현장 관리"), imgSrc: "/images/sub/cmms_mokup04.jpg", bullets: trArr(tr, "card.items.3.bullets", ["모바일 점검·고장·설비 관리", "바코드·QR코드를 활용한 실적 처리"]) },
    { number: 5, title: tr("card.items.4.title", "라인맵 기반 설비 관리"), imgSrc: "/images/sub/cmms_mokup05.jpg", bullets: trArr(tr, "card.items.4.bullets", ["라인맵을 통한 설비 접근", "작업자 중심의 빠른 업무 처리"]) },
    { number: 6, title: tr("card.items.5.title", "프로젝트 관리"), imgSrc: "/images/sub/cmms_mokup06.jpg", bullets: trArr(tr, "card.items.5.bullets", ["설비 도입 프로젝트 일정 관리", "도입 비용 전표 처리 기능 제공"]) },
    { number: 7, title: tr("card.items.6.title", "예방점검 관리"), imgSrc: "/images/sub/cmms_mokup07.jpg", bullets: trArr(tr, "card.items.6.bullets", ["예방점검 기준에 따른 실적 관리", "점검 기준 및 방법 체계화"]) },
    { number: 8, title: tr("card.items.7.title", "분석 리포트 제공"), imgSrc: "/images/sub/cmms_mokup08.jpg", bullets: trArr(tr, "card.items.7.bullets", ["다양한 형태의 분석 그래프", "사용자 요구사항을 반영한 리포트 제공"]) },
    { number: 9, title: tr("card.items.8.title", "설비 가동현황 모니터링"), imgSrc: "/images/sub/cmms_mokup09.jpg", bullets: trArr(tr, "card.items.8.bullets", ["설비 운영 데이터 실시간 모니터링", "현장 데이터 기반 분석 기능 제공"]) },
  ];

  const steps = [
    { label: "STEP 01", title: tr("step.items.0.title", "수기업무, 점검관리"), items: trArr(tr, "step.items.0.items", ["수기 작업 지시 및 작업 실적 보고", "페이퍼 체크리스트 관리", "도면 및 관련 문서 수기 공유"]) },
    { label: "STEP 02", title: tr("step.items.1.title", "CMMS"), items: trArr(tr, "step.items.1.items", ["기준 DATA 정비(설비계층)", "로드맵 기초단계 구축", "통계 업무 관리로 전환", "Time-based Management"]) },
    { label: "STEP 03", title: tr("step.items.2.title", "IMC"), items: trArr(tr, "step.items.2.items", ["AI 예지보전 기초단계 구축", "설비관제 통합 및 모니터링", "CMMS와 연계 모니터링", "설비 데이터 관리 기준 확립"]) },
    { label: "STEP 04", title: tr("step.items.3.title", "AI&BIG DATA"), items: trArr(tr, "step.items.3.items", ["빅데이터 센터 구축", "설비 데이터 누적 및 분석 모델 구축", "고장, 사고, 불량 예지수명 예측", "Condition-base Management"]) },
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-03.jpg"
          label={tr("intro.label", "CMMS")}
          description={
            <>
              {tr(
                "intro.d1",
                "설비의 도입부터 운영, 보전, 폐기까지 전 과정을 체계적으로 관리하여",
              )}{" "}
              <br />
              {tr("intro.d2", "설비 운영 효율과 생산성을 높이는 설비관리 시스템")}
            </>
          }
        />
        <SolutionFetures items={cmmsFeatures} title={tr("features.title", "설비 운영의 효율을 높이는 CMMS")} />
        <div className="cmms-step">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("step.title", "CMMS STEP")}</h3>
            </div>
            <ul className="st-list">
              {steps.map((s, i) => (
                <li className="st-itm" key={s.label}>
                  <span className="label">{s.label}</span>
                  <i>
                    <img src={stepIcons[i]} alt="" />
                  </i>
                  <div className="text">
                    <h3>{s.title}</h3>
                    <ul>
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SolutionFlow title={tr("flow.title", "프로그램 주요 업무 프로세스")} imgSrc="/images/sub/cmms_flow.png" />

        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("card.title", "스마트 생산을 위한 핵심 기능")}</h3>
              <p>
                {tr(
                  "card.desc",
                  "생산, 설비, 자재, 품질, 재고까지 제조 현장의 모든 업무를 하나의 시스템에서 효율적으로 관리합니다.",
                )}
              </p>
            </div>
            <div className="feature-grid">
              {cmmsfeaturesCard.map((f) => (
                <SolutionCard key={f.number} {...f} />
              ))}
            </div>
          </div>
        </div>
        <SolutionNoticeCards />
      </div>
    </>
  );
}
