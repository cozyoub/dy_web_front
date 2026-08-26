import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionCard from "@/components/sub/SolutionCard";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_05";

export default function Solution01_05() {
  const tr = useTr(en);

  const crmFeatures = [
    tr("features.items.0", "제조업 중심의 고객 관계관리 시스템"),
    tr("features.items.1", "메일/SMS/FAX 문서의 자동 수집 및 분석 데이터 활용"),
    tr("features.items.2", "보안 문서 관리로 사내/외 문서 검색 기능"),
    tr("features.items.3", "모든 영업 업무를 한곳에서!"),
    tr("features.items.4", "다양한 통계 분석자료 제공"),
    tr("features.items.5", "크로스 브라우징 지원"),
  ];

  const crmEffects = [
    {
      icon: "/images/sub/ico_effect01.svg",
      title: tr("effect.items.0.title", "고객 경험 개선"),
      desc: tr("effect.items.0.desc", "고객 담당자와 현장 서비스 기술자가 고객을 360도 전방위로 파악해 개인화된 고객 경험을 제공합니다."),
    },
    {
      icon: "/images/sub/ico_effect02.svg",
      title: tr("effect.items.1.title", "고객 유지율 상승"),
      desc: tr("effect.items.1.desc", "서비스 개인화와 실시간 분석을 통해 고객 충성도를 확보하고 최적의 고객 접점을 구축합니다."),
    },
    {
      icon: "/images/sub/ico_effect03.svg",
      title: tr("effect.items.2.title", "매출 증대"),
      desc: tr("effect.items.2.desc", "영업 이력 자동화와 리드 관리를 통해 판매 파이프라인 가시성을 높이고 매출 향상을 지원합니다."),
    },
    {
      icon: "/images/sub/ico_effect04.svg",
      title: tr("effect.items.3.title", "프로세스 효율 증대"),
      desc: tr("effect.items.3.desc", "자동화된 프로세스로 영업, 마케팅, 서비스 팀의 업무량을 줄이고 더 높은 성과를 달성합니다."),
    },
  ];

  const crmCard = [
    {
      number: 1,
      title: tr("card.items.0.title", "고객 관리"),
      imgSrc: "/images/sub/crm_screen01.jpg",
      bullets: [tr("card.items.0.bullets.0", "기존고객 ERP I/F 및 잠재고객 관리를 통해 데이터 회사 자산화")],
    },
    {
      number: 2,
      title: tr("card.items.1.title", "고객접촉 관리"),
      imgSrc: "/images/sub/crm_screen02.jpg",
      bullets: [tr("card.items.1.bullets.0", "접촉 유형 및 단계별 진행 관리")],
    },
    {
      number: 3,
      title: tr("card.items.2.title", "메일 관리"),
      imgSrc: "/images/sub/crm_screen03.jpg",
      bullets: [tr("card.items.2.bullets.0", "메일 송수신을 통해 영업담당자 영업활동으로 임식 기능 제공")],
    },
    {
      number: 4,
      title: tr("card.items.3.title", "현황 관리"),
      imgSrc: "/images/sub/crm_screen04.jpg",
      bullets: [],
    },
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-05.jpg"
          label={tr("intro.label", "CRM")}
          description={
            <>
              {tr(
                "intro.d",
                "고객 정보와 상호작용 데이터를 통합 관리해 고객 관계 강화와 매출 증대를 지원하는 CRM 솔루션",
              )}
            </>
          }
        />
        <SolutionFetures
          items={crmFeatures}
          title={tr("features.title", "고객과 영업을 하나로 연결하다")}
        />
        <SolutionEffect
          title={
            <>
              {tr("effect.title1", "고객과 비즈니스의 성장을 이끄는")}
              <br />
              {tr("effect.title2", "CRM이 만드는 더 스마트한 비즈니스 환경")}
            </>
          }
          desc={tr("effect.desc", "고객 경험 혁신부터 업무 효율 향상까지, CRM 도입이 기업 전반의 경쟁력을 강화합니다.")}
          items={crmEffects}
        />
        <div className="crm-diagram">
          <div className="sub-inner">
            <h2 className="sub-title">{tr("diagram.title", "N·Core CRM 시스템 구성도")}</h2>
            <div className="crm-body">
              <div className="crm-main-box">
                <div className="crm-main-header">
                  <img src="/images/sub/ncore-logo-wh.svg" /> <span>{tr("diagram.crmLabel", "CRM")}</span>
                </div>

                <div className="crm-main-content">
                  <div className="crm-section">
                    <div className="crm-section-label">{tr("diagram.customerLabel", "고객관리")}</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        {["고객 등록", "접촉 관리", "접촉 현황", "활동 관리", "스케줄 관리", "메일 관리"].map(
                          (item, i) => (
                            <div key={item} className="crm-module">
                              {tr(`diagram.customerModules.${i}`, item)}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="crm-section">
                    <div className="crm-section-label">{tr("diagram.salesLabel", "영업관리")}</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        {[
                          "수주 등록",
                          "수주 진행 현황",
                          "출하 의뢰 등록",
                          "출하 현황",
                          "매출 등록",
                          "매출 현황",
                          "출하 현황",
                          "매출 등록",
                        ].map((item, i) => (
                          <div key={i} className="crm-module">
                            {tr(`diagram.salesModules.${i}`, item)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="crm-section">
                    <div className="crm-section-label">{tr("diagram.clientLabel", "고객")}</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        <div className="crm-module crm-module--tall">
                          {tr("diagram.clientTall", "검수 조건\n매출 관리")
                            .split("\n")
                            .map((line, i, arr) => (
                              <span key={i}>
                                {line}
                                {i < arr.length - 1 && <br />}
                              </span>
                            ))}
                        </div>
                        <div className="crm-module">{tr("diagram.clientSingle", "매출 확인")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="crm-section">
                    <div className="crm-section-label">{tr("diagram.commonLabel", "공통")}</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        {[
                          "공통 코드 관리",
                          "메뉴 등록",
                          "권한 등록",
                          "사용자 관리",
                          "공지 사항 조회",
                          "프로그램 조회",
                          "로그 관리",
                        ].map((item, i) => (
                          <div key={item} className="crm-module">
                            {tr(`diagram.commonModules.${i}`, item)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="crm-if-area">
                <div className="crm-if-arrow">
                  <span className="crm-if-line" />
                  <span className="crm-if-label">{tr("diagram.ifLabel", "I/F")}</span>
                  <span className="crm-if-line" />
                </div>
              </div>

              <div className="crm-right-area">
                <div className="crm-side-box">
                  <div className="crm-side-header">{tr("diagram.erpLabel", "ERP")}</div>
                  <div className="crm-side-content">
                    <div className="crm-side-row">
                      {["영업관리", "생산관리", "구매관리", "품질관리", "기준정보"].map((item, i) => (
                        <div key={item} className="crm-side-module">
                          {tr(`diagram.erpModules.${i}`, item)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="crm-side-box">
                  <div className="crm-side-header">{tr("diagram.groupwareLabel", "그룹웨어")}</div>
                  <div className="crm-side-content">
                    <div className="crm-side-row">
                      <div className="crm-side-module">{tr("diagram.groupwareModules.0", "전자결재")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-card-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("card.title", "CRM 주요 화면 및 기능")}</h3>
              <p>
                {tr(
                  "card.desc",
                  "N·Core CRM 시스템은 강력한 고객관계를 구축하며 매출과 수익을 향상시켜 드립니다.",
                )}
              </p>
            </div>
            <div className="feature-grid gr-3fr">
              {crmCard.map((f) => (
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
