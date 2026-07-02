import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import "./CircleCardDemo.css";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { num: "23", unit: "", label: "해외 지사 수", sub: "*25년 기준" },
  {
    num: "140",
    unit: "countries",
    label: "해외궐련 사업 운영 국가 수",
    sub: "*25년 기준",
  },
  {
    num: "65.2",
    unit: "billion sticks",
    label: "해외궐련 판매수량",
    sub: "*25년 기준",
  },
  {
    num: "1.478",
    unit: "billion sticks",
    label: "스틱 판매수량",
    sub: "*25년 기준",
  },
  {
    num: "34",
    unit: "countries",
    label: "NGP 사업진출 국가 수",
    sub: "*25년 기준",
  },
];

export default function CircleCardDemo() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);
  const cardsRef = useRef(null);

  const globeRef = useRef(null);
  const rendererRef = useRef(null);
  const globeMeshRef = useRef(null);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate(self) {
          const p = self.progress;

          // 텍스트 사라짐
          const textP = Math.min(p / 0.15, 1);
          gsap.set(textRef.current, {
            opacity: 1 - textP,
          });

          // 원 커짐
          const circleP = Math.min(Math.max((p - 0.05) / 0.35, 0), 1);
          const minSize = 0;
          const maxSize = Math.max(vw, vh) * 1.5;

          const size = minSize + (maxSize - minSize) * circleP;

          gsap.set(circleRef.current, {
            width: size,
            height: size,
            borderRadius: "50%",
            xPercent: -50,
            yPercent: -50,
            opacity: 1,
          });
          // 카드 이동
          const cardP = Math.min(Math.max((p - 0.12) / 0.88, 0), 1);
          const startX = vw * 0.35;
          const endMove = 1200;

          gsap.set(cardsRef.current, {
            x: startX - endMove * cardP,
            y: Math.sin(cardP * Math.PI) * -30,
            // opacity: Math.min(cardP * 2, 1),
            opacity: 1,
          });

          if (globeMeshRef.current) {
            globeMeshRef.current.rotation.y = p * Math.PI * 2;
          }
        },
      });
    }, sectionRef);

    const canvas = globeRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(1400, 1400);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, 1, 0.1, 2000);
    camera.position.set(0, 0, 800);

    const light = new THREE.DirectionalLight("#ffffff", 7);
    light.position.set(10, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight("#ffffff", 1));

    const globe = new ThreeGlobe()
      .globeImageUrl("/images/main/earth-day.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .atmosphereAltitude(0.08)
      //.onGlobeReady(() => console.log("지구 로드됨!"));

    // 따로
    //globe.cloudsImageUrl("/images/main/2k_earth_clouds.jpg");
    const cloudTexture = new THREE.TextureLoader().load(
      "/images/main/2k_earth_clouds.jpg",
    );
    const cloudGeometry = new THREE.SphereGeometry(101, 64, 64); // 지구보다 살짝 크게
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.1,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    scene.add(globe);
    globeMeshRef.current = globe;
    console.log(globe.position, camera.position);

    const animate = () => {
      requestAnimationFrame(animate);
      clouds.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ccs-section">
      <div className="ccs-sticky">
        <div ref={circleRef} className="ccs-circle">
          {/* <div className="img-wrap">
            <img
              src="/images/main/global-bg.jpg"
              alt=""
              className="ccs-circle-img"
            />
          </div> */}
          {/* <a href="#" className="go-link">회사소개 바로가기</a> */}
          <div className="img-wrap">
            <canvas ref={globeRef} className="ccs-globe-canvas" />
          </div>
          <div ref={cardsRef} className="ccs-cards">
            {CARDS.map((c, i) => (
              <div key={i} className="ccs-card">
                <div className="ccs-card-num">
                  {c.num}
                  {c.unit && <span className="ccs-card-unit">{c.unit}</span>}
                </div>

                <div className="ccs-card-label">{c.label}</div>

                <div className="ccs-card-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={textRef} className="ccs-text">
          <p className="ccs-label">Global Business Highlights</p>

          <h2 className="ccs-title">우리는 글로벌 리더 어쩌고입니다</h2>
        </div>
      </div>
    </section>
  );
}
