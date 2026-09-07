import SolutionCard from "@/components/sub/SolutionCard";
import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution02_06";

function trArr(tr, base, koItems) {
  return koItems.map((ko, i) => tr(`${base}.${i}`, ko));
}

export default function Solution02_06() {
  const tr = useTr(en);

  const eshEffects = [
    {
      icon: "/images/sub/ico_effect01.svg",
      title: tr("effect.items.0.title", "사업장 필수 법규 통합 대응"),
      desc: trArr(tr, "effect.items.0.desc", [
        "중대재해처벌법 및 산업안전보건법 등, 복잡하고 다양한 화학,환경,에너지등 분야별 법령 준수까지!",
        "기업의 모든 법적 리스크를 빈틈없이 차단하는 통합 방어체계시스템 제공",
      ]),
    },
    {
      icon: "/images/sub/ico_effect02.svg",
      title: tr("effect.items.1.title", "정교한 보고서 제공"),
      desc: trArr(tr, "effect.items.1.desc", [
        "중대재해처벌법 규제대응 현황",
        "안전보건 현황 공시 보고",
        "ESG 보고서 (환경 및 에너지, 안전지표 자동 작성)",
      ]),
    },
    {
      icon: "/images/sub/ico_effect05.svg",
      title: tr("effect.items.2.title", "스마트안전관리 시스템 구축"),
      desc: trArr(tr, "effect.items.2.desc", [
        "스마트 웨어러블 측정",
        "지능형 영상분석",
        "환경 및 가스감지",
        "위치기반 측위 센서",
      ]),
    },
  ];

  const eshFeatures = trArr(tr, "features.items", [
    "중대재해처벌법 자체 점검기능",
    "관련법령별 최근 고시 자동알람 및 법령별 규재준수 관리",
    "안전보건관리체계 통합이행관리 및 통합환경사후관리 IEPS자료 자동작성",
    "MSDS AI OCR 추출을 통한 인벤토리 자동 생성 관리",
    "AI 챗봇을 통한 법령 도우미 기능",
  ]);

  const dashboardItems = trArr(tr, "diagram.dashboard", [
    "ESH 목표대비실적",
    "산업안전보건비 계획 대비 실적",
    "사고발생 현황",
    "공사(안전작업허가) 현황",
    "중대재해처벌법 이행관리",
    "안전보건관리체계",
    "위험성평가",
    "To-Do List",
  ]);

  const categoryGroupsKo = [
    [
      {
        title: "ESH 경영관리",
        items: [
          "ESH 목표관리",
          "법령 이행관리",
          "안전보건조직도",
          "인허가 관리",
          "안전보건관리위원",
          "협력사 관리",
          "선.해임관리",
          "회의체관리",
          "교육관리",
          "무재해관리",
        ],
      },
      {
        title: "안전관리",
        items: [
          "공장안전자료실",
          "위험성평가",
          "변경관리",
          "안전작업허가관리",
          "개선요청 및 조치",
          "안전/가동전 점검",
          "종사자 안전제안",
          "TBM",
          "MSDS관리",
        ],
      },
      {
        title: "보건관리",
        items: [
          "작업환경측정",
          "건강검진 및 유소견자",
          "안전보호구",
          "건강관리실",
          "안전보호구",
          "뇌심혈관",
          "직무 스트레스",
          "재해자 면담",
        ],
      },
      {
        title: "환경관리",
        items: [
          "대기관리",
          "수질관리",
          "폐기물관리",
          "온실가스배출량",
          "통합환경 사후관리(IEPS) 제출",
        ],
      },
    ],
    [
      {
        title: "중대재해처벌법",
        items: [
          "기준정보 등록",
          "이행계획 등록",
          "이행실적 등록",
          "이행실적보고서",
        ],
      },
      {
        title: "소방관리",
        items: [
          "소방계획서",
          "소발설비현황",
          "소방시설물 점검",
          "비상훈련",
          "위험물관리",
        ],
      },
      {
        title: "PSM",
        items: [
          "공정안전자료",
          "위험성평가",
          "공정운전지침 및 절차",
          "설비점검 계획 및 실시",
          "안전작업허가 관리",
          "도급업체 안전관리",
          "공정운전 교육훈련",
          "가동전 검검 관리",
          "변경요청 관리",
          "사.내외 심사 및 감사",
          "사고접수 및 조치",
          "비상조치관리",
          "이행현황 자체점검표",
        ],
      },
      {
        title: "화학물질관리",
        items: [
          "제품별 인벤토리 현황",
          "외자구매 규제검토",
          "영업허가관리 (화평법,화관법)",
          "물질별 인.허가기준 취급량 관리",
          "유해화학물질취급시설 검사관리",
          "확인명세 및 수입승인",
          "대관보고서 제출관리",
        ],
      },
    ],
  ];

  const categoryGroups = categoryGroupsKo.map((group, gi) =>
    group.map((cat, ci) => ({
      title: tr(`diagram.categories.${gi}.${ci}.title`, cat.title),
      items: trArr(tr, `diagram.categories.${gi}.${ci}.items`, cat.items),
    })),
  );

  // 하단 단독 카드 (설비관리)
  const facilityCard = {
    title: tr("diagram.facility.title", "설비관리"),
    items: trArr(tr, "diagram.facility.items", [
      "설비그룹 마스터",
      "설비 예방점검계획",
      "설비 예방점검 실적",
    ]),
  };

  // 화살표 아래 컴플라이언스 4개 박스
  const complianceItems = trArr(tr, "diagram.compliance", [
    "컴플라이언스 관리",
    "대기/수질 배출량",
    "온실가스/탄소 배출량",
    "설비관측 및 제어",
  ]);

  // 현장관리 (PC / Tablet / Mobile)
  const fieldDevicesKo = [
    { label: "현장 PC", icon: "/images/sub/esh_pc.png" },
    { label: "Tablet", icon: "/images/sub/esh_tablet.png" },
    { label: "Mobile", icon: "/images/sub/esh_mobile.png" },
  ];
  const fieldDevices = fieldDevicesKo.map((d, i) => ({
    ...d,
    label: tr(`diagram.field.devices.${i}`, d.label),
  }));

  // Option: PLC 연동
  const plcItemsKo = [
    { name: "계근대", desc: "폐기물반출량" },
    { name: "MMI", desc: "폐수처리장" },
    { name: "TMS", desc: "환경배출정보" },
    { name: "영상시스템", desc: "영상보안시스템" },
  ];
  const plcItems = plcItemsKo.map((p, i) => ({
    name: tr(`diagram.plc.items.${i}.name`, p.name),
    desc: tr(`diagram.plc.items.${i}.desc`, p.desc),
  }));

  const eshCardKo = [
    {
      number: 1,
      title: "중대재해처벌법 이행관리",
      imgSrc: "/images/sub/esh_screen01.png",
      bullets: [
        "법정규제이행항목에 따른 현장이행문서 등록기능",
        "작성문서 관리자 평가",
        "규제이행준수 정량 평가 및 개선조치 연동",
        "본사 및 사업장 합산 및 개별 평가 가능",
        "ISO, PSM 등 과니대상별 주요 이행내역 병행사용",
        "평가회차별 이행내역 검색",
        "우리 사업장별 특화 이행 항목 추가등록 및 평가",
      ],
    },
    {
      number: 2,
      title: "안전보건관리체계 이행관리",
      imgSrc: "/images/sub/esh_screen02.png",
      bullets: [
        "안전보건관리체계 이행현황 문서 등록 및 조회",
        "안전보건관리체계 상세 이행현황 시스템 조회",
        "법렬병 규제이행 요구내역 상세조회",
        "규제이행준수 정량평가 및 개선조치 연동",
        "본사 및 사업장 합산 및 개별 평가 가능",
        "우리 사업장별 특화 이행 항목 추가등록 및 평가",
      ],
    },
    {
      number: 3,
      title: "MSDS 관리 기능",
      imgSrc: "/images/sub/esh_screen03.png",
      bullets: [
        "AI를 이용한 MSDS 추출로 사업장 인젠토리 자동작성",
        "국내주요법령별 규제물질 및 제품 검색",
        "MSDS  투입공정 설정으로 공정별 규제물질 취급관리",
        "MSDS 작성 유효기관 설정",
        "MSDS 재작성요청 기능",
        "주요기관별 물질 개정고시 이력 관리",
        "구매처별 유독물질포함 제품 납품현황",
        "우리 사업장 규제물질 취급현황 조회",
      ],
    },
    {
      number: 4,
      title: "법령도우미 AI 챗봇 기능",
      imgSrc: "/images/sub/esh_screen04.png",
      bullets: [
        "국내 주요법령(본법/시행령/시행규칙/고시) 상세 내역 간편조회",
        "사용자별 주요 관리문서 (SOP,MOC,PSI 등) 추가 등록에 따른  AI 검색  기능 구현",
      ],
    },
    {
      number: 5,
      title: "다양한 일정관리",
      imgSrc: "/images/sub/esh_screen05.png",
      bullets: [
        "전사일정/부서일정/개인일정 등록 및  일정 도래 알림",
        "캘린더를 이용한 직관적 UI 제공 법령별 필수 의무이행 주기와 연동한 자동알람 (e-Mail, 문자)  구현",
      ],
    },
  ];

  const eshCard = eshCardKo.map((f, i) => ({
    ...f,
    title: tr(`card.items.${i}.title`, f.title),
    bullets: trArr(tr, `card.items.${i}.bullets`, f.bullets),
  }));

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-06.jpg"
          label={tr("intro.label", "ESH")}
          description={
            <>
              {tr("intro.d1", "전방위적 ESH 규제대응부터 안전보건공시까지.")}
              <br />
              {tr(
                "intro.d2",
                "ESG 가치를 증명하는 지능형 AX기반 환경안전경영 시스템",
              )}
            </>
          }
        />
        <SolutionFetures title={tr("features.title", "ESH 주요 기능")} items={eshFeatures} />
        <div className="">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("diagram.title", "ESH 목표시스템 구성도")}</h3>
              <p>
                {tr(
                  "diagram.desc",
                  "지능형 AX 기반 ESH 목표시스템 구성도입니다.",
                )}
              </p>
            </div>
            <div className="diagram-img">
              <div className="esh-flow-diagram">
                <div className="esh-flow-board">
                  <div className="esh-flow-dashboard">DashBoard</div>

                  <div className="esh-flow-dashboard-grid">
                    {dashboardItems.map((label) => (
                      <div className="esh-flow-dashboard-item" key={label}>
                        {label}
                      </div>
                    ))}
                  </div>

                  {categoryGroups.map((group, gi) => (
                    <div className="esh-flow-category-row" key={gi}>
                      {group.map((cat) => (
                        <div className="esh-flow-category-card" key={cat.title}>
                          <h4>{cat.title}</h4>
                          <ul>
                            {cat.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}

                  <div className="esh-flow-facility-row">
                    <div className="esh-flow-category-card">
                      <h4>{facilityCard.title}</h4>
                      <ul>
                        {facilityCard.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="esh-flow-arrows">
                  {complianceItems.map((label) => (
                    <span className="esh-flow-arrow" key={label}>
                      ⇅
                    </span>
                  ))}
                </div>

                <div className="esh-flow-compliance-row">
                  {complianceItems.map((label) => (
                    <div className="esh-flow-compliance-item" key={label}>
                      {label}
                    </div>
                  ))}
                </div>

                <div className="esh-flow-bottom-row">
                  <div className="esh-flow-field-card">
                    <h4>{tr("diagram.field.title", "현장관리")}</h4>
                    <div className="esh-flow-field-devices">
                      {fieldDevices.map((d) => (
                        <div className="esh-flow-field-device" key={d.label}>
                          <img src={d.icon} alt={d.label} />
                          <span>{d.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="esh-flow-option-card">
                    <span className="esh-flow-option-badge">Option</span>
                    <div className="esh-flow-option-top">
                      <img src="/images/sub/esh_plc.png" alt="PLC" />
                      <span>{tr("diagram.plc.title", "PLC 연동")}</span>
                    </div>
                    <div className="esh-flow-option-grid">
                      {plcItems.map((p) => (
                        <div className="esh-flow-option-item" key={p.name}>
                          <strong>{p.name}</strong>
                          <p>{p.desc}</p>
                        </div>
                      ))}
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
              <h3>{tr("card.title", "ESH 주요 화면 및 기능")}</h3>
              <p>
                {tr(
                  "card.desc",
                  "ESH 법규 준수와 안전관리를 지원하는 주요 화면과 기능입니다.",
                )}
              </p>
            </div>
            <div className="feature-grid gr-3fr">
              {eshCard.map((f) => (
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