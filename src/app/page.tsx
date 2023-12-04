import "./globals.css"
import "./style.css"
import { HeaderPage } from "@/components/headerPage"
import { PyramidDivider } from "@/components/divider_pyramid"
import { PortfolioPage } from "@/components/portfolioPage"
import { ComunicationPage } from "@/components/comunicationPage"
import { FooterPage } from "@/components/footerPage"
import { AboutMePage } from "@/components/aboutMePage"

export default function Home() {
  return (
    <>
      <HeaderPage/>      
      <PyramidDivider/>
      <AboutMePage/>
      <PortfolioPage/>
      <ComunicationPage/>
      <FooterPage/>
    </>
  )
}
