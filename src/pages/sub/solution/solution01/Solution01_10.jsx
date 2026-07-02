import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionMokup from "@/components/sub/SolutionMokup";
const gwFeatures = [
  "기업별 업무 환경에 맞춘 커스터마이징 및 추가 개발 지원",
  "레거시 시스템과의 유연한 연계를 통한 업무 효율 향상",
  "전문 인력을 통한 신속하고 안정적인 유지보수 지원",
  "PC와 모바일을 아우르는 다양한 업무 환경 제공",
];
const gwMokups = [
  {
    title: "업무별 채널 구성",
    desc: (
      <>
        업무별 채널을 구성하여 체계적인 협업과 효율적인 정보 공유를 지원합니다.
      </>
    ),
    imgSrc: "/images/sub/gw_mokup01.jpg",
  },
  {
    title: "대화별 스레드 기능",
    desc: (
      <>
        대화별 스레드를 통해 주제별 대화를 체계적으로 관리하고 업무 흐름을 유지합니다.
      </>
    ),
     imgSrc: "/images/sub/gw_mokup02.jpg",
  },
];
export default function Solution01_10() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionFetures
          items={gwFeatures}
          title={
            <>
              기업별 업무 환경에 맞춘 커스터마이징으로
              <br /> 최적의 협업 환경 제공
            </>
          }
        />
        <div className="ac-visual">
          <div className="img">
            <img src="/images/sub/solution01-10.jpg" alt="" />
          </div>
          <div className="text solution-title">
            <h3>
              N·Core 그룹웨어와 함께
              <br />더 효율적인 업무 환경을 만들어보세요.
            </h3>
          </div>
        </div>
        <div className="gw-table-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>N·Core 그룹웨어 스펙</h3>
            </div>
            <table class="compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th>N·Core G/W</th>
                  <th>전문 G/W 업체</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>G/W 기능 (전문성)</td>
                  <td class="highlight">B+ 이상</td>
                  <td>A+ / A / B+ / B / C+</td>
                  <td>다양한 제품 서비스</td>
                </tr>
                <tr>
                  <td>커스텀마이징 및 추가 개발</td>
                  <td class="highlight">지원</td>
                  <td>한정지원(고가)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>시스템 연동</td>
                  <td class="highlight">지원</td>
                  <td>한정지원(고가)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>유지 보수</td>
                  <td class="highlight">전문인력 지원</td>
                  <td>한정지원(고가)</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="sub-inner">
            <div className="solution-title">
              <h3>사용자 업무 흐름도</h3>
            </div>
            <div class="gw-diagram">
              <div class="gw-diagram-top">
                <div class="gw-diagram-col">
                  <h4>메일</h4>
                  <ul>
                    <li>HTML5 웹메일</li>
                    <li>SMTP/IMAP4/POP3</li>
                  </ul>
                  <h4>전자결재</h4>
                  <ul>
                    <li>양식함</li>
                    <li>겸직(多 사업자 지원)</li>
                  </ul>
                </div>

                <div class="gw-diagram-col">
                  <h4>EDMS</h4>
                  <ul>
                    <li>전자결재 문서, 회사규정,메뉴얼 외</li>
                  </ul>
                  <h4>게시판</h4>
                  <ul>
                    <li>사내공지(각종 알림, 인사발령)</li>
                    <li>회의자료, 사내외 정보</li>
                  </ul>
                </div>

                <div class="gw-diagram-col">
                  <h4>업무서비스(연동)</h4>
                  <ul>
                    <li>각종 업무 시스템 SSO</li>
                  </ul>
                  <h4>일정관리/자원관리</h4>
                  <ul>
                    <li>회의실예약: 참석요청(mail/sms/공유일정)</li>
                    <li>차량예약 · 사내방문자관리(방문등록/승인)</li>
                    <li>통합 일정 · 통합일정(회의,출장,휴가)</li>
                  </ul>
                </div>

                <div class="gw-diagram-col">
                  <h4>부가기능</h4>
                  <ul>
                    <li>웹팩스</li>
                    <li>SMS/MMS</li>
                    <li>웹하드</li>
                  </ul>
                </div>
              </div>

              <div class="gw-diagram-bottom">
                <div class="gw-diagram-left">
                  <div class="gw-diagram-arrows">
                    <div class="gw-diagram-arrow-col">
                      <span class="gw-diagram-arrow-down">↓</span>
                      <span class="gw-diagram-arrow-label">
                        승인정보
                        <br />
                        발송정보
                      </span>
                    </div>
                    <div class="gw-diagram-arrow-col">
                      <span class="gw-diagram-arrow-label">
                        전자결재
                        <br />
                        SMS / FAX
                      </span>
                      <span class="gw-diagram-arrow-up">↑</span>
                    </div>
                  </div>
                  <div class="gw-diagram-box">ERP/MES (연동)</div>
                </div>

                <div class="gw-diagram-mid">
                  <span class="gw-diagram-mid-label">알림 (URL전달)</span>
                  <span class="gw-diagram-mid-arrow">→</span>
                </div>

                <div class="gw-diagram-right">
                  <span class="gw-diagram-top-label">
                    결재 알림, 알림 API 제공
                  </span>
                  <span class="gw-diagram-down-arrow">↓</span>
                  <div class="gw-diagram-box">MAIL, N·Works (메신저)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>더 빠른 소통을 위한 핵심 기능</h3>
            </div>
            <div className="solution-mokup-items">
              {gwMokups.map(({ title, desc, imgSrc }, index) => (
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
      </div>
    </>
  );
}
