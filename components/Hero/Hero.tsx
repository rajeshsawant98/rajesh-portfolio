import React from 'react'
import { BaseInfo } from '@/data/data'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-gray-300 font-semibold">
                    I am {BaseInfo.name}
                </h1>
                <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7x1 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                    {BaseInfo.position}
                </h1>
                <p className="mt-4 text-sm md:text-base lg:text-2xl text-white opacity-60 ">
                    {BaseInfo.description}
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero