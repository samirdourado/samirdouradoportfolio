import Image from "next/image"
import Link from "next/link"
import "../../app/globals.css"
import "./style.css"

export const PortfolioCard = () => {
    return (
        <li className={"portfolio__card__container"}>
            <Image alt="name" src={"/images-portfolio/hamburgueria2.png"} width={580} height={340} className={"potfolio__thumb"}/>
            <section className={"portfolio__main"}>
                <h3>Hamburgueria</h3>
                <p>Projeto front-end feito com react com sistema de totem de hamburgueria contendo cadastro e login,onde pode comprar lanches e bebidas, pesquisa por produto ou categoria, carrinho de compras com display de quantidade e cálculo automático de valores.</p>
                <div className={"portfolio__footer"}>
                    <Link href={"https://hamburgueria-v2-samirdourado.vercel.app/home"}>Testar</Link>
                    <Link href={"https://github.com/samirdourado/hamburgueria-v2-samirdourado"}>Github</Link>
                </div>
            </section>
        </li>
    )
}