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
import PromotionSlider from "@/components/main/PromotionSlider";

export default function MainLayout() {
  return (
    <main id="main-content">
      <MainHero/>
      <MainCircleAni/>
      <NcoreInteAni/>
      <NcoreConnectDiagram/>
      <NcoreFactoryAi/>
      <MainDesign/>
      <MainCase/>
      <MainIndustry/>
      <PromotionSlider/>
      <MainProcess/>
    </main>
  );
}