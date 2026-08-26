import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionMokup from "@/components/sub/SolutionMokup";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_10";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

export default function Solution01_10() {
  const tr = useTr(en);

  const gwFeatures = trArr(tr, "features.items", [
    "기업별 업무 환경에 맞춘 커스터마이징 및 추가 개발 지원",
    "레거시 시스템과의 유연한 연계를 통한 업무 효율 향상",
    "전문 인력을 통한 신속하고 안정적인 유지보수 지원",
    "PC와 모바일을 아우르는 다양한 업무 환경 제공",
  ]);

  const gwMokups = [
    {
      title: tr("mokup.items.0.title", "업무별 채널 구성"),
      desc: <>{tr("mokup.items.0.desc", "업무별 채널을 구성하여 체계적인 협업과 효율적인 정보 공유를 지원합니다.")}</>,
      imgSrc: "/images/sub/gw_mokup01.jpg",
    },
    {
      title: tr("mokup.items.1.title", "대화별 스레드 기능"),
      desc: <>{tr("mokup.items.1.desc", "대화별 스레드를 통해 주제별 대화를 체계적으로 관리하고 업무 흐름을 유지합니다.")}</>,
      imgSrc: "/images/sub/gw_mokup02.jpg",
    },
  ];

  const tableRows = [
    ["G/W 기능 (전문성)", "B+ 이상", "A+ / A / B+ / B / C+", "다양한 제품 서비스"],
    ["커스텀마이징 및 추가 개발", "지원", "한정지원(고가)", ""],
    ["시스템 연동", "지원", "한정지원(고가)", ""],
    ["유지 보수", "전문인력 지원", "한정지원(고가)", ""],
  ].map((row, i) => row.map((cell, j) => tr(`table.rows.${i}.${j}`, cell)));

  const tableHeaders = ["", "N·Core G/W", "전문 G/W 업체", "비고"].map((h, i) => tr(`table.headers.${i}`, h));

  return (
    <>
      <div className="solution-wrap">
        <SolutionFetures
          items={gwFeatures}
          title={
            <>
              {tr("features.title1", "기업별 업무 환경에 맞춘 커스터마이징으로")}
              <br /> {tr("features.title2", "최적의 협업 환경 제공")}
            </>
          }
        />
        <div className="ac-visual">
          <div className="img">
            <img src="/images/sub/solution01-10.jpg" alt="" />
          </div>
          <div className="text solution-title">
            <h3>
              {tr("visual.title1", "N·Core 그룹웨어와 함께")}
              <br />
              {tr("visual.title2", "더 효율적인 업무 환경을 만들어보세요.")}
            </h3>
          </div>
        </div>
        <div className="gw-table-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("table.title", "N·Core 그룹웨어 스펙")}</h3>
            </div>
            <table className="compare-table">
              <thead>
                <tr>
                  {tableHeaders.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={j === 1 ? "highlight" : undefined}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("diagram.title", "사용자 업무 흐름도")}</h3>
            </div>
            <div className="gw-diagram">
              <div className="gw-diagram-top">
                <div className="gw-diagram-col">
                  <h4>{tr("diagram.mailTitle", "메일")}</h4>
                  <ul>
                    {trArr(tr, "diagram.mailItems", ["HTML5 웹메일", "SMTP/IMAP4/POP3"]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <h4>{tr("diagram.approvalTitle", "전자결재")}</h4>
                  <ul>
                    {trArr(tr, "diagram.approvalItems", ["양식함", "겸직(多 사업자 지원)"]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>

                <div className="gw-diagram-col">
                  <h4>{tr("diagram.edmsTitle", "EDMS")}</h4>
                  <ul>
                    {trArr(tr, "diagram.edmsItems", ["전자결재 문서, 회사규정,메뉴얼 외"]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <h4>{tr("diagram.boardTitle", "게시판")}</h4>
                  <ul>
                    {trArr(tr, "diagram.boardItems", ["사내공지(각종 알림, 인사발령)", "회의자료, 사내외 정보"]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>

                <div className="gw-diagram-col">
                  <h4>{tr("diagram.linkedTitle", "업무서비스(연동)")}</h4>
                  <ul>
                    {trArr(tr, "diagram.linkedItems", ["각종 업무 시스템 SSO"]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <h4>{tr("diagram.scheduleTitle", "일정관리/자원관리")}</h4>
                  <ul>
                    {trArr(tr, "diagram.scheduleItems", [
                      "회의실예약: 참석요청(mail/sms/공유일정)",
                      "차량예약 · 사내방문자관리(방문등록/승인)",
                      "통합 일정 · 통합일정(회의,출장,휴가)",
                    ]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>

                <div className="gw-diagram-col">
                  <h4>{tr("diagram.extraTitle", "부가기능")}</h4>
                  <ul>
                    {trArr(tr, "diagram.extraItems", ["웹팩스", "SMS/MMS", "웹하드"]).map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="gw-diagram-bottom">
                <div className="gw-diagram-left">
                  <div className="gw-diagram-arrows">
                    <div className="gw-diagram-arrow-col">
                      <span className="gw-diagram-arrow-down">↓</span>
                      <span className="gw-diagram-arrow-label">
                        {tr("diagram.approvalInfo1", "승인정보")}
                        <br />
                        {tr("diagram.approvalInfo2", "발송정보")}
                      </span>
                    </div>
                    <div className="gw-diagram-arrow-col">
                      <span className="gw-diagram-arrow-label">
                        {tr("diagram.approvalChannel1", "전자결재")}
                        <br />
                        {tr("diagram.approvalChannel2", "SMS / FAX")}
                      </span>
                      <span className="gw-diagram-arrow-up">↑</span>
                    </div>
                  </div>
                  <div className="gw-diagram-box">{tr("diagram.erpBox", "ERP/MES (연동)")}</div>
                </div>

                <div className="gw-diagram-mid">
                  <span className="gw-diagram-mid-label">{tr("diagram.notifyLabel", "알림 (URL전달)")}</span>
                  <span className="gw-diagram-mid-arrow">→</span>
                </div>

                <div className="gw-diagram-right">
                  <span className="gw-diagram-top-label">{tr("diagram.notifyTop", "결재 알림, 알림 API 제공")}</span>
                  <span className="gw-diagram-down-arrow">↓</span>
                  <div className="gw-diagram-box">{tr("diagram.messengerBox", "MAIL, N·Works (메신저)")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("mokup.title", "더 빠른 소통을 위한 핵심 기능")}</h3>
            </div>
            <div className="solution-mokup-items">
              {gwMokups.map(({ title, desc, imgSrc }, index) => (
                <SolutionMokup key={index} title={title} desc={desc} imgSrc={imgSrc} />
              ))}
            </div>
          </div>
        </div>
        <SolutionNoticeCards />
      </div>
    </>
  );
}
