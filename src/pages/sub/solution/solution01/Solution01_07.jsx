import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionMokup from "@/components/sub/SolutionMokup";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_07";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

export default function Solution01_07() {
  const tr = useTr(en);

  const icmsFeatures = trArr(tr, "features.items", [
    "대시보드를 통해 각 통제 항목의 업무 현황 및 전체 평가 결과를 한눈에 확인",
    "전사 수준의 RCM 등록 및 관리 기능 제공",
    "통제 구분별 RCM 등록, 미비점 관리, 설계 수행 내역 및 연동 결재 기능 제공",
    "전사 수준 및 업무 수준의 운영평가 기능 제공",
  ]);

  const icmsMokups = [
    {
      title: tr("mokup.items.0.title", "대시보드"),
      desc: (
        <>
          {tr(
            "mokup.items.0.desc",
            "대시보드를 통해 각 통제 항목에 대한 업무 현황 및 전체적인 평과 결과에 대한 내용이 확인 가능 합니다.",
          )}
        </>
      ),
      imgSrc: "/images/sub/icms_mokup01.svg",
    },
    {
      title: tr("mokup.items.1.title", "설계(RCM)등록 - ELC"),
      desc: <>{tr("mokup.items.1.desc", "전사수준 RCM 등록 기능을 제공하고 있습니다.")}</>,
      imgSrc: "/images/sub/icms_mokup02.jpg",
    },
  ];

  const userItems = trArr(tr, "diagram.userItems", [
    "대표이사", "감사위원", "내부회계관리자", "내부회계전담조직팀원", "통제수행 현업팀장", "통제수행 현업팀원", "관리자",
  ]);
  const myWorkItems = trArr(tr, "diagram.myWorkItems", ["진행현황관리(Dashboard)", "위임관리"]);
  const prepItems = trArr(tr, "diagram.prepItems", ["통제기간관리", "일정관리", "Scoping", "위험평가관리"]);
  const designItems = trArr(tr, "diagram.designItems", ["전사수준(ELC)", "설계RCM관리", "업무수준(PLC)"]);
  const operateItems = trArr(tr, "diagram.operateItems", [
    "전사수준(ELC)", "RCM 샘플수확정관리", "평가수행예외관리", "평가승인관리", "평가미비점관리",
  ]);
  const reportItems = trArr(tr, "diagram.reportItems", ["보고서등록", "운영실태보고서", "평가보고서"]);
  const standardItems = trArr(tr, "diagram.standardItems", ["코드관리", "메뉴관리", "권한관리", "결제관리"]);
  const erpModules = trArr(tr, "diagram.erpModules", ["영업", "구매", "MES", "인사/급여", "회계관리", "원가관리"]);

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-07.jpg"
          label={tr("intro.label", "ICMS")}
          description={
            <>
              {tr("intro.d1", "내부통제 절차 정립과 외감법 제도 개정에")} <br />
              {tr("intro.d2", "효율적으로 대응할 수 있는 최적의 내부회계 솔루션")}
            </>
          }
        />
        <SolutionFetures items={icmsFeatures} title={tr("features.title", "내부통제를 더 체계적이고 스마트하게")} />

        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>
                {tr("mokup.title1", "효율적인 내부회계 관리를")} <br />
                {tr("mokup.title2", "지원하는 주요 기능")}
              </h3>
            </div>
            <div className="solution-mokup-items">
              {icmsMokups.map(({ title, desc, imgSrc }, index) => (
                <SolutionMokup key={index} title={title} desc={desc} imgSrc={imgSrc} />
              ))}
            </div>
          </div>
        </div>
        <div className="icms-diagram">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("diagram.title", "구성도 자세히 알아보기")}</h3>
            </div>
            <div className="icms-body">
              <div className="icms-user-box">
                <div className="icms-user-header">{tr("diagram.userLabel", "사용자")}</div>
                <div className="icms-user-content">
                  <ul>
                    {userItems.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="icms-if-area">
                <div className="icms-if-arrow icms-if-arrow--both">
                  <span className="icms-if-line" />
                </div>
              </div>

              <div className="icms-center-col">
                <div className="icms-main-box">
                  <div className="icms-main-header">{tr("diagram.mainLabel", "내부회계관리시스템(ICMS)")}</div>
                  <div className="icms-main-content">
                    <div className="icms-row">
                      <div className="icms-section">
                        <div className="icms-section-label">{tr("diagram.myWorkLabel", "나의업무")}</div>
                        <ul>
                          {myWorkItems.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">{tr("diagram.prepLabel", "평가준비")}</div>
                        <ul>
                          {prepItems.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">{tr("diagram.designLabel", "설계평가")}</div>
                        <ul>
                          {designItems.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="icms-row">
                      <div className="icms-section">
                        <div className="icms-section-label">{tr("diagram.operateLabel", "운영평가")}</div>
                        <ul>
                          {operateItems.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">{tr("diagram.reportLabel", "평가보고")}</div>
                        <ul>
                          {reportItems.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">{tr("diagram.standardLabel", "기준")}</div>
                        <ul>
                          {standardItems.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="icms-bottom-if">
                  <div className="icms-if-arrow icms-if-arrow--vertical">
                    <span className="icms-if-line--v" />
                    <span className="icms-if-label">{tr("diagram.ifLabel", "I/F")}</span>
                    <span className="icms-if-line--v" />
                  </div>
                </div>

                <div className="icms-bottom-area">
                  <div className="icms-side-box">
                    <div className="icms-side-header">{tr("diagram.gwLabel", "G/W (그룹웨어)")}</div>
                    <div className="icms-side-content">
                      <div className="icms-side-module">{tr("diagram.gwModule", "전자결재")}</div>
                    </div>
                  </div>
                  <div className="icms-side-box">
                    <div className="icms-side-header">{tr("diagram.nworksLabel", "N·Works 메신저")}</div>
                    <div className="icms-side-content">
                      <div className="icms-side-module icms-side-module--logo">
                        <img
                          src="/images/common/ncore_dark.svg"
                          alt=""
                          style={{ width: "100px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="icms-if-area">
                <div className="icms-if-arrow icms-if-arrow--left">
                  <span className="icms-if-line" />
                  <span className="icms-if-label">{tr("diagram.ifLabel", "I/F")}</span>
                </div>
              </div>

              <div className="icms-erp-box">
                <div className="icms-side-header">{tr("diagram.erpLabel", "ERP")}</div>
                <div className="icms-side-content">
                  {erpModules.map((m) => (
                    <div key={m} className="icms-side-module">{m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("itgc.title", "내부전산통제(ITGC) 시스템")}</h3>
              <p>
                {tr(
                  "itgc.desc",
                  "2018년 개정 외감법에 대응하기 위해 내부회계관리제도 목성 달성을 지워하는 정보기술 일반통제(ITGC)부분을 시스템으로 지원합니다.",
                )}
              </p>
            </div>
            <div className="flow-img">
              <img src="/images/sub/itgc_flow.svg" alt="" />
            </div>
          </div>
        </div>
        <SolutionNoticeCards />
      </div>
    </>
  );
}
