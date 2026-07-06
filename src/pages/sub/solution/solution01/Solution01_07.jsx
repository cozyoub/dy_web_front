import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionMokup from "@/components/sub/SolutionMokup";

const icmsFeatures = [
  "대시보드를 통해 각 통제 항목의 업무 현황 및 전체 평가 결과를 한눈에 확인",
  "전사 수준의 RCM 등록 및 관리 기능 제공",
  "통제 구분별 RCM 등록, 미비점 관리, 설계 수행 내역 및 연동 결재 기능 제공",
  "전사 수준 및 업무 수준의 운영평가 기능 제공",
];
const icmsMokups = [
  {
    title: "대시보드",
    desc: (
      <>
        대시보드를 통해 각 통제 항목에 대한 업무 현황 및 전체적인 평과 결과에
        대한 내용이 확인 가능 합니다.
      </>
    ),
    imgSrc: "/images/sub/icms_mokup01.svg",
  },
  {
    title: "설계(RCM)등록 - ELC",
    desc: <>전사수준 RCM 등록 기능을 제공하고 있습니다.</>,
    imgSrc: "/images/sub/icms_mokup02.jpg",
  },
];
export default function Solution01_07() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-07.jpg"
          label="ICMS"
          description={
            <>
              내부통제 절차 정립과 외감법 제도 개정에 <br />
              효율적으로 대응할 수 있는 최적의 내부회계 솔루션
            </>
          }
        />
        <SolutionFetures
          items={icmsFeatures}
          title="내부통제를 더 체계적이고 스마트하게"
        />

        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>
                효율적인 내부회계 관리를 <br />
                지원하는 주요 기능
              </h3>
            </div>
            <div className="solution-mokup-items">
              {icmsMokups.map(({ title, desc, imgSrc }, index) => (
                <SolutionMokup
                  key={index}
                  title={title}
                  desc={desc}
                  imgSrc={imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="icms-diagram">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>구성도 자세히 알아보기</h3>
            </div>
            <div className="icms-body">
              {/* 좌측: 사용자 */}
              <div className="icms-user-box">
                <div className="icms-user-header">사용자</div>
                <div className="icms-user-content">
                  <ul>
                    <li>대표이사</li>
                    <li>감사위원</li>
                    <li>내부회계관리자</li>
                    <li>내부회계전담조직팀원</li>
                    <li>통제수행 현업팀장</li>
                    <li>통제수행 현업팀원</li>
                    <li>관리자</li>
                  </ul>
                </div>
              </div>

              {/* 사용자 ↔ ICMS 화살표 (양방향) */}
              <div className="icms-if-area">
                <div className="icms-if-arrow icms-if-arrow--both">
                  <span className="icms-if-line" />
                </div>
              </div>

              {/* 중앙: ICMS + 하단 */}
              <div className="icms-center-col">
                <div className="icms-main-box">
                  <div className="icms-main-header">
                    내부회계관리시스템(ICMS)
                  </div>
                  <div className="icms-main-content">
                    <div className="icms-row">
                      <div className="icms-section">
                        <div className="icms-section-label">나의업무</div>
                        <ul>
                          <li>진행현황관리(Dashboard)</li>
                          <li>위임관리</li>
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">평가준비</div>
                        <ul>
                          <li>통제기간관리</li>
                          <li>일정관리</li>
                          <li>Scoping</li>
                          <li>위험평가관리</li>
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">설계평가</div>
                        <ul>
                          <li>전사수준(ELC)</li>
                          <li>설계RCM관리</li>
                          <li>업무수준(PLC)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="icms-row">
                      <div className="icms-section">
                        <div className="icms-section-label">운영평가</div>
                        <ul>
                          <li>전사수준(ELC)</li>
                          <li>RCM 샘플수확정관리</li>
                          <li>평가수행예외관리</li>
                          <li>평가승인관리</li>
                          <li>평가미비점관리</li>
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">평가보고</div>
                        <ul>
                          <li>보고서등록</li>
                          <li>운영실태보고서</li>
                          <li>평가보고서</li>
                        </ul>
                      </div>
                      <div className="icms-section">
                        <div className="icms-section-label">기준</div>
                        <ul>
                          <li>코드관리</li>
                          <li>메뉴관리</li>
                          <li>권한관리</li>
                          <li>결제관리</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 하단 I/F 수직 화살표 (위아래) */}
                <div className="icms-bottom-if">
                  <div className="icms-if-arrow icms-if-arrow--vertical">
                    <span className="icms-if-line--v" />
                    <span className="icms-if-label">I/F</span>
                    <span className="icms-if-line--v" />
                  </div>
                </div>

                {/* 하단: G/W + N·Works */}
                <div className="icms-bottom-area">
                  <div className="icms-side-box">
                    <div className="icms-side-header">G/W (그룹웨어)</div>
                    <div className="icms-side-content">
                      <div className="icms-side-module">전자결재</div>
                    </div>
                  </div>
                  <div className="icms-side-box">
                    <div className="icms-side-header">N·Works 메신저</div>
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

              {/* ICMS → ERP 화살표 (왼쪽 화살표만) */}
              <div className="icms-if-area">
                <div className="icms-if-arrow icms-if-arrow--left">
                  <span className="icms-if-line" />
                  <span className="icms-if-label">I/F</span>
                </div>
              </div>

              {/* 우측: ERP */}
              <div className="icms-erp-box">
                <div className="icms-side-header">ERP</div>
                <div className="icms-side-content">
                  <div className="icms-side-module">영업</div>
                  <div className="icms-side-module">구매</div>
                  <div className="icms-side-module">MES</div>
                  <div className="icms-side-module">인사/급여</div>
                  <div className="icms-side-module">회계관리</div>
                  <div className="icms-side-module">원가관리</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sub-inner">
            <div className="solution-title">
              <h3>내부전산통제(ITGC) 시스템</h3>
              <p>
                2018년 개정 외감법에 대응하기 위해 내부회계관리제도 목성 달성을
                지워하는 정보기술 일반통제(ITGC)부분을 시스템으로 지원합니다.
              </p>
              <div className="flow-img">
                <img src="/images/sub/itgc_flow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
