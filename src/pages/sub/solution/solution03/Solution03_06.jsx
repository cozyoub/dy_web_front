import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const tmsFeatures = [
  "AI 기반 자동 차량 배차 및 카톡·앱 푸시 알림",
  "차량번호 인식 기반 무인 계근대 입·출차 관리",
  "GPS 위치정보 기반 운행·도착 실시간 추적",
  "QR코드·증빙자료·인수증 연동 납품 관리",
  "SCM, ERP, WMS 등 기간계 시스템 I/F 연동",
];

const tmsProcessGroups = [
  {
    title: "입고 배차",
    label: "구매",
    steps: ["구매 발주", "P/O 발행", "입고 배차 등록", "QR코드 발행", "정문 도착"],
  },
  {
    title: "출하 배차",
    label: "물류",
    steps: ["출하 요청", "운송 지시", "출하 배차 등록", "상차 완료", "배송지 하차"],
  },
  {
    title: "차량 통제",
    label: "게이트",
    steps: ["차량번호 인식", "입문 처리", "공차 계근", "상차 계근", "출문 처리"],
  },
  {
    title: "모바일 TMS",
    label: "기사 앱",
    steps: ["배차 확인", "증빙자료", "운행 도착", "입차 계근값 확인", "인수증 등록"],
  },
];

const tmsSupportItems = [
  {
    title: "기간계 I/F",
    desc: "SCM, ERP, WMS와 배차·계근·정산 데이터를 연동합니다.",
  },
  {
    title: "무인 계근대",
    desc: "차량번호 인식과 자동 계근으로 입·출차를 처리합니다.",
  },
  {
    title: "GPS 위치 추적",
    desc: "운송 중 위치와 도착지 정보를 모바일 보고와 함께 관리합니다.",
  },
];

const tmsEffects = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "물류 Cost 절감",
    desc: "자동 배차와 무인 계근으로 물류 운영 비용을 절감합니다.",
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "대기 시간 단축",
    desc: "입·출차 호출 알림과 자동 계근으로 차량 대기 시간을 최소화합니다.",
  },
  {
    icon: "/images/sub/ico_effect04.svg",
    title: "운행 가시성 확보",
    desc: "GPS 위치정보와 모바일 보고로 운행 현황을 실시간 파악합니다.",
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "기간계 자동 연동",
    desc: "SCM·ERP·WMS와 연동하여 배차·계근·마감 데이터를 자동 처리합니다.",
  },
];

export default function Solution03_06() {
  return (
    <div className="solution-wrap">
      <SolutionIntro
        imageSrc="/images/sub/solution03-06.jpg"
        label="TMS"
        description={
          <>
            배차 프로세스와 구내 물류, 제품의 납품 관리
            <br />
            AI 기반 자동차량배차·차량인식·GPS·자동계근 통합 물류관리
          </>
        }
      />
      <SolutionFetures
        items={tmsFeatures}
        title={
          <>
            스마트 물류로 완성하는
            <br />
            통합 물류운송 AI
          </>
        }
      />

      <div className="tms-system-section">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>시스템 구성도</h3>
            <p>
              구매 입고부터 출하 배차, 차량 통제, 모바일 운송 보고까지 TMS 흐름을 하나의 물류 운영 체계로 연결합니다.
            </p>
          </div>

          <div className="tms-process-grid">
            {tmsProcessGroups.map((group) => (
              <section key={group.title} className="tms-process-card">
                <span>{group.label}</span>
                <h4>{group.title}</h4>
                <ol>
                  {group.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <ul className="tms-support-list">
            {tmsSupportItems.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="tms-original-diagram">
            <img
              src="/images/sub/solution03-06-diagram-1.png"
              alt="N·Core TMS 입고 배차, 출하 배차, 모바일 TMS, 무인계근대 통합 흐름도"
            />
          </div>
        </div>
      </div>

      <div className="tms-reference-section">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>TMS 적용 사례</h3>
            <p>
              주요 철강 제조 현장의 TMS/WSS 구축 사례를 지도 기반으로 확인할 수 있습니다.
            </p>
          </div>
          <div className="tms-reference-image">
            <img
              src="/images/sub/solution03-06-reference-map-ai.png"
              alt="N·Core TMS 구축 사례 지도"
            />
          </div>
        </div>
      </div>

      <SolutionEffect
        title="솔루션 도입 기대효과"
        desc="AI 배차와 무인 계근을 통해 물류 운영 효율과 납품 관리 정확성을 높입니다."
        items={tmsEffects}
      />
    </div>
  );
}
