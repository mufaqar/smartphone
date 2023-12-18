import React from 'react'

function PageBanner({Custm_BG,title} :any) {
    return (
        <section className={`py-24 ${Custm_BG} bg-center bg-cover bg-no-repeat bg-blend-multiply bg-black/50`}>
            <div className='container mx-auto px-4'>
                <h1 className='md:text-5xl text-3xl font-bold text-center text-white Raleway'>
                {title}
                </h1>
            </div>
        </section>
    )
}

export default PageBanner