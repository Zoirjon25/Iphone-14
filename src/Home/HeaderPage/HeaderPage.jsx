import React from 'react'

export default function HeaderPage() {
  return ( <>
   <div className='w-[100%] flex justify-around items-center pt-10'>
    <h1 className='text-6xl font-bold text-[#490E84]'>IPHONE 14 PRO</h1>
   </div>
   <div className='flex flex-col justify-around items-center pt-10'>
    <img className='w-[900px] h-[600px]' src="https://i.postimg.cc/SskNF7Jg/iphone-14-pro-finish-unselect-gallery-1-202209-GEO-US-removebgiphone.png" alt="iphone-14-img" />
    <div className='flex flex-col justify-around items-center pt-7'>
        <button className='w-[300px] h-[49px] border-1 bg-[#490E84] border-[#490E84] rounded-2xl text-white'>ВЫБРАТЬ</button>
    </div>
   </div>
  </>
    
  )
}
