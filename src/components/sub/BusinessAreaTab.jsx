import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/BusinessAreaTab";

const koTabs = ["솔루션 서비스", "공공/금융 서비스", "IOT/AI/RPA", "Other"];

const koSlides = [
  {
    title: "솔루션 서비스",
    desc: "산업별 업무 환경에 최적화된 솔루션으로 경영 혁신과 디지털 전환을 지원합니다.",
    tags: ["통합경영관리(ERP)", "인사관리(HR)", "재무회계(FA)", "구매관리(PMS)", "고객관리(CRM)", "실제 원가관리(AC)", "내부회계(ICMS)", "렌탈(RS)", "IT 서비스관리(ITSM)", "그룹웨어(EKP)&메신저"],
    imgSrc: "/images/sub/about-tab-img01.jpg",
  },
  {
    title: "공공/금융 서비스",
    desc: "공공기관 및 금융사에 특화된 안정적인 시스템을 제공합니다.",
    tags: ["정보화전략(ISP)", "업무재설계(BPR)", "시스템종합(SI)", "유지보수(SM)"],
    imgSrc: "/images/sub/about-tab-img02.jpg",
  },
  {
    title: "IOT/AI/RPA",
    desc: "스마트팩토리 구현을 위한 IOT, AI, RPA 기술을 통합 제공합니다.",
    tags: [
      "빅데이터기반 AI 분석",
      "통합설비제어관제",
      "DX/AX(통합설비관제, 통합설비보전, 생산공정최적화, 통합품질관리, 환경안전경영, 통합물류운송, 기업경영관리)",
      "X-SCADA",
      "X-DAS",
    ],
    imgSrc: "/images/sub/about-tab-img03.jpg",
  },
  {
    title: "Other",
    desc: "기타 맞춤형 솔루션을 제공합니다.",
    tags: ["Package 판매", "Brightis AI ", "Cloudium", "폴라리스 오피스", "PDA", "키오스크 장비"],
    imgSrc: "/images/sub/about-tab-img04.jpg",
  },
];

export default function BusinessAreaTab() {
  const tr = useTr(en);
  const rootRef = useRef(null);

  const tabs = koTabs.map((t, i) => tr(`tabs.${i}`, t));
  const slides = koSlides.map((s, i) => ({
    title: tr(`slides.${i}.title`, s.title),
    desc: tr(`slides.${i}.desc`, s.desc),
    tags: s.tags.map((tag, ti) => tr(`slides.${i}.tags.${ti}`, tag)),
    imgSrc: s.imgSrc,
  }));

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const about02Swiper = new Swiper(root.querySelector(".about02-swiper"), {
      modules: [EffectFade],
      effect: "fade",
      fadeEffect: { crossFade: true },
      allowTouchMove: false,
      speed: 700,
    });

    function updateProgress(current, total) {
      const fill = root.querySelector(".swiper-pagination-progressbar-fill");
      if (fill) fill.style.transform = `scaleX(${current / total})`;
    }

    function updateBtns(idx, total) {
      const prev = root.querySelector(".swiper-btn-item.prev");
      const next = root.querySelector(".swiper-btn-item.next");
      prev.classList.toggle("disabled", idx === 0);
      next.classList.toggle("disabled", idx === total - 1);
    }

    const tabEls = root.querySelectorAll(".line-tab");
    const total = tabEls.length;
    const handleTabClick = [];

    tabEls.forEach((tab, i) => {
      const onClick = () => {
        tabEls.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        about02Swiper.slideTo(i);
        root.querySelector(".paging .current").textContent = i + 1;
        updateProgress(i + 1, total);
        updateBtns(i, total);
      };
      handleTabClick.push(onClick);
      tab.addEventListener("click", onClick);
    });

    const prevBtn = root.querySelector(".swiper-btn-item.prev");
    const nextBtn = root.querySelector(".swiper-btn-item.next");
    const onPrev = () => about02Swiper.slidePrev();
    const onNext = () => about02Swiper.slideNext();
    prevBtn.addEventListener("click", onPrev);
    nextBtn.addEventListener("click", onNext);

    const onSlideChange = () => {
      const idx = about02Swiper.activeIndex;
      tabEls.forEach((t, i) => t.classList.toggle("active", i === idx));
      root.querySelector(".paging .current").textContent = idx + 1;
      updateProgress(idx + 1, total);
      updateBtns(idx, total);
    };
    about02Swiper.on("slideChange", onSlideChange);

    const t = setTimeout(() => ScrollTrigger.refresh(true), 300);

    return () => {
      clearTimeout(t);
      tabEls.forEach((tab, i) =>
        tab.removeEventListener("click", handleTabClick[i]),
      );
      prevBtn.removeEventListener("click", onPrev);
      nextBtn.removeEventListener("click", onNext);
      about02Swiper.off("slideChange", onSlideChange);
      about02Swiper.destroy();
    };
  }, []);

  return (
    <div className="cont-wrap" ref={rootRef}>
      <div className="line-tab-wrap">
        <div className="line-tab-box">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`line-tab${i === 0 ? " active" : ""}`}
              type="button"
              data-idx={i}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-cont">
        <div className="swiper about02-swiper">
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <div className="swiper-slide item" key={slide.title}>
                <div className="txt-box">
                  <h3 className="tit">{slide.title}</h3>
                  <p className="txt">{slide.desc}</p>
                  <ul className="tag-box">
                    {slide.tags.map((tag) => (
                      <li className="tag" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="img-box">
                  <img src={slide.imgSrc} alt={slide.title} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="controls">
          <div className="paging">
            <div className="current">1</div>
            <div className="swiper-pagination swiper-pagination-progressbar">
              <span className="swiper-pagination-progressbar-fill"></span>
            </div>
            <div className="total">4</div>
          </div>
          <div className="swiper-btn-wrap">
            <div className="swiper-btn-item prev">
              <div className="ico"></div>
            </div>
            <div className="swiper-btn-item next">
              <div className="ico"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
