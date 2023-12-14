import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Hero from '@/components/hero/index'
import Services from '@/components/services'
import Facilities from '@/components/fscilities'
import Blogs from './blogs'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Facilities />
      <Blogs />
    </>
  )
}
