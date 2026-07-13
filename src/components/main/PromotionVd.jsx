// PromotionVd.jsx
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainTitle from "./MainTitle";
import VideoModal from "@/components/main/VideoModal";
import "./PromotionVd.css";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    thumb: "/images/main/promotion_thumb01.jpg",
    title: "유니티 엔진 기반 DT",
    desc: (
      <>
        Unity 엔진 기반의 Digital Twin 기술로 현실 공간을
        <br />
        3D 환경에 구현하여 설비와 공정을 직관적으로 모니터링합니다.
        <br />
        실시간 데이터 연계를 통해 운영 효율과 의사결정을 지원합니다.
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
        동연에스엔티 TMS의 핵심 기능과 활용 사례를 영상으로 확인해 보세요.
      </>
    ),
    videoUrl: "/images/main/promotion02.mp4",
  },
];

export default function PromotionVd() {
  const sectionRef = useRef(null);
  const firstItemRef = useRef(null);
  const listRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const firstItem = firstItemRef.current;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 851px)", () => {
        const pinHeight = section.offsetHeight * 0.4;

        const desc = firstItem.querySelector(".pv-desc");
        const txt = firstItem.querySelector(".pv-txt");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top 150",
            end: () => `+=${pinHeight}`,
            scrub: true,
          },
        });

        tl.to(firstItem, { height: "240px", duration: 1 }, 0);
        tl.to(desc, { opacity: 0, duration: 1 }, 0);
        tl.to(txt, { y: 30, duration: 1 }, 0);

        const firstImg = firstItem.querySelector(".pv-img");
        const firstThumb = firstItem.querySelector(".thum");
        const firstPlayBtn = firstItem.querySelector(".btn-play");
        const firstTit = firstItem.querySelector(".pv-tit");

        gsap.set(firstImg, { clipPath: "inset(0% 50% 0% 50%)" });
        gsap.set(firstThumb, { scale: 1.25 });
        gsap.set(firstTit, { y: 24, opacity: 0 });
        gsap.set(firstPlayBtn, { scale: 0, opacity: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: firstItem,
              start: "top 82%",
            },
          })
          .to(firstImg, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power4.inOut",
          })
          .to(firstThumb, { scale: 1, duration: 1.3, ease: "power3.out" }, 0)
          .to(
            firstPlayBtn,
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
            "-=0.5"
          )
          .to(
            firstTit,
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          );

        return () => tl.scrollTrigger?.kill();
      });

      const items = gsap.utils
        .toArray(".pv-item")
        .filter((item) => item !== firstItem);

      items.forEach((item) => {
        const img = item.querySelector(".pv-img");
        const thumb = item.querySelector(".thum");
        const playBtn = item.querySelector(".btn-play");
        const tit = item.querySelector(".pv-tit");
        const desc = item.querySelector(".pv-desc");

        gsap.set(img, { clipPath: "inset(0% 50% 0% 50%)" });
        gsap.set(thumb, { scale: 1.25 });
        gsap.set([tit, desc], { y: 24, opacity: 0 });
        gsap.set(playBtn, { scale: 0, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
          },
        });

        tl.to(img, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power4.inOut",
        })
          .to(thumb, { scale: 1, duration: 1.3, ease: "power3.out" }, 0)
          .to(
            playBtn,
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
            "-=0.5"
          )
          .to(
            tit,
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          )
          .to(
            desc,
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
            "-=0.4"
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="promotion-vd-wrap" ref={sectionRef}>
      <div className="inner">
        <MainTitle
          title={
            <>
              솔루션 <span>홍보영상</span>
            </>
          }
          desc="N·Core 솔루션이 만드는 스마트한 업무 환경을 영상으로 소개합니다."
        />
        <div className="pv-list" ref={listRef}>
          {ITEMS.map((it, idx) => (
            <div
              className="pv-item"
              key={idx}
              ref={idx === 0 ? firstItemRef : null}
            >
              <div className="pv-img">
                <img src={it.thumb} alt="" className="thum" />
                <button
                  type="button"
                  className="btn-play"
                  aria-label={`${it.title} 영상 재생`}
                  onClick={() => setActiveVideo(it.videoUrl)}
                >
                  <span className="btn-play-ring" />
                  <img src="/images/main/icon_play.svg" alt="" />
                </button>
              </div>
              <div className="pv-txt">
                <strong className="pv-tit">{it.title}</strong>
                <p className="pv-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}