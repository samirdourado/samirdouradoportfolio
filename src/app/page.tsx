import { Hero } from "@/components/hero";
import { PyramidDivider } from "@/components/divider_pyramid";
import { PortfolioPage } from "@/components/portfolioPage";
import { ComunicationPage } from "@/components/comunicationPage";
import { FooterPage } from "@/components/footerPage";
import { AboutMePage } from "@/components/aboutMePage";

export default function Home() {
  return (
    <>
      <Hero />
      <PyramidDivider />
      <AboutMePage />
      <PortfolioPage />
      <ComunicationPage />
      <FooterPage />
    </>
  );
}
