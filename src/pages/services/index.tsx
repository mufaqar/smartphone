import PageBanner from '@/components/page-banner'
import Services from '@/components/services'
import React from 'react'
import {services} from '../../../sanity/lib/queries'
import { client } from '../../../sanity/lib/client'
import SeoMeta from '@/components/seo'

function Services_Page({ servicesdata  }: any) {
 
    return (
        <>
            <SeoMeta title="Our Services" description="" url="http://smartphonerapair.co.nz/Services" />
            <PageBanner
                Custm_BG="bg-[url('/images/repairing.avif')]"
                title="Our Services" />
            <Services data={servicesdata} />
        </>
    )
}
export default Services_Page



export async function getStaticProps() {
    const servicesdata = await client.fetch(services);
    return {
        props: {
            servicesdata,
        },
    };
}

