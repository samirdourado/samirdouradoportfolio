import Link from "next/link"
import "../../app/globals.css"
import "./style.css"

export const Footer = () => {
    return (
        <main className={"footer__container"}>
            <p>2023 - Samir Dourado</p>
            <Link href={"#home"}>up</Link>
        </main>
    )
}