import BusinessArea from "@/components/main/BusinessArea";
import MainVisual from "@/components/main/MainVisual";
import "@/assets/css/main.css";
import PromotionVd from "@/components/main/PromotionVd";
import ConstructionCase from "@/components/main/ConstructionCase";
import FactoryAI from "@/components/main/FactoryAI";
import Partner from "@/components/main/Partner";
import Contact from "@/components/main/Contact";

export default function MainLayout() {
  return (
    <>
      <MainVisual />
      <BusinessArea />
      <PromotionVd/>
      <ConstructionCase/>
      <FactoryAI/>
      <Partner/>
      <Contact/>
    </>
  );
}