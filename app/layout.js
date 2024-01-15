import Nav from '@/components/nav/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  )
}
