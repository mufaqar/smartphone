
import Hero from '@/components/hero/index'
import Services from '@/components/services'
import Facilities from '@/components/fscilities'
import Blog_Sec from '@/components/blogs'
import SeoMeta from '@/components/seo'

export default function Home() {
  return (
    <>
    
    <SeoMeta title="Budget Computers and Kiwi Mobiles" description="Budget Computers and Kiwi Mobiles" url="https://budgetrepaircenter.nz" />
          
      <Hero />
      <Services />
      <Facilities />
      <Blog_Sec />
    </>
  )
}
