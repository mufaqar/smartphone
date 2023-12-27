
import Hero from '@/components/hero/index'
import Services from '@/components/services'
import Facilities from '@/components/fscilities'
import Blog_Sec from '../components/blogs'
import SeoMeta from '@/components/seo'
import { services } from '../../sanity/lib/queries'
import  {blogs} from '../../sanity/lib/queries'
import {client} from '../../sanity/lib/client'

export default function Home({ servicesdata ,blogsdata }: any) {
  return (
    <>
    
    <SeoMeta title="Budget Computers and Kiwi Mobiles" description="Budget Computers and Kiwi Mobiles" url="https://budgetrepaircenter.nz" />
          
      <Hero />
      <Services data={servicesdata}/>
      <Facilities />
      <Blog_Sec data={blogsdata} />
    </>
  )
}

export async function getStaticProps() {
  const servicesdata = await client.fetch(services);
  const blogsdata = await client.fetch(blogs);
  return {
      props: {
          servicesdata,
          blogsdata,
      },
  };
}



