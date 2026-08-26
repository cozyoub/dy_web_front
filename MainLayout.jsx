import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/assets/css/main.css";
import MainCase from "@/components/main/MainCase";
import MainCircleAni from "@/components/main/MainCircleAni";
import MainDesign from "@/components/main/MainDesign";
import MainHero from "@/components/main/MainHero";
import MainIndustry from "@/components/main/MainIndustry";
import NcoreInteAni from "@/components/main/MainNcoreInte";
import MainProcess from "@/components/main/MainProcess";
import NcoreConnectDiagram from "@/components/main/NcoreConnetcDiagram";
import NcoreFactoryAi from "@/components/main/NcoreFactoryAi";
import Partner from "@/components/main/Partner";
import PromotionSlider from "@/components/main/PromotionSlider";
import HorizonGlow from "@/components/main/HorizonWrap";
import MainProblem from "@/components/main/MainProblem";
import MainVideoVisu from "@/components/main/MainVideoVisu";
import MouseFollowBlur from "@/components/main/MouseFollowBlur";
import Contact from "@/components/main/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      lerp: 0.1, 
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(500, 33);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);
    if (document.fonts) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <main id="main-content">
      <MouseFollowBlur/>
      {/* <MainHero /> */}
      {/* <MainCircleAni/>
      <NcoreInteAni/> */}
      <MainVideoVisu/>
      <MainProblem/>
      {/* <HorizonGlow /> */}
      <NcoreConnectDiagram />
      <NcoreFactoryAi />
      <MainDesign />
      <MainCase />
      <MainIndustry />
      <PromotionSlider />
      <MainProcess />
      <Partner />
      <Contact/>
    </main>
  );
}
