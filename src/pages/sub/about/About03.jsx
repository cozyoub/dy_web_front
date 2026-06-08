import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HISTORY_DATA = [
  {
    year: 2024,
    events: [{ title: "부산광역시 선도기업 선정", tags: ["디지털테크산업"] }],
  },
  {
    year: 2023,
    events: [
      { title: "고용노동부 강소기업 선정" },
      { title: "고용노동부 고용우수기업 선정" },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: ["N·Core PMS 구매관리시스템", "한국저작권위원회"],
      },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: ["N·Core TMS 운송관리시스템", "한국저작권위원회"],
      },
      { title: "중소벤처기업부 이노비즈 인증기업 등록" },
    ],
  },
  {
    year: 2022,
    events: [
      { title: "삼성SDS인공지능 / 애널리틱스 솔루션 Brightics 파트너 계약" },
      { title: "삼성SDS Brightics AI MOU 체결" },
      { title: "폴라리스오피스 MOU 체결" },
      { title: "이노비즈 회원사 가입" },
      { title: "BNK 시스템 IT 서비스 전문업체등록" },
      { title: "DK·CAS 내부회계 시스템 개발" },
      {
        title: "중소기업중앙회 직접생산증명 획득",
        tags: [
          "산업관리소프트웨어 (4323260801)",
          "패키지소프트웨어개발 (8111159801)",
          "정보시스템개발서비스 (8111159901)",
          "정보시스템유지관리서비스 (811118901)",
          "소프트웨어유지및지원서비스 (8111229901)",
        ],
      },
      { title: "중소기업 특성화고 인력양성사업 참여" },
      { title: "조달청(나라장터) 입찰 자격 획득" },
      { title: "서울사무소 개소" },
    ],
  },
  {
    year: 2021,
    events: [{ title: "(주)켐토피아 - (주)동연S&T 상호협력 MOU 체결" }],
  },
  {
    year: 2020,
    events: [
      { title: "IT 교육 커리큘럼 추가", tags: ["자이솜", "X-SCADA"] },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: ["N·Core CMMS 설비관리시스템", "한국저작권위원회"],
      },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: ["N·Core FA 재무회계시스템", "한국저작권위원회"],
      },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: ["N·Core MES", "한국저작권위원회"],
      },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: ["N·Core HR 인사급여시스템", "한국저작권위원회"],
      },
      { title: "냉연강판 표면결함검출기 자동판정시스템 개발" },
    ],
  },
  {
    year: 2019,
    events: [
      { title: "자이솜 기술인증 대리점 계약" },
      { title: "기업 연구개발전담부서 설립", tags: ["한국산업기술진흥협회"] },
    ],
  },
  {
    year: 2017,
    events: [
      { title: "IT 교육장 오픈", tags: ["투비소프트", "Nexacro"] },
      { title: "대표이사 변경" },
    ],
  },
  {
    year: 2016,
    events: [{ title: "스마트공장 추진단 솔루션공급기업 선정" }],
  },
  {
    year: 2015,
    events: [
      {
        title: "스마트공장 고도화 기술개발사업 선정",
        tags: ["국책사업", "산업통상부"],
      },
    ],
  },
  {
    year: 2006,
    events: [{ title: "자본증자" }, { title: "(주)동연에스엔티 회사 설립" }],
  },
];

export default function About03() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const yearNumRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const groups = section.querySelectorAll(".hist-yg");
    const items = section.querySelectorAll(".hist-ev");

    gsap.set(items, {
      opacity: 0,
      x: -20,
    });

    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0,
        transformOrigin: "top top",
      },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".hist-tl",
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      },
    );

    groups.forEach((g) => {
      const yr = g.dataset.year;

      ScrollTrigger.create({
        trigger: g,
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => {
          groups.forEach((el) => el.classList.remove("active"));
          g.classList.add("active");

          if (yearNumRef.current) {
            yearNumRef.current.textContent = yr;
          }

          g.querySelectorAll(".hist-ev").forEach((ev, idx) => {
            gsap.to(ev, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: idx * 0.08,
              ease: "power2.out",
            });
          });
        },

        onEnterBack: () => {
          groups.forEach((el) => el.classList.remove("active"));
          g.classList.add("active");

          if (yearNumRef.current) {
            yearNumRef.current.textContent = yr;
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div className="history-wrap" ref={sectionRef}>
        <div className="sub-inner">
          <div className="history-body">
            <div className="hist-yr-track">
              <div className="history-head">
                <h2 className="history-title">동연에스엔티의 걸어온 길</h2>
              </div>
              <div className="hist-yr-num" ref={yearNumRef}>
                {HISTORY_DATA[0].year}
              </div>
            </div>
            <div className="hist-tl">
              <div className="hist-line-wrap">
                <div className="hist-line" ref={lineRef}></div>
              </div>
              {HISTORY_DATA.map((group) => (
                <div
                  className="hist-yg"
                  key={group.year}
                  data-year={group.year}
                >
                  <div className="hist-dot"></div>
                  <div className="hist-yg-year">{group.year}</div>
                  {group.events.map((ev, ei) => (
                    <div className="hist-ev" key={ei}>
                      <div className="hist-ev-left">
                        <div className="hist-ev-dot"></div>
                        {ei < group.events.length - 1 && (
                          <div className="hist-ev-line"></div>
                        )}
                      </div>
                      <div className="hist-ev-body">
                        <div className="hist-ev-month">{ev.month}</div>
                        <div className="hist-ev-title">{ev.title}</div>
                        <div className="hist-ev-desc">{ev.desc}</div>
                        {ev.tags && ev.tags.length > 0 && (
                          <div className="hist-ev-tags">
                            {ev.tags.map((t, ti) => (
                              <span className="hist-ev-tag" key={ti}>
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
