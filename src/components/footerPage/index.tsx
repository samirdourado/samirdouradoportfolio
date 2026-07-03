import Link from "next/link"
import { FaArrowCircleUp } from "react-icons/fa";
import "../../app/globals.css"
import "./style.css"

export const FooterPage = () => {
    return (
        <main className={"footer__container"}>
            <p>2026 - Samir Dourado</p>
            <Link href={"#home"}><FaArrowCircleUp size={20} /></Link>
        </main>
    )
}