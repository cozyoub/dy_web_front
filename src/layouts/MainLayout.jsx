import React, { useState, useRef, useEffect } from "react";
import "@/assets/css/main.css";
import PopupViewer from "@/components/PopupViewer";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { getAllNotiService } from "@/services/noti.service";
import { BASE_API_URL } from "@/common/constants";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Demo01 from "@/components/main/Demo01";
import Demo02 from "@/components/main/Demo02";
import Demo03 from "@/components/main/Demo03";
import CircleCardDemo from "@/components/main/CircleCardDemo";
// import {useScrollReveal } from "@/hooks/useScrollReveal"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tabs = [
  {
    id: "groupware",
    label: "그룹웨어&메신저",
    subtitle: "웹 표준화를 준수하는 최신의 HTML5 기반",
    features: [
      {
        icon: "/images/main/solution-icon01.png",
        text: "고객의 요구에 만족할 수 있는",
        strong: "커스터마이징",
      },
      {
        icon: "/images/main/solution-icon02.png",
        text: "레거시 시스템을 위한",
        strong: "시스템 연동 지원",
      },
      {
        icon: "/images/main/solution-icon03.png",
        text: "전문인력을 통한",
        strong: "유지보수",
      },
    ],
    desc: [
      "생산현장 실시간 모니터링",
      "모바일 관리기능 제공",
      "대화별 #스레드 가능",
    ],
    image: "/images/main/solution01.png",
  },
  {
    id: "hr",
    label: "인사관리시스템",
    subtitle: "효율적인 인사관리를 위한 통합 솔루션",
    features: [
      {
        icon: "/images/main/solution-icon01.png",
        text: "직원 정보를 한눈에",
        strong: "통합 관리",
      },
      {
        icon: "/images/main/solution-icon02.png",
        text: "자동화된",
        strong: "급여 처리",
      },
      {
        icon: "/images/main/solution-icon03.png",
        text: "체계적인",
        strong: "성과 평가",
      },
    ],
    desc: ["근태 자동 집계", "급여 명세서 자동 발송", "조직도 실시간 관리"],
    image: "/images/main/solution02.png",
  },
];

