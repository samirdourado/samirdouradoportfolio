import Link from "next/link";
import { BsFillFilePdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import "../../app/globals.css"
import "./style.css"

export const Header = () => {
    return (
        <main className='home_container'>      
            <section className={'presentation'}>
                <p className={'text_home_header'}>Olá, me chamo <span className='text-brand3'>Samir Dourado</span>, sou</p>
                <h2 className={'title_strong title_strong_variant'}>FULLSTACK</h2>
                <h2 className={'title_strong'}>DEVELOPER</h2>        
                <div className={'presentation_footer'}>
                    <p className={'presentation_text_footer'}>tenho 38 anos, sou desenvolvedor web fullstack, tenho 1 ano de experiência desenvolvendo diversos projetos.</p>
                    <nav className='nav_buttons'>
                    <Link href={"https://github.com/samirdourado"} target='_blank' ><BsGithub size={30} color='white'/></Link>
                    <Link href={"https://www.linkedin.com/in/samirdourado"} target='_blank' ><BsLinkedin size={30} color='white'/></Link>
                    <Link href={"https://drive.google.com/file/d/1PzrCcMu7naGPgVWX-M433kA4qEx0aj8r/view?usp=sharing"} target='_blank' ><BsFillFilePdfFill size={30} color='white'/></Link>
                    </nav>
                </div>
            </section>
            <Link className={"arrow_down"} href={"#portfolio"}>▼</Link>
        </main>
    );
};
