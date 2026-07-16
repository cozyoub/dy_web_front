import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubTitle from "@/components/sub/common/SubTitle";
import BusinessAreaTab from "@/components/sub/BusinessAreaTab";

gsap.registerPlugin(ScrollTrigger);

export default function Business01() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const visual = root.querySelector(".about01-visual");
    if (!visual) return;

    const ctx = gsap.context(() => {
      visual.querySelectorAll(".tit-box li .en").forEach((el) => {
        el.innerHTML = el.textContent
          .split("")
          .map((c) => `<span>${c}</span>`)
          .join("");
      });
      visual.querySelectorAll(".tit-box li .kr").forEach((el) => {
        el.innerHTML = `<span>${el.textContent}</span>`;
      });

      gsap.set(".about01-visual .tit-box li:nth-child(2) .en span", {
        y: "100%",
      });
      gsap.set(".about01-visual .tit-box li:nth-child(2) .kr span", {
        y: "100%",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about01-visual",
            start: "top top",
            end: "25% top",
            scrub: true,
          },
        })
        .to(".about01-visual .img-wrap", {
          width: "100%",
          left: 0,
          borderRadius: 0,
          ease: "none",
        })
        .to(".about01-visual .img-wrap img", { opacity: 0.4 }, 0);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about01-visual",
            start: "25% top",
            end: "75% top",
            scrub: 3,
          },
        })
        .to(".about01-visual .tit-box li:nth-child(1) .en span", {
          y: 0,
          stagger: 0.05,
        })
        .to(".about01-visual .tit-box li:nth-child(1) .kr span", { y: 0 })
        .to(".about01-visual .tit-box li:nth-child(1) .en span", {
          y: "-100%",
          stagger: 0.05,
          duration: 3,
        })
        .to(
          ".about01-visual .tit-box li:nth-child(1) .kr span",
          { y: "-100%", duration: 10 },
          "<",
        )
        .to(
          ".about01-visual .tit-box li:nth-child(2) .en span",
          { y: 0, stagger: 0.05, duration: 10 },
          "+=0.3",
        )
        .to(
          ".about01-visual .tit-box li:nth-child(2) .kr span",
          { y: 0, duration: 3 },
          "<",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".about01-last",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        })
        .fromTo(
          ".about01-last .logo .front",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)" },
        )
        .to(".about01-last .txt span", { backgroundPositionX: "0%" });
    }, root); // ✅ rootRef.current (DOM 엘리먼트)를 넘김

    const t = setTimeout(() => ScrollTrigger.refresh(true), 300);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="about-wrap" ref={rootRef}>
        <div className="about01">
          <div className="about-intro-tit">
            <div className="sub-inner">
              <SubTitle
                desc="디지털 기술로 더 나은 산업 현장을 만듭니다."
                title="동연에스엔티 소개"
              />
            </div>
          </div>
          <div className="about01-visual">
            <div className="img-wrap">
              <img src="/images/sub/about-bg.jpg" alt="" />
            </div>
            <ul className="tit-box">
              <li>
                <p className="en">DIGITAL</p>
                <p className="kr">
                  디지털 기술로 더 나은 산업 현장을 만듭니다.
                </p>
              </li>
              <li>
                <p className="en">SMART</p>
                <p className="kr">
                  효율적인 업무 운영과 지속 가능한 성장을 제공합니다.
                </p>
              </li>
            </ul>
          </div>

          <div className="about01-last">
            <div className="logo">
              <img className="back" src="/images/sub/dy-logo.svg" alt="" />
              <img className="front" src="/images/sub/dy-logo.svg" alt="" />
            </div>
            <p className="txt">
              <span>
                스마트한 시스템과 전문 기술로 <br />
                기업 경쟁력을 높이는 디지털 혁신 파트너
              </span>
            </p>
          </div>
        </div>
        <div className="business-area-wrap">
          <div className="sub-inner">
            <SubTitle
              title="통합 IT솔루션 개발 및 서비스 사업"
              desc="Business Area"
            />
            <BusinessAreaTab />
          </div>
        </div>
      </div>
    </>
  );
}