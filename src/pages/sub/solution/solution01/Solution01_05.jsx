import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionEffect from "@/components/sub/SolutionEffect";

const crmFeatures = [
  "제조업 중심의 고객 관계관리 시스템",
  "메일/SMS/FAX 문서의 자동 수집 및 분석 데이터 활용",
  "보안 문서 관리로 사내/외 문서 검색 기능",
  "모든 영업 업무를 한곳에서!",
  "다양한 통계 분석자료 제공",
  "크로스 브라우징 지원",
];

const crmEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "고객 경험 개선",
    desc: "고객 담당자와 현장 서비스 기술자가 고객을 360도 전방위로 파악해 개인화된 고객 경험을 제공합니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "고객 유지율 상승",
    desc: "서비스 개인화와 실시간 분석을 통해 고객 충성도를 확보하고 최적의 고객 접점을 구축합니다.",
  },
  {
    icon: "/images/sub/ico_effect03.svg",
    title: "매출 증대",
    desc: "영업 이력 자동화와 리드 관리를 통해 판매 파이프라인 가시성을 높이고 매출 향상을 지원합니다.",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "프로세스 효율 증대",
    desc: "자동화된 프로세스로 영업, 마케팅, 서비스 팀의 업무량을 줄이고 더 높은 성과를 달성합니다.",
  },
];

export default function Solution01_05() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-05.jpg"
          label="CRM"
          description={
            <>
              고객 정보와 상호작용 데이터를 통합 관리해 고객 관계 강화와 매출
              증대를 지원하는 CRM 솔루션
            </>
          }
        />
        <SolutionFetures items={crmFeatures} title="고객과 영업을 하나로 연결하다"/>
        <SolutionEffect
          title={
            <>
              고객과 비즈니스의 성장을 이끄는
              <br />
              CRM이 만드는 더 스마트한 비즈니스 환경
            </>
          }
          desc="고객 경험 혁신부터 업무 효율 향상까지, CRM 도입이 기업 전반의 경쟁력을 강화합니다."
          items={crmEffects}
        />
        <div className="crm-diagram">
          <div className="sub-inner">
            <h2 className="sub-title">N·Core CRM 시스템 구성도</h2>
            <div className="crm-body">
              {/* 좌측: N·Core CRM */}
              <div className="crm-main-box">
                <div className="crm-main-header">
                  <div className="crm-main-title">N·Core CRM</div>
                </div>

                <div className="crm-main-content">
                  {/* 고객관리 */}
                  <div className="crm-section">
                    <div className="crm-section-label">고객관리</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        <div className="crm-module">고객 등록</div>
                        <div className="crm-module">접촉 관리</div>
                        <div className="crm-module">접촉 현황</div>
                        <div className="crm-module">활동 관리</div>
                        <div className="crm-module">스케줄 관리</div>
                        <div className="crm-module">메일 관리</div>
                      </div>
                    </div>
                  </div>

                  {/* 영업관리 */}
                  <div className="crm-section">
                    <div className="crm-section-label">영업관리</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        <div className="crm-module">수주 등록</div>
                        <div className="crm-module">수주 진행 현황</div>
                        <div className="crm-module">출하 의뢰 등록</div>
                        <div className="crm-module">출하 현황</div>
                        <div className="crm-module">매출 등록</div>
                        <div className="crm-module">매출 현황</div>
                        <div className="crm-module">출하 현황</div>
                        <div className="crm-module">매출 등록</div>
                      </div>
                    </div>
                  </div>

                  {/* 고객 */}
                  <div className="crm-section">
                    <div className="crm-section-label">고객</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        <div className="crm-module crm-module--tall">
                          검수 조건
                          <br />
                          매출 관리
                        </div>
                        <div className="crm-module">매출 확인</div>
                      </div>
                    </div>
                  </div>

                  {/* 공통 */}
                  <div className="crm-section">
                    <div className="crm-section-label">공통</div>
                    <div className="crm-modules">
                      <div className="crm-row">
                        <div className="crm-module">공통 코드 관리</div>
                        <div className="crm-module">메뉴 등록</div>
                        <div className="crm-module">권한 등록</div>
                        <div className="crm-module">사용자 관리</div>
                        <div className="crm-module">공지 사항 조회</div>
                        <div className="crm-module">프로그램 조회</div>
                        <div className="crm-module">로그 관리</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 가운데: I/F 화살표 */}
              <div className="crm-if-area">
                <div className="crm-if-arrow">
                  <span className="crm-if-line" />
                  <span className="crm-if-label">I/F</span>
                  <span className="crm-if-line" />
                </div>
              </div>

              {/* 우측: ERP + 그룹웨어 */}
              <div className="crm-right-area">
                {/* ERP */}
                <div className="crm-side-box">
                  <div className="crm-side-header">ERP</div>
                  <div className="crm-side-content">
                    <div className="crm-side-row">
                      <div className="crm-side-module">영업관리</div>
                      <div className="crm-side-module">생산관리</div>
                      <div className="crm-side-module">구매관리</div>
                      <div className="crm-side-module">품질관리</div>
                      <div className="crm-side-module">기준정보</div>
                    </div>
                  </div>
                </div>

                {/* 그룹웨어 */}
                <div className="crm-side-box">
                  <div className="crm-side-header">그룹웨어</div>
                  <div className="crm-side-content">
                    <div className="crm-side-row">
                      <div className="crm-side-module">전자결재</div>
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
