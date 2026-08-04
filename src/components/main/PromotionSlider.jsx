// PromotionSlider.jsx
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import VideoModal from "@/components/main/VideoModal";
import MainSectionTitle from "./MainSectionTitle";
import "swiper/css";
import "swiper/css/navigation";
import "./PromotionSlider.css";

const SLIDES = [
  {
    thumb: "/images/main/promotion_thumb01.jpg",
    title: "유니티 엔진 기반 DT",
    desc: (
      <>
        Unity 엔진 기반의 Digital Twin 기술로 현실 공간을
        <br />
        3D 환경에 구현하여 설비와 공정을 직관적으로 모니터링합니다.
      </>
    ),
    videoUrl: "/images/main/promotion01.mp4",
  },
  {
    thumb: "/images/main/promotion_thumb02.jpg",
    title: "동연에스엔티 TMS",
    desc: (
      <>
        운송 관리의 모든 과정을 하나의 시스템으로.
        <br />
        TMS의 핵심 기능과 활용 사례를 영상으로 확인해 보세요.
      </>
    ),
    videoUrl: "/images/main/promotion02.mp4",
  },
  {
    thumb: "/images/main/promotion_thumb03.jpg",
    title: "AI 품질 검사 솔루션",
    desc: (
      <>
        AI 비전 검사로 불량을 자동 판별하고
        <br />
        품질 데이터를 실시간으로 축적합니다.
      </>
    ),
    videoUrl: "/images/main/promotion03.mp4",
  },
];

export default function PromotionSlider() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [progress, setProgress] = useState((1 / SLIDES.length) * 100);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper) => {
    // loop 모드에서는 realIndex를 써야 실제 원본 슬라이드 기준으로 정확해요
    const current = swiper.realIndex;
    setProgress(((current + 1) / SLIDES.length) * 100);
  };

  return (
    <>
    <section className="promotion-slider">
      <div className="inner">
        <MainSectionTitle
          eyebrow="데모영상"
          title={
            <>
              AI가 <b>실제 현장</b>을 어떻게
              <br />
              연결하는지 확인하세요
            </>
          }
        />

        <div className="video-slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            speed={1000}
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides
            loop
            loopAdditionalSlides={3}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              544: { slidesPerView: 1, spaceBetween: 60 },
              768: { slidesPerView: 1.5, spaceBetween: 10 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
            className="ps-swiper"
          >
            {SLIDES.map((slide, idx) => (
              <SwiperSlide key={idx} className="ps-slide">
                <figure>
                  
                    <a href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveVideo(slide.videoUrl);
                    }}
                  >
                    <span className="ps-play-ring">
                      <img src="/images/main/icon_play.svg" alt="" />
                    </span>
                    <img
                      src={slide.thumb}
                      className="thum"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </figure>

                <div className="ps-txt">
                  <strong className="ps-tit">{slide.title}</strong>
                  <p className="ps-desc">{slide.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-controller">
            <div className="swiper-pagination-progressbar">
              <div
                className="swiper-pagination-progressbar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="group">
              <div className="arrow arrow--prev" ref={prevRef}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="arrow arrow--next" ref={nextRef}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
    </>
  );
}