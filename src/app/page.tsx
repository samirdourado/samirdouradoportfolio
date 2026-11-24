import { Hero } from "@/components/hero";
import { PyramidDivider } from "@/components/divider_pyramid";
import { PortfolioPage } from "@/components/portfolioPage";
import { ComunicationPage } from "@/components/comunicationPage";
import { FooterPage } from "@/components/footerPage";
import { Overview } from "@/components/overview";
import { MySkills } from "@/components/mySkills";

export default function Home() {
  return (
    <>
      <Hero />
      <PyramidDivider />
      <Overview />
      <MySkills />
      <PortfolioPage />
      <ComunicationPage />
      <FooterPage />
    </>
  );
}
