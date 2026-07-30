import "@/assets/css/main.css";
import MainCircleAni from "@/components/main/MainCircleAni";
import MainHero from "@/components/main/MainHero";
import NcoreInteAni from "@/components/main/MainNcoreInte";
import NcoreConnectDiagram from "@/components/main/NcoreConnetcDiagram";
import NcoreFactoryAi from "@/components/main/NcoreFactoryAi";

export default function MainLayout() {
  return (
    <main id="main-content">
      <MainHero/>
      <MainCircleAni/>
      <NcoreInteAni/>
      <NcoreConnectDiagram/>
      <NcoreFactoryAi/>
    </main>
  );
}