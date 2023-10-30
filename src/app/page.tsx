import "./globals.css"
import "./style.css"
import { Header } from '@/components/header'
import { PyramidDivider } from '@/components/divider_pyramid'
import { PortfolioPage } from '@/components/portfolio'
import { ContactHolder } from '@/components/contactHolder'

export default function Home() {
  return (
    <>
      <Header/>
      <PyramidDivider/>
      <PortfolioPage/>
      <ContactHolder/>
    </>
  )
}
