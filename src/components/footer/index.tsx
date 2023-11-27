import Link from "next/link"
import { FaArrowCircleUp } from "react-icons/fa";
import "../../app/globals.css"
import "./style.css"

export const Footer = () => {
    return (
        <main className={"footer__container"}>
            <p>2023 - Samir Dourado</p>
            <Link href={"#home"}><FaArrowCircleUp size={20} /></Link>
        </main>
    )
}