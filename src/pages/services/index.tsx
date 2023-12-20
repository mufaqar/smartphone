import PageBanner from '@/components/page-banner'
import Services from '@/components/services'
import React from 'react'
import { client } from '../../../sanity/lib/client'
import SeoMeta from '@/components/seo'

function Services_Page({servicesdata}:any) {
    return (
        <>
         <SeoMeta title="Our Servics | Budget Computers and Kiwi Mobiles" description="Budget Computers and Kiwi Mobiles" url="http://smartphonerapair.co.nz/contact-us" />
            <PageBanner
                Custm_BG="bg-[url('/images/about.jpg')]"
                title="Services" />
                <Services  data={servicesdata}/>
        </>
    )
}

export default Services_Page



export async function getStaticProps() {
    const servicesdata = await client.fetch(`*[_type == "services"]`);
    return {
        props: {
            servicesdata,
        },
    };
}

