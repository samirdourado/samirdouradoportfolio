"use client"
import "../../app/globals.css"
import "./style.css"
import { Contact } from "../contact"
import handleWhatsApp from "@/services/sendWhatsApp.service"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import handleLinkedin from "@/services/profileLinkedin.service"
import { Button } from "../button/button"

export const Comunication = () => {    
    
    return (
        <section className={"comunication__container"}>
            <div className={"comunication__container__distort"}>
                <div className={"comunication__container__normalize"}>
                    <h1>Contato</h1>
                    <div className={"comunication__main"}>
                        <Contact/>
                        <section className={"others__data__container"}>
                            <div className={"comunication__main__data"}>
                                <p>Prefere o contato mais direto e rápido ?</p>
                                <p>Me chama no whatsapp</p>
                                <Button onClick={ handleWhatsApp } type={ "button" } icon={ <FaWhatsapp size={25} /> } textBtn={ "Clicando aqui" }/>
                            </div>
                            <div className={"comunication__main__data"}>
                                <p>Veja também meus dados detalhados.</p>
                                <p>Acesse meu linkedin</p>
                                <Button onClick={ handleLinkedin } type={ "button" } icon={ <FaLinkedin size={25} /> } textBtn={ "Visitar linkedin" }/>
                            </div>
                            <div className={"comunication__sample__data"}>
                                <p>Meus contatos</p>
                                <p>{<FaWhatsapp size={20} />}11 99126-8979</p>
                                <p>{ <BsLinkedin size={20} /> }/in/samirdourado</p>
                                <p>{ <BsGithub size={20} /> }/samirdourado</p>
                            </div>                            
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}