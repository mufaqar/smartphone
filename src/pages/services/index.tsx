import PageBanner from '@/components/page-banner'
import Services from '@/components/services'
import React from 'react'

function Services_Page() {
    return (
        <>
            <PageBanner
                Custm_BG="bg-[url('/images/about.jpg')]"
                title="Services" />
                <Services />
        </>
    )
}

export default Services_Page