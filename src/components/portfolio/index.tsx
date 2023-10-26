import Link from "next/link";
import { BsFillFilePdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import "../../app/globals.css"
import "./style.css"
import Image from "next/image";
import { PortfolioCard } from "../portfolio_card";

export const PortfolioPage = () => {
    return (
        <main className={"portfolio__container"}>
            <ul className={"portfolio__wrapper"}>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
                <PortfolioCard/>
            </ul>
        </main>
    )
}