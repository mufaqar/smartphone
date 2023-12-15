import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Header from '@/components/header'
export default function App({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD
    <div className='bg-[#f4f4f4]'>
     <Navbar/>
  <Header/>
  
  <Component {...pageProps} />
  <Footer/>
  </div>
=======
    <div>
      {/* <Navbar /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
>>>>>>> main
  )
}
