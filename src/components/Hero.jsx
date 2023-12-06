import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[800px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Save your <span className='text-red-700'>Time</span></h1>
                <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>And <span className='text-red-700'>Money</span></h1>
            </div>
            <img className='w-full max-h-[800px] object-fill'src="src/assets/superkitina-GIImjW5MzAA-unsplash.jpg" alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero;
