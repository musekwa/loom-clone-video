
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'


const FirstSection = () => {
  return (
    <section className='xl:py-36 py-10 bg-[#d1d1f7]'>
        <div className='md:items-center flex flex-col'>
            <div className='
            lg:text-5xl xl:text-6xl 
            text-4xl flex justify-center 
            font-medium text-[#2b1c50]
            pt-10 text-center
            '
        >
            One video is worth a thousand words
            </div>
            <p 
                className='
                text-xl
                xl:text-3xl
                font-light
                xl:w-1/2
                text-[#3d2e7c]
                lg:pt-6
                pt-4
                text-center
                px-2
                '
            >
                Easily record and share AI-powered video messages
                with your teammates and customers to 
                supercharge productivity.
            </p>
            <div className='flex gap-4 py-10 xl:pt-10 justify-center'>
                <Link href={"/free"}>
                    <Button 
                        className='
                            xl:text-2xl 
                            text-xl 
                            md:justify-center 
                            md:flex font-light
                             rounded-[60px]
                             border-8
                             border-indigo-400/90
                             p-6
                             xl:p-8
                             bg-[#565add]
                             hover:scale-110
                             transition-all
                             durante-300
                             shadow-md
                             hover:shadow-indigo-300
                             '
                            >
                                Get Bird for Free
                    </Button>
                </Link>
            </div>
            <div className='lg:pt-28'>
                <video                
                className='rounded-[40px] shadow-xl shadow-indigo-400 lg:w-4/6 lg:mx-auto'
                autoPlay
                muted
                loop
            >
                <source  src={"/videos/hero-1.mp4"} type='video/mp4' />
                </video>
            </div>
        </div>
    </section>
  )
}

export default FirstSection