import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { EffectFade } from "swiper/modules";
import "swiper/css";

export default function BusinessAreaTab() {
  const rootRef = useRef(null);

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
          <button className="line-tab active" type="button" data-idx="0">
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
                  산업별 업무 환경에 최적화된 솔루션으로 경영 혁신과 디지털
                  전환을 지원합니다.
                </p>
                <ul className="tag-box">
                  <li className="tag">통합경영관리(ERP)</li>
                  <li className="tag">인사관리(HR)</li>
                  <li className="tag">재무회계(FA)</li>
                  <li className="tag">구매관리(PMS)</li>
                  <li className="tag">고객관리(CRM)</li>
                  <li className="tag">실제 원가관리(AC)</li>
                  <li className="tag">내부회계(ICMS)</li>
                  <li className="tag">렌탈(RS)</li>
                  <li className="tag">IT 서비스관리(ITSM)</li>
                  <li className="tag">그룹웨어(EKP)&메신저</li>
                </ul>
              </div>
              <div className="img-box">
                <img src="/images/sub/about-tab-img01.jpg" alt="솔루션 서비스" />
              </div>
            </div>

            <div className="swiper-slide item">
              <div className="txt-box">
                <h3 className="tit">공공/금융 서비스</h3>
                <p className="txt">
                  공공기관 및 금융사에 특화된 안정적인 시스템을 제공합니다.
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
                  <li className="tag">빅데이터기반 AI 분석</li>
                  <li className="tag">통합설비제어관제</li>
                  <li className="tag">
                    DX/AX(통합설비관제, 통합설비보전, 생산공정최적화,
                    통합품질관리, 환경안전경영, 통합물류운송, 기업경영관리)
                  </li>
                  <li className="tag">X-SCADA</li>
                  <li className="tag">X-DAS</li>
                </ul>
              </div>
              <div className="img-box">
                <img src="/images/sub/about-tab-img03.jpg" alt="IOT/AI/RPA" />
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
                <img src="/images/sub/about-tab-img04.jpg" alt="Other" />
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
  );
}