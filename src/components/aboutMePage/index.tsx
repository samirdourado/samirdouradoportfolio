import Image from "next/image";
import "../../app/globals.css"
import "./style.css"
import { aboutMe } from "@/database/aboutMe.database";


export const AboutMePage = () => {
    return (
        <main className={"about__container"}>
            <h1 id="about">Sobre mim</h1>
            <section className={"about__container__body"}>
                <figure>
                    <Image 
                        src={ "/image-about.jpeg" }
                        alt={ "Foto Samir Dourado" }
                        width={500}
                        height={500}
                        className={"about__container__img"}
                        />
                </figure>

                <section>
                {
                aboutMe.map((about, i) => 
                <p key= { i }>{ about }</p>
                )}
                </section>
            </section>
        </main>
        
    )
}