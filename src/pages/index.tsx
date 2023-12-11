import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Services from '@/components/services'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
  

    <Services />
    <Footer />
    </>
  )
}
