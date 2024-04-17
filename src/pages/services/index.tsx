import PageBanner from '@/components/page-banner'
import Services from '@/components/services'
import React from 'react'
import {services} from '../../../sanity/lib/queries'
import { client } from '../../../sanity/lib/client'
import SeoMeta from '@/components/seo'

function Services_Page({ servicesdata  }: any) {
 
    return (
        <>
            <SeoMeta title="Our Services | Budget Computers and Kiwi Mobiles" description="We offering a wide range of budget-friendly computers, mobile phones, and related accessories." url="https://budgetrepaircenter.nz/services" />
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

