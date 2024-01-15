import Nav from '@/pages/nav/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/pages/footer/Footer'
import Navbr from '@/components/navber/Navber'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbr />
        {/* <Nav /> */}
        {children}
        <Footer />
        </body>
    </html>
  )
}
