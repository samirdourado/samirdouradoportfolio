import Link from "next/link"
import { FaArrowCircleUp } from "react-icons/fa";

export const FooterPage = () => {
    return (
        <main className="w-full h-full mx-auto bg-brand1 flex flex-row justify-around items-center p-2">
            <p>2026 - Samir Dourado</p>
            <Link href={"#home"}><FaArrowCircleUp size={20} /></Link>
        </main>
    )
}
