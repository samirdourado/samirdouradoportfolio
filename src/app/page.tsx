import Image from 'next/image'
import Link from 'next/link'
import "./globals.css"
import "./style.css"
import { BsGithub, BsLinkedin, BsFillFilePdfFill } from 'react-icons/bs'
import { Header } from '@/components/header'
import { PyramidDivider } from '@/components/divider_pyramid'
import { PortfolioPage } from '@/components/portfolio'

export default function Home() {
  return (
    <>
      <Header/>
      <PyramidDivider/>
      <PortfolioPage/>
    </>
  )
}
