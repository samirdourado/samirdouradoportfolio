import Link from 'next/link'
// import './globals.css'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata = {
  title: 'Samir Dourado Portfólio',
  description: 'Bem vindo ao meu portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lexend.className}>        
        {/* <nav>
          <ul>
            <li><Link href={"/"} defaultValue={"Home"}>Home</Link></li>
            <li><Link href={"/jobs"}>Serviços</Link></li>
            <li><Link href={"/login"}>Login</Link></li>
          </ul>
        </nav>
        <hr/> */}
        {children}
      </body>
    </html>
  )
}
