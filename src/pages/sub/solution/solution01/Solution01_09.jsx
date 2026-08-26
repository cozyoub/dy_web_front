import SolutionFlow from "@/components/sub/SoluitionFlow";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_09";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

const processIcons = [
  "/images/sub/itsm-ico01.svg",
  "/images/sub/itsm-ico02.svg",
  "/images/sub/itsm-ico03.svg",
  "/images/sub/itsm-ico04.svg",
  "/images/sub/itsm-ico05.svg",
  "/images/sub/itsm-ico06.svg",
];

export default function Solution01_09() {
  const tr = useTr(en);

  const itsmProcess = [
    {
      title: tr("process.items.0.title", "서비스 요청 관리"),
      bullets: trArr(tr, "process.items.0.bullets", [
        "현업에서 발생하는 장애와 서비스 요청을 단일 접점을 통해 신속하고 정화하게 처리",
        "반복 업무의 자동화 및 효율화",
        "처리 경과에 대해 사용자에게 실시간 모니터링 제공",
      ]),
    },
    {
      title: tr("process.items.1.title", "변경 관리"),
      bullets: trArr(tr, "process.items.1.bullets", [
        "IT 변경 작업을 통제된 표준 방법과 절차를 통해 안전하게 수행",
        "변경에 관련된 장애 예방과 실패 최소화",
      ]),
    },
    {
      title: tr("process.items.2.title", "인시던트 관리"),
      bullets: trArr(tr, "process.items.2.bullets", [
        "예기치 않은 장애에 최대한 빠르게 서비스 운영 정상화",
        "장애에 의한 비즈니스 영향을 최소화",
      ]),
    },
    {
      title: tr("process.items.3.title", "문제 관리"),
      bullets: trArr(tr, "process.items.3.bullets", [
        "반복 장애에 대한 근본적은 원인을 해결하여 장애 재 발생 방지",
        "비즈니스 가용성 최대화",
      ]),
    },
    {
      title: tr("process.items.4.title", "릴리즈 관리"),
      bullets: trArr(tr, "process.items.4.bullets", ["변경에 대한 추적가능성", "적법한 권한에 의해 테스트를 거쳐 배포가 이행"]),
    },
    {
      title: tr("process.items.5.title", "구성 관리"),
      bullets: trArr(tr, "process.items.5.bullets", [
        "IT 자산 및 구성 정보의 정확성 유지",
        "변경, 장애, 문제 관리의 기반 데이터 제공",
        "서비스 안정성과 통제력 강화",
      ]),
    },
  ];

  const itsmEffect = [
    {
      icon: "/images/sub/ico_effect01.svg",
      title: tr("effect.items.0.title", "체계적인 서비스 프로세스 관리"),
      desc: trArr(tr, "effect.items.0.desc", [
        "SR 유형별 접수, 할당, 처리절차 구분을 통해 업무 수행 효율화",
        "분석/설계 프로세스의 체계적 수행을 통한 재작업 방지 및 작업 결과 추적 관리",
      ]).map((s) => <span key={s}>{s}</span>),
    },
    {
      icon: "/images/sub/ico_effect02.svg",
      title: tr("effect.items.1.title", "실시간 서비스 프로세스 관리"),
      desc: trArr(tr, "effect.items.1.desc", [
        "시영지뱔 개별화 및 시각화된 업무 대시보드 제공",
        "운영자 및 요청자 투두리스트 제공을 통한 업무 현황 파악 용이",
        "프로세스 네비게이션 제공을 통한 작업 상태 세분화 및 진행 현황 상세 확인 가능",
      ]).map((s) => <span key={s}>{s}</span>),
    },
    {
      icon: "/images/sub/ico_effect06.svg",
      title: tr("effect.items.2.title", "데이터 기반 IT 운영 관리"),
      desc: trArr(tr, "effect.items.2.desc", [
        "업무량 분석을 통해 적정 운영 산정과 불필요한 업무 개선에 활용",
        "SLA 준수율, 사용자 만족도 등 KPI 관리",
      ]).map((s) => <span key={s}>{s}</span>),
    },
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-04.jpg"
          label={tr("intro.label", "ITSM")}
          description={
            <>
              {tr("intro.d1", "기업내 IT서비스요청, 문제해결, 워크플로우 등")}
              <br />
              {tr("intro.d2", "IT 운영 전반을 자동화하고 효율적으로 관리하는 시스템")}
            </>
          }
        />
        <div className="itsm-process">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("process.title", "ITSM 주요 프로세스")}</h3>
            </div>
            <ul className="pr-list">
              {itsmProcess.map((item, i) => (
                <li className="pr-itm" key={item.title}>
                  <i>
                    <img src={processIcons[i]} alt="" />
                  </i>
                  <div className="text">
                    <h3>{item.title}</h3>
                    <ul>
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="itsm-panel">
          <SolutionEffect
            title={tr("effect.title", "솔루션 주요기능")}
            desc={tr("effect.desc", "서비스 요청부터 운영 관리까지 표준화하여 안정적인 IT 운영 환경을 제공합니다.")}
            items={itsmEffect}
          />
        </div>

        <div className="itsm-support">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("support.title", "ITSM Support")}</h3>
            </div>
            <div className="itsm-sp-top">
              <div className="sp-top-itm">
                <h3>{tr("support.top.0.title", "인시던트 관리")}</h3>
                <ul>
                  {trArr(tr, "support.top.0.items", ["OA 장애 및 문의", "시스템, 서비스 장애 및 문의"]).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="sp-top-itm">
                <h3>{tr("support.top.1.title", "이전설치 관리")}</h3>
                <ul>
                  {trArr(tr, "support.top.1.items", ["OA 이전 설치", "Networs 이전 설치", "전산공사"]).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="itsm-sp-middle">
              <h3>{tr("support.strategyTitle", "Business 전략")}</h3>
              <ul>
                {trArr(tr, "support.strategyItems", ["서비스 요청", "자체 업무 등록"]).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="itsm-sp-middle">
              <h3>{tr("support.orgTitle", "전문화된 IT 서비스 조직")}</h3>
              <ul>
                <li>
                  <h3>{tr("support.orgItems.0.title", "변경 / 릴리즈 관리")}</h3>
                  <div>
                    {trArr(tr, "support.orgItems.0.lines", ["APP 변경 / 릴리즈", "데이터 변경", "Infra 변경"]).map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </li>
                <li>
                  <h3>{tr("support.orgItems.1.title", "장애 / 문제 관리")}</h3>
                </li>
                <li>
                  <h3>{tr("support.orgItems.2.title", "기타 업무 관리")}</h3>
                  <div>
                    {trArr(tr, "support.orgItems.2.lines", ["자료 출력", "기획 조사", "신청 관리"]).map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="itsm-delivery">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("delivery.title", "ITSM Service Delivery")}</h3>
            </div>
            <ul className="dl-list">
              <li className="dl-itm">
                <h3>{tr("delivery.items.0.title", "일상점검")}</h3>
                <div>
                  {trArr(tr, "delivery.items.0.lines", ["정기 점검", "아침 / 퇴근 점검"]).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
              <li className="dl-itm">
                <h3>{tr("delivery.items.1.title", "Job 스케쥴 관리")}</h3>
                <div>
                  {trArr(tr, "delivery.items.1.lines", ["배치 작업", "정기 작업", "이벤트 업무"]).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
              <li className="dl-itm">
                <h3>{tr("delivery.items.2.title", "재해복구 시스템 운영")}</h3>
                <div>
                  {trArr(tr, "delivery.items.2.lines", ["평상시 운영(정합성 점검)"]).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
              <li className="dl-itm">
                <h3>{tr("delivery.items.3.title", "전산센터 운영")}</h3>
                <div>
                  {trArr(tr, "delivery.items.3.lines", ["시설 점검"]).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
              <li className="dl-itm">
                <h3>{tr("delivery.items.4.title", "데이터 백업")}</h3>
                <div>
                  {trArr(tr, "delivery.items.4.lines", ["백업 및 소산"]).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
              <li className="dl-itm">
                <h3>{tr("delivery.items.5.title", "모니터링")}</h3>
                <div>
                  {trArr(tr, "delivery.items.5.lines", ["서버, 네트워크", "Application", "데이터"]).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="itsm-cooperation">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("cooperation.title", "IT 협업 환경")}</h3>
            </div>
            <div className="capture-img">
              <img src="/images/sub/itsm-cooperation.png" alt="" />
            </div>
          </div>
        </div>
        <div className="itsm-result">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("result.title", "IT 성과측정")}</h3>
            </div>
            <div className="capture-img">
              <img src="/images/sub/itsm-result.png" alt="" />
            </div>
          </div>
        </div>
        <SolutionFlow title={tr("flow1.title", "N·Core ITSM 구성도")} imgSrc="/images/sub/itsm-flow01.png" />
        <SolutionFlow title={tr("flow2.title", "N·Core ITSM SW 변경(개발) 프로세스")} imgSrc="/images/sub/itsm-flow02.png" />
        <SolutionNoticeCards />
      </div>
    </>
  );
}
