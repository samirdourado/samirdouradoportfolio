import "../../app/globals.css"
import "./style.css"
import { PortfolioCard } from "../portfolio_card";

export const PortfolioPage = () => {
    return (
        <main className={"portfolio__container"}>
            <h1 id={"portfolio"}>Portfólio</h1>
            <ul className={"portfolio__wrapper"}>
                <PortfolioCard/>
            </ul>
        </main>
    )
}