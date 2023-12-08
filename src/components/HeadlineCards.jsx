import React from 'react'

const HeadlineCards = () => {
  return (
    
    <div>
        <h1 className='text-blue-500 font-bold text-4xl text-center pt-10' >Top rated Coupons</h1>
    <div className='max-w-[1200px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        
        {/* Card 1 */}
        <div className='rounded-xl relative overflow-hidden'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/30 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4 mx-3'>Nike Coupon</p>
                <p className='text-xl px-2 pt-2 mx-3' >Sneakers</p>
                <button className='border-white bg-white text-black py-3 px-5 rounded-md mx-4 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            />
        </div>
        {/* Card 2 */}
        <div className='rounded-xl relative overflow-hidden'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/30 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4 mx-3'>Ray Ban Coupon</p>
                <p className='text-xl px-2 pt-2 mx-3' >Sunglasses</p>
                <button className='border-white bg-white text-black py-3 px-5 rounded-md mx-4 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            />
            
        </div>
        {/* Card 3 */}
        <div className='rounded-xl relative overflow-hidden'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/30 text-white rounded-xl'>
                <p className='font-bold text-2xl px-2 pt-4 mx-3'>Adidas Coupon</p>
                <p className='text-xl px-2 pt-2 mx-3' >Sneakers</p>
                <button className='border-white bg-white text-black py-3 px-5 rounded-md mx-4 absolute bottom-4'>Order Now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
            />
        </div>
    </div>
    <hr />
    </div>
  )
}

export default HeadlineCards
