import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'


const ThirdSection = () => {
  return (
    <div className='
    py-20 items-center 
    flex flex-col justify-center

    '
    >
        <div className='px-12'>
            <div className='
            text-[#2b1c50]
            md:text-center
            flex
            md:justify-center
            text-3xl
            md:text-6xl
            font-medium
            
            '>
                The easiest screen recorder you&apos;ll ever use
            </div>
            <div className='pt-6 py-16 md:pb-24 text-[#3d2e7c] text-xl md:text-3xl font-light flex items-center justify-center'>
                Record in a few clicks. Share anywhere with a link. No download required.
            </div>
        </div>
        <div className='items-center justify-center flex space-x-20'>
            <div className='w-full md:w-5/6 md:rounded-[80px] bg-[#eff0ff] '>
                <div className='md:py-40 py-16'>
                    <div className='md:flex md:px-20 md:gap-20 md:space-y-0 flex-row-reverse'>
                        <div className='text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection