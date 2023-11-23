import Link from 'next/link'
// import './globals.css'
import { Lexend } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </body>
    </html>
  )
}
