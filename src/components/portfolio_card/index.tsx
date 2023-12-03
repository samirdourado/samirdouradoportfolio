import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/database/portfólio.database"
import { CardPortfolio } from "@/interfaces/card.interface"
import "../../app/globals.css"
import "./style.css"

const portfolioReversed = portfolioData.slice(0).reverse().map(element => { return element })

export const PortfolioCard = () => {
    return (
        portfolioReversed &&
        
        portfolioReversed.map((data: CardPortfolio) => (
            <li className={"portfolio__card__container"} key={data.id}>
                <Image alt={data.title} src={data.image} width={580} height={340} className={"potfolio__thumb"}/>
                <section className={"portfolio__main"}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>                    
                    <div className={"portfolio__footer"}>                        
                        <Link href={ data.url } target="_blank">Testar</Link>
                        <Link href={ data.repo } target="_blank">Github</Link>
                    </div>
                </section>
            </li>
        ))
    )
}
