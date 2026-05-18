import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    id: "login",
    image: "/images/login.png",
    badge: "A",
    badgePos: { top: "40%", left: "63%" },
    title: "로그인 영역",
    desc: "이메일과 비밀번호를 입력하고 로그인을 진행해 주세요. 안전한 서비스 이용을 위해 인증이 필요합니다.",
    mask: { x: 900, y: 280, w: 620, h: 420 },
  },
  {
    id: "main",
    image: "/images/main.png",
    badge: "B",
    badgePos: { top: "47%", left: "38%" },
    title: "대시보드 카드",
    desc: "내가 개설한 협업 카드를 확인할 수 있습니다. 협업 생성 버튼으로 새 협업을 시작하세요.",
    mask: { x: 570, y: 405, w: 500, h: 360 },
  },
  {
    id: "sub",
    image: "/images/sub.png",
    badge: "C",
    badgePos: { top: "10%", left: "19%" },
    title: "데이터 테이블",
    desc: "샘플 데이터의 전체 목록을 확인하고 검색 조건으로 필터링할 수 있습니다.",
    mask: { x: 285, y: 90, w: 1405, h: 520 },
  },
];

export default function DemoScrollEx() {
  const sectionRef = useRef(null); 
  const wrapRef    = useRef(null);
  const maskRef    = useRef(null);
  const bgRefs     = useRef([]);
  const stepRefs   = useRef([]);
  const alertRefs  = useRef([]);
    
  useEffect(() => {
    console.log(sectionRef.current.getBoundingClientRect().top + window.scrollY);
    const section = sectionRef.current; 
    const mask    = maskRef.current;
    const bgs     = bgRefs.current;
    const steps   = stepRefs.current;
    const alerts  = alertRefs.current;

    const tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: section,       
      start: "top top",       
      end: "+=300%",
      scrub: 1,
      pin: true,
      scroller: "body",
      animation: tl,
      pinSpacing: true, 
      markers: true, 
    });

    gsap.set(mask, { attr: { x: 0, y: 0, width: 1600, height: 900 } });
    gsap.set(steps, { autoAlpha: 0 });
    gsap.set(alerts, { autoAlpha: 0, y: "-50%" });
    bgs.forEach((bg, i) => gsap.set(bg, { autoAlpha: i === 0 ? 1 : 0 }));

    STEPS.forEach((step, i) => {
      const label  = `step${i}`;
      const label2 = `step${i}out`;

      if (i > 0) {
        tl.to(bgs[i], { autoAlpha: 1, duration: 0.3 }, `${label}-=0.2`);
      }

      tl.to(alerts[i], { autoAlpha: 1, y: 0 }, label)
        .to(steps[i], { autoAlpha: 1 }, label)
        .to(mask, {
          attr: { x: step.mask.x, y: step.mask.y, width: step.mask.w, height: step.mask.h },
          duration: 0.4,
        }, `${label}+=0.2`)
        .addLabel(label2, "+=0.6")
        .to(alerts[i], { autoAlpha: 0, y: "-50%" }, label2)
        .to(steps[i], { autoAlpha: 0 }, label2)
        .to(mask, {
          attr: { x: 0, y: 0, width: 1600, height: 900 },
          duration: 0.3,
        }, label2);
    });

    tl.to({}, { duration: 0.5 });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* <div style={{ height: "50vh" }} />  */}

      <section
        ref={sectionRef}  
        className="demo-section"
        style={{ 
        padding: "0 clamp(20px, 5vw, 80px)",
        height: "100vh",           
        display: "flex",           
        alignItems: "center",      
    }}
      >
        <div
          ref={wrapRef}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            overflow: "hidden",
            borderRadius: 16,
            boxShadow: "0 40px 120px rgba(0,0,0,0.4)",
            background: "#111",
          }}
        >
          {/* 배경 이미지들 */}
          {STEPS.map((step, i) => (
            <img
              key={step.id}
              ref={(el) => (bgRefs.current[i] = el)}
              src={step.image}
              alt={step.title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ))}

          {/* Step 뱃지 */}
          {STEPS.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{
                position: "absolute",
                top: step.badgePos.top,
                left: step.badgePos.left,
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#4f7cff",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(79,124,255,0.6)",
                zIndex: 10,
                visibility: "hidden",
                opacity: 0,
              }}
            >
              {step.badge}
            </div>
          ))}

          {/* SVG Mask 오버레이 */}
          <svg
            viewBox="0 0 1600 900"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 20,
            }}
          >
            <defs>
              <mask id="demo-mask">
                <rect width="1600" height="900" fill="white" />
                <rect
                  ref={maskRef}
                  x="0" y="0" width="1600" height="900"
                  rx="6" ry="6"
                  fill="black"
                />
              </mask>
            </defs>
            <rect
              width="1600" height="900"
              fill="rgba(0,0,0,0.72)"
              mask="url(#demo-mask)"
            />
          </svg>

          {/* Alert 말풍선 */}
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              right: "2%",
              width: 280,
              zIndex: 30,
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => (alertRefs.current[i] = el)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  background: "rgba(10,14,25,0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "18px 20px",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  visibility: "hidden",
                  opacity: 0,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "#4f7cff",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  {step.badge}
                </div>
                <p style={{ fontWeight: 600, fontSize: 14, color: "#e8eaf0", marginBottom: 6 }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#6b7280" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <p style={{ fontSize: 20, color: "#6b7280" }}>다음 section ...</p>
      </div>
{/* 
      <div style={{ height: "30vh" }} />  */}
    </>
  );
}
