import Link from "next/link"
import { BsFillFilePdfFill, BsGithub, BsLinkedin } from "react-icons/bs"
import "../../app/globals.css"
import "./style.css"

export const HeaderPage = () => {
    return (
        <main className={"home_container"} id={"home"}>      
            <section className={"presentation"}>
                <p className={"text_home_header"}>Olá, me chamo <span className="text-brand3">Samir Dourado</span>, sou</p>
                <h2 className={"title_strong title_strong_variant"}>FULLSTACK</h2>
                <h2 className={"title_strong"}>DEVELOPER</h2>        
                <div className={"presentation_footer"}>
                    <p className={"presentation_text_footer"}>tenho 38 anos, sou de São Paulo, role a página e saiba um pouco mais sobre mim.</p>
                    <nav className="nav_buttons">
                    <Link href={"https://github.com/samirdourado"} target="_blank" ><BsGithub size={30} color="white"/></Link>
                    <Link href={"https://www.linkedin.com/in/samirdourado"} target="_blank" ><BsLinkedin size={30} color="white"/></Link>
                    <Link href={"https://drive.google.com/file/d/1nN9sY_u_asq9y-_V4Yiq7QCNhnzn8jMi/view?usp=drive_link"} target="_blank" ><BsFillFilePdfFill size={30} color="white"/></Link>
                    </nav>
                </div>
            </section>
        </main>
    )
}
