import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import VideoModal from "@/components/main/VideoModal";
import MainSectionTitle from "./MainSectionTitle";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/main/PromotionSlider";
import "swiper/css";
import "swiper/css/navigation";
import "./PromotionSlider.css";

const KO_SLIDES = [
  {
    thumb: "/images/main/promotion_thumb01.jpg",
    title: "유니티 엔진 기반 DT",
    d1: "Unity 엔진 기반의 Digital Twin 기술로 현실 공간을",
    d2: "3D 환경에 구현하여 설비와 공정을 직관적으로 모니터링합니다.",
    videoUrl: "/images/main/promotion01.mp4",
  },
  {
    thumb: "/images/main/promotion_thumb02.jpg",
    title: "동연에스엔티 TMS",
    d1: "운송 관리의 모든 과정을 하나의 시스템으로.",
    d2: "TMS의 핵심 기능과 활용 사례를 영상으로 확인해 보세요.",
    videoUrl: "/images/main/promotion02.mp4",
  },
  {
    thumb: "/images/main/promotion_thumb03.jpg",
    title: "동국산업 설비 점검 데모",
    d1: "동국산업 설비 점검 데모",
    d2: "",
    videoUrl: "/images/main/promotion03.mp4",
  },
];

export default function PromotionSlider() {
  const tr = useTr(en);
  const SLIDES = KO_SLIDES.map((s, i) => ({
    thumb: s.thumb,
    videoUrl: s.videoUrl,
    title: tr(`slides.${i}.title`, s.title),
    desc: (
      <>
        {tr(`slides.${i}.d1`, s.d1)}
        {s.d2 && (
          <>
            <br />
            {tr(`slides.${i}.d2`, s.d2)}
          </>
        )}
      </>
    ),
  }));
  const [activeVideo, setActiveVideo] = useState(null);
  const [progress, setProgress] = useState((1 / SLIDES.length) * 100);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const current = swiper.realIndex;
    setProgress(((current + 1) / SLIDES.length) * 100);
  };

  const handleThumbLoad = () => {
    swiperRef.current?.update();
    swiperRef.current?.slideToLoop(swiperRef.current.realIndex, 0);
  };

  return (
    <>
      <section className="promotion-slider">
        <div className="inner">
          <MainSectionTitle
            eyebrow={tr("eyebrow", "데모영상")}
            title={
              <>
                {tr("title1", "AI가")} <b>{tr("titleB", "실제 현장")}</b>
                {tr("titleAfter", "을 어떻게")}
                <br />
                {tr("title2", "연결하는지 확인하세요")}
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
              observer
              observeParents
              // autoplay={{ delay: 5000, disableOnInteraction: false }}
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
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange}
              onInit={handleSlideChange}
              onBreakpoint={(swiper) => {
                swiper.update();
                swiper.slideToLoop(swiper.realIndex, 0);
              }}
              className="ps-swiper"
            >
              {SLIDES.map((slide, idx) => (
                <SwiperSlide key={idx} className="ps-slide">
                  <figure>
                    <a
                      href="#"
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
                        onLoad={handleThumbLoad}
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

        <VideoModal
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      </section>
    </>
  );
}