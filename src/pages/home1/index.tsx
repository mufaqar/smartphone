
import Hero from '@/components/hero/index'
import Services from '@/components/services'
import Facilities from '@/components/fscilities'
import Blog_Sec from '@/components/blogs'
import SeoMeta from '@/components/seo'
import { services } from '../../../sanity/lib/queries'
import { blogs } from '../../../sanity/lib/queries'
import {client} from '../../../sanity/lib/client'

export default function Home({ servicesdata, blogsdata }: any) {
  return (
    <>

      {/* <SeoMeta title="Budget Computers and Kiwi Mobiles in Rotorua, New Zealand." description="Budget Computers  specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories" url="https://budgetrepaircenter.nz" />
      <Hero /> */}
      <Services data={servicesdata} />
      <Facilities />
      <Blog_Sec data={blogsdata} />
    </>
  )
}

export async function getServerSideProps() {
  const servicesdata = await client.fetch(services);
  const blogsdata = await client.fetch(blogs);
  return {
    props: {
      servicesdata,
      blogsdata,
    },
  };
}