// 커스텀 셀렉트 컴포넌트
const InlineSelect = ({ options, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-select-wrapper" ref={selectRef}>
      <div className="select-trigger" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <span className="caret">▼</span>
      </div>
      {isOpen && (
        <ul className="select-options">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={selected === option ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function MainLayout() {
  //useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const solutionRef = useRef(null);
  const lenisRef = useRef(null);
  const navigate = useNavigate();
  const [noticeItems, setNoticeItems] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(0);

  //mainIntro 끝나고 Lenis 시작 ..
  useEffect(() => {
    const intro = document.getElementById("mainIntro");
    let triggered = false;

    document.body.classList.add("intro-active");

    setTimeout(() => {
      intro.classList.add("intro-load");
    }, 0);

    const handleIntroTransition = () => {
      if (triggered) return;
      triggered = true;

      intro.classList.add("load");

      setTimeout(() => {
        setTimeout(() => {
          intro.style.opacity = "0";
          intro.style.transition = "opacity 0.4s";
          setTimeout(() => {
            intro.style.display = "none";
            document.body.classList.remove("intro-active");

            const lenis = new Lenis({
              duration: 2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              wheelMultiplier: 1.5,
              touchMultiplier: 1.0,
              infinite: false,
              syncTouch: true,
            });
            lenis.on("scroll", ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
            lenisRef.current = lenis;
          }, 400);
        }, 200);
      }, 900);
    };

    window.addEventListener("wheel", handleIntroTransition, { passive: true });
    window.addEventListener("touchstart", handleIntroTransition);

    return () => {
      window.removeEventListener("wheel", handleIntroTransition);
      window.removeEventListener("touchstart", handleIntroTransition);
      lenisRef.current?.destroy();

      document.body.classList.remove("intro-active");
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const totalTabs = tabs.length;
    ScrollTrigger.create({
      trigger: solutionRef.current,
      start: "top top",
      end: `+=${totalTabs * 100}%`,
      pin: true,
      anticipatePin: 1.5,
      //markers:true,
      //scrub: true,
      snap: {
        snapTo: 1 / (totalTabs - 1),
        duration: { min: 0.3, max: 0.6 },
        ease: "power2.inOut",
        fastScrollEnd: true,
        preventOverlaps: true,
      },
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * totalTabs),
          totalTabs - 1,
        );
        setActiveTab(index);
      },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleTabClick = (index) => {
    const trigger = ScrollTrigger.getAll()[0];
    if (!trigger) return;
    const targetScroll =
      trigger.start + (trigger.end - trigger.start) * (index / tabs.length);
    gsap.to(window, {
      scrollTo: targetScroll,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    getAllNotiService()
      .then((res) => {
        const recent = [...res.data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6);

        const looped = [...recent, ...recent, ...recent].map((item, idx) => ({
          ...item,
          _uid: `${item.id}-${idx}`,
          uniqueKey: `item-${item.id}-index-${idx}`,
        }));

        setNoticeItems(looped);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const target = document.querySelector(`.itm0${activeTab + 1}`);
    if (!target) return;

    gsap.fromTo(
      target,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" },
    );
  }, [activeTab]);

  return (
    <>
      <div className="main-layout">
        <PopupViewer />
        <div id="mainIntro">
          <div className="main-intro-wrap">
            <div className="intro-top">
              <span className="bg"></span>
            </div>
            <div className="intro-middle">
              <div className="intro-middle-item"></div>
              <div className="intro-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="510"
                  height="411"
                  viewBox="0 0 252.3 198"
                  className="mask"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <mask id="path-mask">
                      <rect width="100%" height="100%" fill="white" />
                      <path
                        className="st0"
                        d="M187.2,66.8c-13.1-23.2-60.8-21.2-106.5,4.7-45.7,25.8-72.1,65.6-59,88.8,13.1,23.2,60.8,21.2,106.5-4.7,45.7-25.8,72.1-65.6,59-88.8ZM87.6,132.8c-20.5,11.6-40.7,14.8-45.1,7.1-4.3-7.7,8.8-23.3,29.4-34.9,20.5-11.6,40.7-14.8,45.1-7.1,4.3,7.7-8.8,23.3-29.4,34.9Z"
                      />
                      <path
                        className="st0"
                        d="M201.2,3.7c46.3,37.3,27.1,100.1,0,129.5-50.5,54.7-124.5,56.3-124.5,56.3,0,0,99.8,31.9,152.5-45.3C291.2,53.2,201.2,3.7,201.2,3.7Z"
                      />
                      <path
                        className="st0"
                        d="M145.9,29.7c44.7,0,60.1,35.1,61.6,44.4,0,0,14.2-73.2-67.6-72.1C16.7,3.7,1.4,123.4,1.4,123.4c0,0,39.9-93.7,144.5-93.7Z"
                      />
                    </mask>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--intro-color)"
                    mask="url(#path-mask)"
                  />
                </svg>
              </div>
              <div className="intro-middle-item"></div>
            </div>
            <div className="intro-bottom">
              <span className="bg"></span>
            </div>
          </div>
        </div>
        <section className="main-video">
          <video src="/images/main/video.mp4" autoPlay muted loop></video>
          <div className="txt">
            <div className="inner">
              <h1>
                맞춤형 IT 솔루션,
                <br />
                산업의 새로운 기준이 되다
              </h1>
              <p>
                고객님의 다양한 니즈를 직접 해결하기 위해 <br />
                지속적인 사업확장으로 다방면의 솔루션을 제공하는 기업이
                되겠습니다.
              </p>
            </div>
          </div>
          <div className="scroll-guide">
            <span className="scroll-txt">Scroll</span>
            <div className="scroll-line">
              <div className="scroll-ball"></div>
            </div>
          </div>
        </section>

        {/* <section className="main-sc01">
          <div className="inner container">
            <div className="title-box">
              <span className="eng">Business</span>
              <h1>
                깊이 있는 IT 노하우로 고객의
                <br />
                비즈니스에 최적화된 해답을
                <br />
                제시합니다.
              </h1>
              <p>
                성공적인 디지털 전환(DX)을 통해 업무 효율을 극대화하고
                <br />
                기업의 지속 가능한 성장을 이끕니다.
              </p>
              <a href="#">
                <span>사업분야 바로가기</span>
                <i>
                  <img src="/images/main/more.png" alt="" />
                </i>
              </a>
            </div>
            <div className="business">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <figure className="img">
                      <img src="/images/main/solution01.png" alt="" />
                      <div className="hover-box">
                        <h3>제조·서비스 사업</h3>
                        <ul>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                        </ul>
                      </div>
                    </figure>
                    <div className="txt-box">
                      <span>Manufacturing and Service Business</span>
                      <p>제조·서비스 사업</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure className="img">
                      <img src="/images/main/solution01.png" alt="" />
                      <div className="hover-box">
                        <h3>제조·서비스 사업</h3>
                        <ul>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                        </ul>
                      </div>
                    </figure>
                    <div className="txt-box">
                      <span>Manufacturing and Service Business</span>
                      <p>제조·서비스 사업</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure className="img">
                      <img src="/images/main/solution01.png" alt="" />
                      <div className="hover-box">
                        <h3>제조·서비스 사업</h3>
                        <ul>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                        </ul>
                      </div>
                    </figure>
                    <div className="txt-box">
                      <span>Manufacturing and Service Business</span>
                      <p>제조·서비스 사업</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure className="img">
                      <img src="/images/main/solution01.png" alt="" />
                      <div className="hover-box">
                        <h3>제조·서비스 사업</h3>
                        <ul>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                        </ul>
                      </div>
                    </figure>
                    <div className="txt-box">
                      <span>Manufacturing and Service Business</span>
                      <p>제조·서비스 사업</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure className="img">
                      <img src="/images/main/solution01.png" alt="" />
                      <div className="hover-box">
                        <h3>제조·서비스 사업</h3>
                        <ul>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                        </ul>
                      </div>
                    </figure>
                    <div className="txt-box">
                      <span>Manufacturing and Service Business</span>
                      <p>제조·서비스 사업</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <figure className="img">
                      <img src="/images/main/solution01.png" alt="" />
                      <div className="hover-box">
                        <h3>제조·서비스 사업</h3>
                        <ul>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                          <li>SM(System Management)</li>
                        </ul>
                      </div>
                    </figure>
                    <div className="txt-box">
                      <span>Manufacturing and Service Business</span>
                      <p>제조·서비스 사업</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="business-cover"></div>
        </section> */}
        
        <CircleCardDemo/>
        <Demo01 />

        {/* <section className="main-sc02" ref={solutionRef}>
          <div className="inner">
            <div className="solution">
              <h3>Solution</h3>
              <ul className="tab">
                {tabs.map((tab, index) => (
                  <li
                    key={tab.id}
                    className={activeTab === index ? "on" : ""}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
              <div className="con">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    className={`itm itm0${index + 1} ${activeTab === index ? "active" : ""}`}
                  >
                    <div className="info">
                      <div className="title">
                        <span>{tab.subtitle}</span>
                        <h2>{tab.label}</h2>
                      </div>
                      <div className="content">
                        <ul>
                          {tab.features.map((feature, i) => (
                            <li key={i}>
                              <i>
                                <img src={feature.icon} alt="" />
                              </i>
                              <p>
                                {feature.text} <strong>{feature.strong}</strong>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="desc-wrap">
                      <div className="desc">
                        <ul>
                          {tab.desc.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <div className="link-box">
                          <a href="#" className="btn01">
                            자세히보기
                          </a>
                          <a href="#" className="btn02">
                            문의하기
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
        <Demo02 />
        {/* <Demo03 /> */}
        <section className="main-sc03">
          <div className="inner tight">
            <div className="left">
              <div className="title-box">
                <span className="eng">Global Network</span>
                <h1>
                  공간의 제약이 사라진 스마트팩토리, <br />
                  글로벌 생산 관리의 새로운 기준
                </h1>
                <p>
                  해외 공장의 제조 공정부터 글로벌 물류 흐름까지, <br />
                  복잡한 글로벌 공급망을 단 하나의 시스템으로 통합합니다.
                </p>
              </div>
              <div className="certi-box">
                <ul>
                  <li>
                    <img src="/images/main/certi01.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/main/certi02.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/main/certi03.png" alt="" />
                  </li>
                </ul>
                <p className="txt">충분한 사업 수행역량 보유 기업</p>
              </div>
            </div>
            <div className="map">
              <div className="map-node asia">
                <div className="core"></div>
                <div className="wave"></div>
                <span className="label">아시아</span>
              </div>
              <div className="map-node europe">
                <div className="core"></div>
                <div className="wave"></div>
                <span className="label">유럽</span>
              </div>
              <div className="map-node vietnam">
                <div className="core"></div>
                <div className="wave"></div>
                <span className="label">베트남</span>
              </div>
              <div className="map-node main-node">
                <div className="core"></div>
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>
                <span className="label">
                  <img src="/images/logo.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="main-sc04">
          <div className="sentence-container">
            <InlineSelect
              options={[
                "철강·제조",
                "IT·소프트웨어",
                "물류·유통",
                "의료·바이오",
              ]}
              defaultValue="철강·제조"
            />
            <span className="text"> 산업의 </span>
            <InlineSelect
              options={[
                "생산 공정 최적화",
                "운영비용 절감",
                "데이터 보안 강화",
                "품질 향상",
              ]}
              defaultValue="생산 공정 최적화"
            />
            <span className="text">를 위한 </span> <br />
            <InlineSelect
              options={["스마트팩토리", "ERP 구축", "클라우드 도입"]}
              defaultValue="스마트팩토리"
            />
            <span className="text"> 솔루션을 추천받고 싶어요.</span>
          </div>

          <div className="title-box">
            <a href="#">
              <span>해당 조건으로 추천받기</span>
              <i>
                <img src="/images/main/more.png" alt="" />
              </i>
            </a>
          </div>

          <div className="icon-wrapper">
            <div className="icon-box">
              <div className="icon-track">
                <div>
                  <img src="/images/main/recommand_ico01.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico02.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico03.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico04.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico05.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico06.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico07.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico08.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico09.png" alt="" />
                </div>
              </div>
              <div className="icon-track">
                <div>
                  <img src="/images/main/recommand_ico01.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico02.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico03.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico04.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico05.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico06.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico07.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico08.png" alt="" />
                </div>
                <div>
                  <img src="/images/main/recommand_ico09.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-sc05">
          <div className="inner tight">
            <div className="partner">
              <div className="title-box">
                <span className="eng">Partners</span>
                <h1>
                  산업을 선도하는 기업들이 <br />
                  동연에스엔티와 함께 합니다
                </h1>
              </div>
              <div className="product">
                <ul>
                  <li
                    className={`pr01 ${activeProduct === 0 ? "on" : ""}`}
                    onMouseEnter={() => setActiveProduct(0)}
                  >
                    <i className="logo">
                      <img src="/images/main/partner-pd-logo01.png" alt="" />
                    </i>
                    <div className="active-box">
                      <div className="text-box">
                        <span>Real OSMU 솔루션</span>
                        <i>
                          <img
                            src="/images/main/partner-pd-logo01.png"
                            alt=""
                          />
                        </i>
                        <p className="desc">
                          웹과 네이티브의 경계를 허물고 하나의 소스로 모든{" "}
                          <br />
                          비즈니스환경에 완벽대응
                        </p>
                      </div>
                      <div className="img-box">
                        <img src="/images/main/partner-pd01.png" alt="" />
                      </div>
                    </div>
                  </li>
                  <li
                    className={`pr02 ${activeProduct === 1 ? "on" : ""}`}
                    onMouseEnter={() => setActiveProduct(1)}
                  >
                    <i className="logo">
                      <img src="/images/main/partner-pd-logo02.png" alt="" />
                    </i>
                    <div className="active-box">
                      <div className="text-box">
                        <span>Real OSMU 솔루션</span>
                        <i>
                          <img
                            src="/images/main/partner-pd-logo03.png"
                            alt=""
                          />
                        </i>
                        <p className="desc">
                          웹과 네이티브의 경계를 허물고 하나의 소스로 모든{" "}
                          <br />
                          비즈니스환경에 완벽대응
                        </p>
                      </div>
                      <div className="img-box">
                        <img src="/images/main/partner-pd01.png" alt="" />
                      </div>
                    </div>
                  </li>
                  <li
                    className={`pr03 ${activeProduct === 2 ? "on" : ""}`}
                    onMouseEnter={() => setActiveProduct(2)}
                  >
                    <i className="logo">
                      <img src="/images/main/partner-pd-logo03.png" alt="" />
                    </i>
                    <div className="active-box">
                      <div className="text-box">
                        <span>Real OSMU 솔루션</span>
                        <i>
                          <img
                            src="/images/main/partner-pd-logo03.png"
                            alt=""
                          />
                        </i>
                        <p className="desc">
                          웹과 네이티브의 경계를 허물고 하나의 소스로 모든{" "}
                          <br />
                          비즈니스환경에 완벽대응
                        </p>
                      </div>
                      <div className="img-box">
                        <img src="/images/main/partner-pd01.png" alt="" />
                      </div>
                    </div>
                  </li>
                  <li
                    className={`pr04 ${activeProduct === 3 ? "on" : ""}`}
                    onMouseEnter={() => setActiveProduct()}
                  >
                    <i className="logo">
                      <img src="/images/main/partner-pd-logo04.png" alt="" />
                    </i>
                    <div className="active-box">
                      <div className="text-box">
                        <span>Real OSMU 솔루션</span>
                        <i>
                          <img
                            src="/images/main/partner-pd-logo04.png"
                            alt=""
                          />
                        </i>
                        <p className="desc">
                          웹과 네이티브의 경계를 허물고 하나의 소스로 모든{" "}
                          <br />
                          비즈니스환경에 완벽대응
                        </p>
                      </div>
                      <div className="img-box">
                        <img src="/images/main/partner-pd01.png" alt="" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="icon-wrapper">
                <div className="icon-box">
                  <div className="icon-track">
                    <div>
                      <img src="/images/main/partner01.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner02.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner03.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner04.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner05.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner06.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner07.png" alt="" />
                    </div>
                  </div>
                  <div className="icon-track">
                    <div>
                      <img src="/images/main/partner01.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner02.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner03.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner04.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner05.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner06.png" alt="" />
                    </div>
                    <div>
                      <img src="/images/main/partner07.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-sc06">
          <div className="inner tight">
            <div className="top">
              <div className="title-box">
                <span className="eng">Story</span>
                <h1>
                  끊임없는 혁신과 성장의 기록.
                  <br />
                  동연에스티가 만들어가는 이야기를 들려드립니다
                </h1>
              </div>
              <div className="pager-box">
                <button ref={prevRef} className="notice-prev">
                  <img src="/images/main/arrow-left.png" alt="" />
                </button>
                <button ref={nextRef} className="notice-next">
                  <img src="/images/main/arrow-right.png" alt="" />
                </button>
              </div>
            </div>

            {noticeItems.length > 0 && (
              <div className="notice-swiper-wrap">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop={true}
                  loopAdditionalSlides={6}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  spaceBetween={20}
                  slideToClickedSlide={true}
                  grabCursor={true}
                  navigation={{
                    prevEl: ".notice-prev",
                    nextEl: ".notice-next",
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  className="notice-swiper"
                >
                  {noticeItems.map((item) => (
                    <SwiperSlide
                      key={item.uniqueKey}
                      onClick={() => navigate(`/about/notice/${item.id}`)}
                    >
                      <div className="notice-slide-thumb">
                        {item.sfile || item.imageUrl ? (
                          <img
                            src={
                              item.sfile
                                ? `${BASE_API_URL}/uploads/${item.sfile}`
                                : item.imageUrl
                            }
                            alt={item.title}
                          />
                        ) : (
                          <div className="notice-slide-thumb-default">
                            <img src="/images/logo.png" alt="" />
                          </div>
                        )}
                      </div>
                      <p className="notice-slide-title">{item.title}</p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
