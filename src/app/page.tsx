import Image from 'next/image'
import Link from 'next/link'
import "./globals.css"
import "./style.css"

export default function Home() {
  return (
    <main className='home_container' >
      
      <section className={'presentation'}>
        <p className={'text_home_header'}>Olá, me chamo <span className='text-brand1'>Samir Dourado</span>,</p>
        <h2 className={'title_strong title_strong_variant'}>FULLSTACK</h2>
        <h2 className={'title_strong'}>DEVELOPER</h2>

        <div className={'presentation_footer'}>
          <p className={'presentation_text_footer'}>tenho 38 anos, sou desenvolvedor web fullstack, tenho 1 ano de experiência desenvolvendo diversos projetos.</p>
          <nav className='nav_buttons'>
            <Link href={"https://github.com/samirdourado"} target='_blank' h-full>GH</Link>
            <Link href={"https://www.linkedin.com/in/samirdourado"} target='_blank' h-full>IN</Link>
            <Link href={"https://drive.google.com/file/d/12dYq-AoH4xtVn78SJLjzp7WuZPIPnf9o/view?usp=share_link"} target='_blank' h-full>CV</Link>
          </nav>
        </div>

      </section>

      <button className='arrow_down'>▼</button>
      
    </main>
  )
}
