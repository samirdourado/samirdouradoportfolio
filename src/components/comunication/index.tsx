"use client"
import "../../app/globals.css"
import "./style.css"
import { Contact } from "../contact"

export const Comunication = () => {

    const handleWhatsApp = () => {        
        const urlMessage = `Oi Samir tudo bem ? Estou entrando em contato através do seu portfólio`;
        const urlWhatsApp = `https://wa.me/5511968276100/?text=${urlMessage}`;
        window.open(urlWhatsApp, '_blank');
      };
    
    return (
        <section className={"comunication__container"}>
            <div className={"comunication__container__distort"}>
                <div className={"comunication__container__normalize"}>
                    <h1>Contato</h1>
                    <div className={"comunication__main"}>
                        <Contact/>
                        <div className={"comunication__main__data"}>
                            <p>Se preferir entre em contato direto através do whatsapp</p>
                            <button onClick={handleWhatsApp}>Entrar em contato</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}