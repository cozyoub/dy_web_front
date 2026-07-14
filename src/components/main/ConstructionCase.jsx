// ConstructionCase.jsx
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./ConstructionCase.css";
import MainTitle from "./MainTitle";

const ITEMS = [
  {
    img: "/images/main/case_img01.jpg",
    title: "자동차부품-설비제어 무인 자동화",
    desc: (
      <>
        - 공정 결과 기반 후 공정 설비제어
        <br />
        - 투입자재 포함 Lot 추적 데이터
        <br />- 실시간 재작업, 최소생산타임
      </>
    ),
  },
  {
    img: "/images/main/case_img02.jpg",
    title: "배터리-DT기반 설비 관제",
    desc: (
      <>
        - 설정 시간외 각부 실제작업 시간
        <br />
        - 애니메이션기반 Neck 공정 도출
        <br />- 시간당 생산량 증대, CT단축
      </>
    ),
  },
  {
    img: "/images/main/case_img03.jpg",
    title: "가공-Tool관리 및 설비 관제",
    desc: (
      <>
        - Tool 사용이력 관리 <br />- 생산현황, 설비상태 관제 <br />- 기간계
        작업지시 및 실적 연동
      </>
    ),
  },
  {
    img: "/images/main/case_img04.jpg",
    title: "컬러강판-설비관제 및 실적 연동",
    desc: (
      <>
        - 작업지시 기준 생산실적 자동 연동 <br />
        - 설비 파트별 공무팀 관제, 알람 <br />- 설비종합 효율 분석
      </>
    ),
  },
  {
    img: "/images/main/case_img05.jpg",
    title: "철강-압연설비 데이터 AI분석",
    desc: (
      <>
        - 설비관리시스템 임베디드 연동 <br />
        - AI분석을 통한 코일 두께 예측 <br />- 설비운영 파라미터 데이터 표준화
      </>
    ),
  },
  {
    img: "/images/main/case_img06.jpg",
    title: "자동차부품-생산현황 관제",
    desc: (
      <>
        - 생산현황 모니터링 <br />
        - 설비효율, 직행률, 가동비가동 현황 <br />- 생산실적, 불량률 분석
      </>
    ),
  },
  {
    img: "/images/main/case_img07.jpg",
    title: "화학-생산공정 품질 관리",
    desc: (
      <>
        - 원격 품질 관리데이터 관리 분석 <br />
        - 원격 설비 제어 ( 배관, 펌프, 방폭 ) <br />- 환경안전 경보 알람 시스템
        연동
      </>
    ),
  },
  {
    img: "/images/main/case_img08.jpg",
    title: "필름-생산 제어 관제",
    desc: (
      <>
        - 기간계 자동실적 체계 구축 <br />
        - 중요 품질 데이터 관리 분석 <br />- 조건별 설비 제어
      </>
    ),
  },
  {
    img: "/images/main/case_img09.jpg",
    title: "물류-계근대 통합 관제",
    desc: (
      <>
        운송관리 시스템 통합 연동 <br />
        - PLC기반 계근 시스템 구축 <br />- 국내외 공장 통합 원격 관제 구축
      </>
    ),
  },
  {
    img: "/images/main/case_img10.jpg",
    title: "열처리-품질 관리 및 알람",
    desc: (
      <>
        - 사용자 설정 기반 알람 시스템 구축 <br />
        - 작업지시별 생산 현황 관제 <br />- 품질이슈 발생 사항 사전 방지
      </>
    ),
  },
  {
    img: "/images/main/case_img11.jpg",
    title: "수처리-설비제어",
    desc: (
      <>
        - 구형 모자이크 판넬 현대화 <br />
        - 펌프, 계도밸브 원격지 제어 및 운영 <br />- 유틸리티 설비 제어 관제
      </>
    ),
  },
  {
    img: "/images/main/case_img12.jpg",
    title: "주조-주조기 품질 AI 분석",
    desc: (
      <>
        - 주조 금형 온도 열화상 카메라 분석 <br />
        - 수집 데이터 기반 머신러닝 모델 <br />- 실시간 품질 예측 데이터 관제
      </>
    ),
  },
];

// 마우스 위치를 따라 --fill-x/--fill-y 커스텀 프로퍼티를 갱신하는 훅
// (원본 jQuery btnAni()의 mouseenter/mousemove 좌표 계산을 대체)
function useFillPointer() {
  const ref = useRef(null);

  const handlePointer = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--fill-x", `${x}px`);
    el.style.setProperty("--fill-y", `${y}px`);
  };

  return { ref, onMouseEnter: handlePointer, onMouseMove: handlePointer };
}

function CaseCard({ item }) {
  const cardFill = useFillPointer();
  const btnFill = useFillPointer();

  return (
    <div
      ref={cardFill.ref}
      onMouseEnter={cardFill.onMouseEnter}
      onMouseMove={cardFill.onMouseMove}
      className="cs-card border-gradient cm-fill-btn"
    >
      <div className="liquid-effect" />
      <div className="cm-fill" />

      <div className="img-box">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="txt-box">
        <h4 className="tit">{item.title}</h4>
        <p className="txt">{item.desc}</p>
      </div>

      {/* <a
        href={item.href}
        ref={btnFill.ref}
        onMouseEnter={btnFill.onMouseEnter}
        onMouseMove={btnFill.onMouseMove}
        className="btn border-gradient cm-fill-btn-inner"
      >
        <em className="cm-fill-inner" />
        <span className="txt">{item.linkText}</span>
      </a> */}
    </div>
  );
}

function CaseLinkBtn() {
  const linkFill = useFillPointer();

  return (
    <a
      href="/solution/solution02_04"
      ref={linkFill.ref}
      onMouseEnter={linkFill.onMouseEnter}
      onMouseMove={linkFill.onMouseMove}
      className="case-link border-gradient"
    >
      <em className="cm-fill-inner" />
      <span className="txt">통합설비 바로가기</span>
    </a>
  );
}

export default function ConstructionCase() {
  const cursorRef = useRef(null);
  const [showCursor, setShowCursor] = useState(false);

  // const moveCursor = (e) => {
  //   gsap.to(cursorRef.current, {
  //     x: e.clientX,
  //     y: e.clientY,
  //     duration: 0.2,
  //     ease: "power3.out",
  //   });
  // };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/solution/solution02_04");
  };

  return (
    <div
      className="cs-case-wrap"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      // onClick={handleClick}
    >
      <div className="case-bg">
        <img src="/images/main/case_bg.jpg" alt="" />
      </div>
      <div className="inner">
        <MainTitle
          title={
            <>
              <span>통합설비 구축 사례</span>를 통한 <br />
              검증된 기술력
            </>
          }
          desc="현장을 이해한 기술, 구축 사례로 증명합니다."
        />
      </div>
      <CaseLinkBtn />
      {/* <div ref={cursorRef} className={`case-cursor ${showCursor ? "on" : ""}`}>
        <span>
          통합설비
          <br />
          바로가기
        </span>
      </div> */}

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className="cs-case-swiper"
      >
        {ITEMS.map((item, idx) => (
          <SwiperSlide key={idx} className="cs-case-slide">
            <CaseCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
