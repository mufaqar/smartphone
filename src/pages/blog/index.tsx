import React, { useState } from 'react';
import { client } from '../../../sanity/lib/client'
import {blogs} from '../../../sanity/lib/queries'
import PageBanner from "@/components/page-banner";
import SeoMeta from "@/components/seo";
import Blog_Sec from '@/components/blogs'
function Blogs({ blogsdata }: any) {
  return (
    <>
      <SeoMeta
        title="Latest News and Blog | Budget Computers and Kiwi Mobiles" description="Latest News about computers, mobile phones, and related accessories. We have awesome news about new technology " url="http://smartphonerapair.co.nz/blog" />

      <PageBanner
        Custm_BG="bg-[url('/images/about.jpg')]"
        title={'Latest News '} />

<Blog_Sec data={blogsdata} />

     
    </>
  )
}

export async function getServerSideProps() {
  const blogsdata = await client.fetch(blogs);
  return {
    props: {
      blogsdata,
    },
  };
}

export default Blogs