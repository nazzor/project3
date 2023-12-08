import React from 'react'
import {categories} from '../data/data.js'

const Category = () => {
    console.log(categories);
  return (
    <div className='max-w-[1200px] m-auto px-4 py-12'>
        <h1 className='text-blue-500 font-bold text-4xl text-center'>Top Rated Categories</h1>
        
{/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-10'>
            {categories.map((item, index) => (
                <div key={index} className=' bg-gray-100 rounded-lg flex p-4 justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category;