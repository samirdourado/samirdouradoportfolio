import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/database/portfólio.database"
import { CardPortfolio } from "@/interfaces/card.interface"

const portfolioReversed = portfolioData.slice(0).reverse().map(element => { return element })

export const PortfolioCard = () => {
    return (
        portfolioReversed &&

        portfolioReversed.map((data: CardPortfolio) => (
            <li className="w-full max-w-[670px] min-h-[540px] flex flex-col pl-10 pt-5 pr-10 pb-5" key={data.id}>
                <Image
                    alt={data.title}
                    src={data.image}
                    width={580}
                    height={340}
                    className="max-w-full max-h-[340px] object-cover cursor-pointer mb-6"
                />
                <section className="w-full flex flex-col gap-4">
                    <h3 className="text-4xl not-italic font-bold leading-normal">{data.title}</h3>
                    <p className="min-h-[60px] text-grey1 text-base not-italic font-normal leading-normal line-clamp-3 text-ellipsis">{data.description}</p>
                    <div className="w-full max-h-[60px] flex justify-between">
                        <Link
                            href={data.url}
                            target="_blank"
                            className="bg-brand4 w-[47%] pt-6 pb-6 text-grey10 text-center text-sm not-italic font-normal leading-normal [text-shadow:0px_0px_4px_rgba(0,0,0,0.25)]"
                        >
                            Testar
                        </Link>
                        <Link
                            href={data.repo}
                            target="_blank"
                            className="bg-brand4 w-[47%] pt-6 pb-6 text-grey10 text-center text-sm not-italic font-normal leading-normal [text-shadow:0px_0px_4px_rgba(0,0,0,0.25)]"
                        >
                            Github
                        </Link>
                    </div>
                </section>
            </li>
        ))
    )
}
