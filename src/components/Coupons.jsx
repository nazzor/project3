import { useState } from 'react';
import React from 'react';
import { categories, data } from '../data/data.js';

const Coupons = () => {

const [coupons, setCoupons] = useState(data)

//  Filter by Type
const filterType = (category) => {
    setCoupons(
        data.filter((item) => {
            return item.category === category;
        })
    )
}

//  Filter by Price
const filterPrice = (price) =>{
    setCoupons(
        data.filter((item) => {
            return item.price === price;
        })
    )
}

  return (
    <div className='max-w-[1200px] m-auto px-4 py-12'>
        <h1 className='text-blue-500 font-bold text-4xl pb-10 text-center'>Shop Coupons</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-start flex-wrap'>
                    <button onClick={()=> setCoupons(data)} className='m-1 py-1 px-2 border rounded-xl  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType('home')} className='m-1 py-1 px-2 border rounded-xl  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>Home Decor</button>
                    <button onClick={()=> filterType('Shirts')} className='m-1 py-1 px-2 border rounded-xl  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>Shirts</button>
                    <button onClick={()=> filterType('Sneakers')} className='m-1 py-1 px-2 border rounded-xl  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>Sneakers</button>
                    <button onClick={()=> filterType('Jeans')} className='m-1 py-1 px-2 border rounded-xl  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>Jeans</button>
                    <button onClick={()=> filterType('Accessories')} className='m-1 py-1 px-2 border rounded-xl  border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>Accessories</button>
                </div>
            </div>

            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-start flex-wrap'>
                    <button onClick={()=> filterPrice('$')} className='m-1 py-1 px-4 border rounded-xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='m-1 py-1 px-4 border rounded-xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='m-1 py-1 px-4 border rounded-xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='m-1 py-1 px-4 border rounded-xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Coupons */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {coupons.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-blue-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                </div>
            ))}
        </div>

    </div>
  );
}

export default Coupons;