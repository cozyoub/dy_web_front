import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

export default function About01() {
  useEffect(() => {
    const visual = document.querySelector(".about01-visual");
    if (!visual) return;

    visual.querySelectorAll(".tit-box li .en").forEach((el) => {
      el.innerHTML = el.textContent
        .split("")
        .map((c) => `<span>${c}</span>`)
        .join("");
    });
    visual.querySelectorAll(".tit-box li .kr").forEach((el) => {
      el.innerHTML = `<span>${el.textContent}</span>`;
    });

    // 두번째 li 처음엔 아래 숨기기
    gsap.set(".about01-visual .tit-box li:nth-child(2) .en span", {
      y: "100%",
    });
    gsap.set(".about01-visual .tit-box li:nth-child(2) .kr span", {
      y: "100%",
    });

    // 이미지 펼쳐지기
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

    // 텍스트 슬라이드
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about01-visual",
          start: "25% top",
          end: "75% top",
          scrub: true,
        },
      })
      // 1번 등장
      .to(".about01-visual .tit-box li:nth-child(1) .en span", {
        y: 0,
        stagger: 0.05,
      })
      .to(".about01-visual .tit-box li:nth-child(1) .kr span", { y: 0 })
      // 1번 퇴장 + 2번 등장 동시에
      .to(".about01-visual .tit-box li:nth-child(1) .en span", {
        y: "-100%",
        stagger: 0.05,
      })
      .to(
        ".about01-visual .tit-box li:nth-child(1) .kr span",
        { y: "-100%" },
        "+=0.3",
      )
      .to(
        ".about01-visual .tit-box li:nth-child(2) .en span",
        { y: 0, stagger: 0.05 },
        "+=0.3",
      )
      .to(".about01-visual .tit-box li:nth-child(2) .kr span", { y: 0 }, "<");

    // last scene
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

    const about02Swiper = new Swiper(".about02-swiper", {
      modules: [EffectFade],
      effect: "fade",
      fadeEffect: { crossFade: true },
      allowTouchMove: false,
      speed: 700,
    });

    // 탭 클릭
    document.querySelectorAll(".about02 .line-tab").forEach((tab, i) => {
      tab.addEventListener("click", () => {
        document
          .querySelectorAll(".about02 .line-tab")
          .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        about02Swiper.slideTo(i);
        document.querySelector(".about02 .paging .current").textContent = i + 1;
        updateProgress(i + 1, 4);
        updateBtns(i, 4);
      });
    });

    // prev/next 버튼
    document
      .querySelector(".about02 .swiper-btn-item.prev")
      .addEventListener("click", () => {
        about02Swiper.slidePrev();
      });
    document
      .querySelector(".about02 .swiper-btn-item.next")
      .addEventListener("click", () => {
        about02Swiper.slideNext();
      });

    about02Swiper.on("slideChange", () => {
      const idx = about02Swiper.activeIndex;
      document.querySelectorAll(".about02 .line-tab").forEach((t, i) => {
        t.classList.toggle("active", i === idx);
      });
      document.querySelector(".about02 .paging .current").textContent = idx + 1;
      updateProgress(idx + 1, 4);
      updateBtns(idx, 4);
    });

    function updateProgress(current, total) {
      const fill = document.querySelector(
        ".about02 .swiper-pagination-progressbar-fill",
      );
      if (fill) fill.style.transform = `scaleX(${current / total})`;
    }

    function updateBtns(idx, total) {
      const prev = document.querySelector(".about02 .swiper-btn-item.prev");
      const next = document.querySelector(".about02 .swiper-btn-item.next");
      prev.classList.toggle("disabled", idx === 0);
      next.classList.toggle("disabled", idx === total - 1);
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      about02Swiper.destroy();
    };
  }, []);
  return (
    <>
      <div className="about-wrap">
        <div className="about01">
          <div className="about-intro-tit">
            <div class="sub-inner">
              <span>디지털 기술로 더 나은 산업 현장을 만듭니다.</span>
              <p>동연에스엔티 소개</p>
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
        <div className="about02">
          <div className="sub-inner">
            <div className="sect-tit-box">
              <h2 className="tit">스마트 제조를 선도하는 사업분야</h2>
              <p className="txt">
                ERP부터 스마트팩토리까지 통합 솔루션을 제공합니다.
              </p>
            </div>

            <div className="cont-wrap">
              <div className="line-tab-wrap">
                <div className="line-tab-box">
                  <button
                    className="line-tab active"
                    type="button"
                    data-idx="0"
                  >
                    솔루션 서비스
                  </button>
                  <button className="line-tab" type="button" data-idx="1">
                    공공/금융 서비스
                  </button>
                  <button className="line-tab" type="button" data-idx="2">
                    IOT/AI/RPA
                  </button>
                  <button className="line-tab" type="button" data-idx="3">
                    Other
                  </button>
                </div>
              </div>

              <div className="tab-cont">
                <div className="swiper about02-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide item">
                      <div className="txt-box">
                        <h3 className="tit">솔루션 서비스</h3>
                        <p className="txt">
                          산업별 업무 환경에 최적화된 솔루션으로 경영 혁신과
                          디지털 전환을 지원합니다.
                        </p>
                        <ul className="tag-box">
                          <li className="tag">ERP</li>
                          <li className="tag">MES</li>
                          <li className="tag">CMMS</li>
                          <li className="tag">WMS</li>
                          <li className="tag">TMS</li>
                          <li className="tag">ESH</li>
                          <li className="tag">그룹웨어</li>
                        </ul>
                      </div>
                      <div className="img-box">
                        <img
                          src="/images/sub/about-tab-img01.jpg"
                          alt="솔루션 서비스"
                        />
                      </div>
                    </div>

                    <div className="swiper-slide item">
                      <div className="txt-box">
                        <h3 className="tit">공공/금융 서비스</h3>
                        <p className="txt">
                          공공기관 및 금융사에 특화된 안정적인 시스템을
                          제공합니다.
                        </p>
                        <ul className="tag-box">
                          <li className="tag">정보화전략(ISP)</li>
                          <li className="tag">업무재설계(BPR)</li>
                          <li className="tag">시스템종합(SI)</li>
                          <li className="tag">유지보수(SM)</li>
                        </ul>
                      </div>
                      <div className="img-box">
                        <img
                          src="/images/sub/about-tab-img02.jpg"
                          alt="공공/금융 서비스"
                        />
                      </div>
                    </div>

                    <div className="swiper-slide item">
                      <div className="txt-box">
                        <h3 className="tit">IOT/AI/RPA</h3>
                        <p className="txt">
                          스마트팩토리 구현을 위한 IOT, AI, RPA 기술을 통합
                          제공합니다.
                        </p>
                        <ul className="tag-box">
                          <li className="tag">통합설비제어관제(IMS)</li>
                          <li className="tag">실시간 공정 설비 제어</li>
                          <li className="tag">빅데이터기반 AI 분석</li>
                        </ul>
                      </div>
                      <div className="img-box">
                        <img
                          src="/images/sub/about-tab-img03.jpg"
                          alt="IOT/AI/RPA"
                        />
                      </div>
                    </div>

                    <div className="swiper-slide item">
                      <div className="txt-box">
                        <h3 className="tit">Other</h3>
                        <p className="txt">기타 맞춤형 솔루션을 제공합니다.</p>
                        <ul className="tag-box">
                          <li className="tag">Package 판매</li>
                          <li className="tag">Brightis AI </li>
                          <li className="tag">Cloudium</li>
                          <li className="tag">폴라리스 오피스</li>
                          <li className="tag">PDA</li>
                          <li className="tag">키오스크 장비</li>
                        </ul>
                      </div>
                      <div className="img-box">
                        <img
                          src="/images/sub/about-tab-img04.jpg"
                          alt="Other"
                        />
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
