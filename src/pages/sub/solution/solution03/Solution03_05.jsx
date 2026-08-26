import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution03_05";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

const koServiceCards = [
  { title: "TMS를 활용한 대기관리 솔루션", desc: ["굴뚝원격감시체계(TMS)를 이용하여 대기오염물질 배출현황을 24시간 관리", "ESH 대기관리 기능을 통해 실시간 모니터링 및 이상 발생 시 모바일 알림"] },
  { title: "유/무선 센터 네트워크 활용 IoT 폐수 감지 시스템", desc: ["수질 오염도 측정 센서로 화학제품과 폐수 방출량 관리", "측정된 폐수 정보를 Web, Mobile 모니터링 시스템으로 전달 및 알람"] },
  { title: "IP 카메라 이용 특정 지역 감시 지능형 영상 보안 시스템", desc: ["위험 지역 입구 동작 감지 및 가상 펜스 설치를 통한 출입자 감시", "무단 출입자 감지 시 모바일, 웹 모니터링 시스템 알람 및 출입자 사진 전송"] },
];

const koFlowGroups = [
  { title: "대기관리 데이터", imageSrc: "/images/sub/solution03-05-tms-visual.png", imageAlt: "대기관리 TMS 모니터링 흐름", points: ["굴뚝 배출 측정", "센서 데이터 수집", "클라우드·관제 서버 연동", "웹·모바일 알림"] },
  { title: "폐수 감지 네트워크", imageSrc: "/images/sub/solution03-05-wastewater-visual.png", imageAlt: "IoT 폐수 감지 네트워크 흐름", points: ["수질 센서 측정", "무선 게이트웨이 전송", "데이터 서버 저장", "관제 화면·경보 출력"] },
  { title: "지능형 영상 보안", imageSrc: "/images/sub/solution03-05-security-visual.png", imageAlt: "IP 카메라 지능형 영상 보안 흐름", points: ["출입통제 구역 감지", "IP 카메라 영상 분석", "네트워크·서버 전송", "웹 관제·모바일 알림"] },
];

export default function Solution03_05() {
  const tr = useTr(en);

  const eshFeatures = trArr(tr, "features.items", [
    "TMS 기반 대기관리: 굴뚝 원격감시 24시간 배출현황 관리",
    "IoT 폐수 감지 시스템: 수질 오염도 측정 및 Web/Mobile 알람",
    "지능형 영상 보안: 위험 지역 입구 감지, 가상 펜스, 무단 출입 알람",
    "한국환경공단 TMS 네트워크 연동 및 자체 관제센터 통합 모니터링",
    "중대재해 예방 및 환경안전보건 통합 업무 관리 (재해 Zero, 사고 Zero)",
  ]);

  const eshServiceCards = koServiceCards.map((card, i) => ({
    title: tr(`system.serviceCards.${i}.title`, card.title),
    desc: trArr(tr, `system.serviceCards.${i}.desc`, card.desc),
  }));

  const eshFlowGroups = koFlowGroups.map((group, i) => ({
    ...group,
    title: tr(`system.flowGroups.${i}.title`, group.title),
    imageAlt: tr(`system.flowGroups.${i}.imageAlt`, group.imageAlt),
    points: trArr(tr, `system.flowGroups.${i}.points`, group.points),
  }));

  const eshEffects = [
    { icon: "/images/sub/ico_effect01.svg", title: tr("effect.items.0.title", "재해 Zero, 사고 Zero"), desc: trArr(tr, "effect.items.0.desc", ["중대재해 예방을 위한 환경안전보건 통합 관리", "위험 지역 실시간 감시 및 즉각 알람 대응"]) },
    { icon: "/images/sub/ico_effect02.svg", title: tr("effect.items.1.title", "대기·폐수 통합 모니터링"), desc: trArr(tr, "effect.items.1.desc", ["TMS 기반 대기오염물질 배출현황 24시간 관리", "IoT 폐수 감지 및 수질 오염도 실시간 모니터링"]) },
    { icon: "/images/sub/ico_effect05.svg", title: tr("effect.items.2.title", "지능형 영상 분석"), desc: trArr(tr, "effect.items.2.desc", ["IP 카메라 기반 특정 지역 감시", "무단 출입자 감지 및 모바일·웹 알람 전송"]) },
    { icon: "/images/sub/ico_effect04.svg", title: tr("effect.items.3.title", "환경공단 연동 관제"), desc: trArr(tr, "effect.items.3.desc", ["한국환경공단 TMS 네트워크 연동", "수도권·동남권·남부권·중부권 관제센터 통합 관리"]) },
  ];

  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-05.jpg"
        label={tr("intro.label", "ESH")}
        description={
          <>
            {tr("intro.d1", "안전한 제조 사업장의 완성")}
            <br />
            {tr("intro.d2", "중대재해 예방 및 환경안전보건 통합 업무 관리 (재해 Zero, 사고 Zero)")}
          </>
        }
      />
      <SolutionFetures
        items={eshFeatures}
        title={
          <>
            {tr("features.title1", "IoT와 AI로 완성하는")}
            <br />
            {tr("features.title2", "환경안전경영 AI")}
          </>
        }
      />

      <div className="esh-system-section">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>{tr("system.title", "시스템 구성도")}</h3>
            <p>{tr("system.desc", "ESH 업무 포털, 대기관리, 폐수 감지, 지능형 영상 보안을 하나의 관제 흐름으로 연결합니다.")}</p>
          </div>

          <div className="esh-dashboard-shot" aria-label={tr("system.dashboardAlt", "ESH 환경안전보건 통합 대시보드 시안")}>
            <img
              src="/images/sub/solution03-05-diagram-1.png"
              alt={tr("system.dashboardAlt", "ESH 환경안전보건 통합 대시보드 시안")}
            />
          </div>

          <ul className="esh-service-grid">
            {eshServiceCards.map((card) => (
              <li key={card.title}>
                <h4>{card.title}</h4>
                {card.desc.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </li>
            ))}
          </ul>

          <div className="esh-flow-grid">
            {eshFlowGroups.map((group) => (
              <section key={group.title} className="esh-flow-card">
                <div className="esh-flow-image">
                  <img src={group.imageSrc} alt={group.imageAlt} />
                </div>
                <h4>{group.title}</h4>
                <ol>
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </div>

      <SolutionEffect
        title={
          <>
            {tr("effect.title1", "안전하고 지속가능한")}
            <br />
            {tr("effect.title2", "제조 사업장을 위한 ESH AI")}
          </>
        }
        desc={tr("effect.desc", "대기·폐수·영상 감시부터 중대재해 예방까지, 사업장 ESH 환경을 통합 지원합니다.")}
        items={eshEffects}
      />
      <SolutionNoticeCards />
    </div>
  );
}
