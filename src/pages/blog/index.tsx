import React, { useState } from 'react';
import Link from 'next/link';
import { client } from '../../../sanity/lib/client'
import { motion } from "framer-motion";
import {blogs} from '../../../sanity/lib/queries'
import { urlForImage } from '../../../sanity/lib/image'
import PageBanner from "@/components/page-banner";
import SeoMeta from "@/components/seo";
import Blog_Sec from '@/components/blogs'
function Blogs({ blogsdata }: any) {
  return (
    <>
      <SeoMeta
        title={'Latest Blogs'} description="Latest Blogs" url="http://smartphonerapair.co.nz/blogs" />

      <PageBanner
        Custm_BG="bg-[url('/images/about.jpg')]"
        title={'Latest Blogs'} />

<Blog_Sec data={blogsdata} />

     
    </>
  )
}

export async function getStaticProps() {
  const blogsdata = await client.fetch(blogs);
  return {
    props: {
      blogsdata,
    },
  };
}

export default Blogs