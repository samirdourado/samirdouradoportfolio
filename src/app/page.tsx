import "./globals.css"
import "./style.css"
import { Header } from '@/components/header'
import { PyramidDivider } from '@/components/divider_pyramid'
import { PortfolioPage } from '@/components/portfolio'
import { Comunication } from '@/components/comunication'

export default function Home() {
  return (
    <>
      <Header/>
      <PyramidDivider/>
      <PortfolioPage/>
      <Comunication/>
    </>
  )
}
