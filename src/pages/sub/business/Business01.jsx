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
            scrub: 5,
          },
        })
        .to(".about01-visual .tit-box li:nth-child(1) .en span", {
          y: 0,
          stagger: 0.05,
          duration: 1, // 등장 속도 조금 여유있게
        })
        .to(
          ".about01-visual .tit-box li:nth-child(1) .kr span",
          { y: 0, duration: 1 },
          "<",
        )
        // 잠깐 머무름
        .to({}, { duration: 3 }) // 3초만큼 정지 상태 유지
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

      // ctx 안으로 이동: cleanup 시 같이 revert 되도록
      gsap.set(".about-ov ul li", { scale: 0.75, opacity: 0 });
      gsap.to(".about-ov ul li", {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".overview-wrap",
          start: "top 75%",
          end: "top 20%",
          scrub: true,
        },
      });
    }, root);

    const t = setTimeout(() => ScrollTrigger.refresh(true), 300);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 851px)", () => {
      const dkCtx = gsap.context(() => {
        gsap.set(".dk-gr-wrap .dk-list", { opacity: 0, y: 40 });

        const dkTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".dk-gr-wrap",
            start: "top top",
            end: "+=1200",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        dkTl
          .to(
            ".dk-gr-wrap .intro p, .dk-gr-wrap .intro span, .dk-gr-wrap .con > img",
            { opacity: 0, y: -30, duration: 0.4 },
            0.3,
          )
          .to(".dk-gr-wrap .dk-list", { opacity: 1, y: 0, duration: 0.5 }, 0.45)
          .to({}, { duration: 0.3 });
      }, root);

      return () => dkCtx.revert();
    });

    return () => {
      clearTimeout(t);
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <>
      <div className="about-wrap" ref={rootRef}>
        <div className="about01" style={{ paddingBottom: "0px" }}>
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

          {/* <div className="about01-last">
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
          </div> */}
        </div>
        <div className="overview-wrap">
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
        </div>
        <div className="dk-gr-wrap">
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
