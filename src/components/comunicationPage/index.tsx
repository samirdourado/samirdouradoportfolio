"use client"
import { Contact } from "../contact"
import handleWhatsApp from "@/services/sendWhatsApp.service"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs"
import handleLinkedin from "@/services/profileLinkedin.service"
import { Button } from "../button/button"

export const ComunicationPage = () => {
    return (
        <section className="w-full mx-auto bg-brand3 flex flex-col justify-center items-center pt-[100px] pb-[50px]">
            <div className="bg-whiteFixed w-full -skew-y-1 pt-14 pr-4 pb-16 pl-4">
                <div className="bg-whiteFixed skew-y-1 flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-grey1">Contato</h1>
                    <div className="w-full bg-whiteFixed mx-auto flex flex-col items-center gap-3 xl:flex-row">
                        <Contact/>
                        <section className="w-full mx-auto h-[474px] min-h-[474px] max-h-[474px] bg-whiteFixed flex flex-col gap-3 justify-between items-center p-2">
                            <div className="w-full max-w-[400px] flex flex-col justify-center items-center p-2 gap-1">
                                <p className="w-full text-lg flex items-center justify-center">Prefere o contato mais direto e rápido ?</p>
                                <p className="w-full text-lg flex items-center justify-center">Me chama no whatsapp</p>
                                <Button onClick={handleWhatsApp} type={"button"} icon={<FaWhatsapp size={25} />} textBtn={"Clicando aqui"}/>
                            </div>
                            <div className="w-full max-w-[400px] flex flex-col justify-center items-center p-2 gap-1">
                                <p className="w-full text-lg flex items-center justify-center">Veja também meus dados detalhados.</p>
                                <p className="w-full text-lg flex items-center justify-center">Acesse meu linkedin</p>
                                <Button onClick={handleLinkedin} type={"button"} icon={<FaLinkedin size={25} />} textBtn={"Visitar linkedin"}/>
                            </div>
                            <div>
                                <p className="w-full text-lg flex items-center justify-center">Meus contatos</p>
                                <p className="w-full text-lg flex items-center justify-center gap-2"><FaWhatsapp size={20} />11 99126-8979</p>
                                <p className="w-full text-lg flex items-center justify-center gap-2"><BsLinkedin size={20} />/in/samirdourado</p>
                                <p className="w-full text-lg flex items-center justify-center gap-2"><BsGithub size={20} />/samirdourado</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}
