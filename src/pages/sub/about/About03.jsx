import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SubTitle from "@/components/sub/common/SubTitle";
import BusinessAreaTab from "@/components/sub/BusinessAreaTab";

gsap.registerPlugin(ScrollTrigger);

const HISTORY_DATA = [
  {
    year: 2026,
    events: [
      { title: "(사)한국클라우드협회 이사사 위촉" },
      { title: "(사)중소기업기술혁신협회 부산울산지회 이사 위촉" },
      {
        title: "소프트웨어 저작권 제품 등록",
        tags: [
          "N·Core AAS 제조 데이터 표준화 및 자산 관리 플랫폼",
          "N·Core Qeye 산업용 AI 비전인식 플랫폼",
          "N·Core MLOps 제조 AI 모델 운영·학습 관리 플랫폼",
          "N·Core PrismAI AI예측모델기반 공정최적화 플랫폼",
        ],
      },
    ],
  },
  {
    year: 2025,
    events: [
      {
        title: "스마트제조혁신추진단 공급기업 역량진단 Level 3- 획득",
        tags: ["기술사업등급 A+"],
      },
      { title: "창원사무소 개소" },
      { title: "부산광역시장 표창장 수상" },
      { title: "경북테크노파트 MOU 체결" },
      { title: "창원사무소 개소" },
    ],
  },
  {
    year: 2024,
    events: [
      { title: "부산광역시 선도기업 선정", tags: ["디지털테크산업"] },
      {
        title: "중소기업중앙회 직접생산증명 획득",
        tags: ["운영위탁서비스(8111181101)"],
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        title: "중소기업중앙회 직접생산증명 획득",
        tags: ["빅데이터분석서비스(8111200202)"],
      },
      { title: "포항사무소 개소" },
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

const AWARDS = [
  {
    title: "한국저작권위원회 저작권 등록증(AAS)",
    src: "/images/sub/certi11.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(MLOps)",
    src: "/images/sub/certi12.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(Qeye)",
    src: "/images/sub/certi13.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(PrismAI)",
    src: "/images/sub/certi14.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(CMMS)",
    src: "/images/sub/certi01.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(FA)",
    src: "/images/sub/certi02.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(HR)",
    src: "/images/sub/certi03.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(MES)",
    src: "/images/sub/certi04.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(PMS)",
    src: "/images/sub/certi05.png",
  },
  {
    title: "한국저작권위원회 저작권 등록증(TMS)",
    src: "/images/sub/certi06.png",
  },
  { title: "고용노동부 강소기업 확인서", src: "/images/sub/certi07.png" },
  { title: "고용노동부 고용우수기업 인증서", src: "/images/sub/certi08.png" },
  {
    title: "중소벤처기업부 기술혁신형 중소기업 확인서",
    src: "/images/sub/certi09.png",
  },
  { title: "부산광역시 선도기업 인증서", src: "/images/sub/certi10.png" },
];

export default function About03() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);
  const yearNumRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const mm = gsap.matchMedia();
    let awardSwiper;

    let about02Swiper;
    let prevBtn, nextBtn, tabEls;
    const handleTabClick = [];

    const ctx = gsap.context(() => {
      // gsap.set(".about-ov ul li", { scale: 0.75, opacity: 0 });
      // gsap.to(".about-ov ul li", {
      //   scale: 1,
      //   opacity: 1,
      //   stagger: 0.1,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: ".overview-wrap",
      //     start: "top 75%",
      //     end: "top 20%",
      //     scrub: true,
      //   },
      // });

      const groups = Array.from(wrap.querySelectorAll(".hist-yg"));
      const animatedGroups = new Set();

      gsap.set(".hist-ev", { opacity: 0, x: -20 });

      gsap.set(lineRef.current, { height: "0%" });
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hist-tl",
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      function activateGroup(target) {
        if (target.classList.contains("active")) return;

        groups.forEach((el) => el.classList.remove("active"));
        target.classList.add("active");

        if (yearNumRef.current) {
          yearNumRef.current.textContent = target.dataset.year;
        }

        if (!animatedGroups.has(target)) {
          animatedGroups.add(target);
          target.querySelectorAll(".hist-ev").forEach((ev, idx) => {
            gsap.to(ev, {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: idx * 0.08,
              ease: "power2.out",
            });
          });
        }
      }

      function updateActiveGroup() {
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;

        if (atBottom) {
          activateGroup(groups[groups.length - 1]);
          return;
        }

        const viewportMid = window.innerHeight * 0.5;
        let current = groups[0];

        for (const g of groups) {
          const rect = g.getBoundingClientRect();
          if (rect.top <= viewportMid) {
            current = g;
          } else {
            break;
          }
        }

        activateGroup(current);
      }

      ScrollTrigger.create({
        trigger: ".hist-tl",
        start: "top bottom",
        end: "bottom top",
        onUpdate: updateActiveGroup,
        onRefresh: updateActiveGroup,
      });

      window.addEventListener("scroll", updateActiveGroup, { passive: true });

      return () => {
        window.removeEventListener("scroll", updateActiveGroup);
      };
    }, wrap);

    // mm.add("(min-width: 851px)", () => {
    //   const dkCtx = gsap.context(() => {
    //     gsap.set(".dk-gr-wrap .dk-list", { opacity: 0, y: 40 });

    //     const dkTl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: ".dk-gr-wrap",
    //         start: "top top",
    //         end: "+=1200",
    //         pin: true,
    //         scrub: 1,
    //         invalidateOnRefresh: true,
    //       },
    //     });

    //     dkTl
    //       .to(
    //         ".dk-gr-wrap .intro p, .dk-gr-wrap .intro span, .dk-gr-wrap .con > img",
    //         { opacity: 0, y: -30, duration: 0.4 },
    //         0.3,
    //       )
    //       .to(".dk-gr-wrap .dk-list", { opacity: 1, y: 0, duration: 0.5 }, 0.45)
    //       .to({}, { duration: 0.3 });
    //   }, wrap);

    //   return () => dkCtx.revert();
    // });

    awardSwiper = new Swiper(".award-slider", {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 300,
      slidesPerView: 1.2,
      spaceBetween: 16,
      navigation: {
        nextEl: ".award-wrap .swiper-button-next",
        prevEl: ".award-wrap .swiper-button-prev",
      },
      pagination: {
        el: ".award-wrap .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2, spaceBetween: 20 },
        851: { slidesPerView: 3, spaceBetween: 24 },
        1200: { slidesPerView: 6, spaceBetween: 10 },
      },
    });

    const images = wrap.querySelectorAll("img");
    let loaded = 0;
    const total = images.length;

    const refreshAll = () => ScrollTrigger.refresh(true);

    if (total === 0) {
      refreshAll();
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loaded++;
          if (loaded === total) refreshAll();
        } else {
          const onDone = () => {
            loaded++;
            if (loaded === total) refreshAll();
          };
          img.addEventListener("load", onDone);
          img.addEventListener("error", onDone);
        }
      });
    }

    const fallback = setTimeout(refreshAll, 1000);

    return () => {
      clearTimeout(fallback);
      mm.revert();
      ctx.revert();
      if (awardSwiper) awardSwiper.destroy();
    };
  }, []);

  return (
    <>
      <div className="about-wrap" ref={wrapRef}>
        {/* <div className="overview-wrap">
          <div className="sub-inner">
            <SubTitle title="동연에스엔티 개요" desc="Overview" />
            <div className="about-ov">
              <ul>
                <li>
                  <span>회사명</span>
                  <div className="img">
                    <img src="/images/sub/icon_cp01.png" alt="" />
                  </div>
                  <p>(주)동연에스엔티</p>
                </li>
                <li>
                  <span>설립일</span>
                  <div className="img">
                    <img src="/images/sub/icon_cp02.png" alt="" />
                  </div>
                  <p>2006년 2월 14일</p>
                </li>
                <li>
                  <span>대표이사</span>
                  <div className="img">
                    <img src="/images/sub/icon_cp03.png" alt="" />
                  </div>
                  <p>김문섭</p>
                </li>
                <li>
                  <span>본사소재</span>
                  <div className="img">
                    <img src="/images/sub/icon_cp04.png" alt="" />
                  </div>
                  <p>부산광역시 동래구 온천장로 107번길 10 혜원빌딩 7층</p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="dk-gr-wrap">
          <div className="img">
            <img src="/images/sub/dk_gr_bg.jpg" alt="" />
          </div>
          <div className="txt">
            <div className="sub-inner">
              <img src="/images/sub/dk_logo.svg" className="logo" />
              <div className="con">
                <div className="intro">
                  <p>동국산업 계열사 솔루션 개발 및 운영</p>
                  <span>
                    동국산업 계열사의 다양한 비즈니스 환경에 맞춘 IT 솔루션을
                    개발·운영하며,
                    <br />
                    안정적인 시스템과 지속적인 기술 지원을 제공합니다.
                  </span>

                  <ul className="dk-list ">
                    <li className="border-gradient">
                      계열사 S/W 개발 자급률 95%{" "}
                    </li>
                    <li className="border-gradient">
                      철강업 ERP (냉연특수강, 칼라인쇄강판, 파이프)
                    </li>
                    <li className="border-gradient">
                      건설(플랜트) / 신재생에너지 / 풍력타워 제조 ERP
                    </li>
                    <li className="border-gradient">내화물 / 세라믹 ERP</li>
                    <li className="border-gradient">
                      해외공장, 국∙내외 고객사 SCM 구축
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="business-area-wrap">
          <div className="sub-inner">
            <SubTitle
              title="통합 IT솔루션 개발 및 서비스 사업"
              desc="Business Area"
            />
            <BusinessAreaTab />
          </div>
        </div> */}
        <div className="history-wrap">
          <div className="sub-inner">
            <div className="history-body">
              <div className="hist-yr-track">
                <div className="history-head">
                  <SubTitle title="연혁" desc="History" />
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

        <div className="award-wrap">
          <div className="sub-inner">
            <SubTitle title="인증 및 수상" desc="Certificates & Awards" />
          </div>
          <div className="award-slider swiper">
            <div className="swiper-wrapper">
              {AWARDS.map((award, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="award-item">
                    <div className="award-placeholder">
                      <div className="i">
                        <img src={award.src} alt={award.title} />
                      </div>
                    </div>
                    <p className="award-tit">{award.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </>
  );
}
