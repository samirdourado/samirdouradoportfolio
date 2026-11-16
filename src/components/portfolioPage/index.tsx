import { PortfolioCard } from "../portfolio_card";

export const PortfolioPage = () => {
    return (
        <main className="w-full h-full mx-auto bg-brand3 flex flex-col justify-center items-center pt-[40px]">
            <h1 id={"portfolio"} className="text-6xl font-bold text-grey1">Portfólio</h1>
            <ul className="w-full bg-brand3 flex flex-wrap gap-8 justify-around p-2">
                <PortfolioCard/>
            </ul>
        </main>
    )
}
