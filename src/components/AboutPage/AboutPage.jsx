import React from 'react'

export default function AboutPage() {
  return (   <>
       <div className='w-[100%] flex justify-around items-center pt-25'>
       <h1 className='text-[#717171] text-2xl'>ВЫБЕРИ СВОЙ ЦВЕТ</h1>
       </div>
      <div className='w-[100%] flex  justify-around items-center pt-15'>
        <div className=''>
       <img src="https://i.postimg.cc/MK6BLmYT/silver-1-1.png" alt="" />
        <div className='flex flex-col text-3xl text-black font-normal pt-3 text-center'>
           <h1 className=''>Silver</h1>
           <h4 className='text-xl pt-2'>Серебристый</h4>
        </div>
        </div>
        {/*Purple */}
        <div className=''>
       <img src="https://i.postimg.cc/449KFFts/purple.png" alt="" />
        <div className='flex flex-col text-3xl text-black font-normal pt-3 text-center'>
           <h1 className=''>Deep purple</h1>
           <h4 className='text-xl pt-2'>Темно фиолетовый</h4>
        </div>
        </div>
        {/* purle*/}
        <div className=''>
       <img src="https://i.postimg.cc/y6m1Rqcg/image.png" alt="" />
        <div className='flex flex-col text-3xl text-black font-normal pt-3 text-center'>
           <h1 className=''>Gold</h1>
           <h4 className='text-xl pt-2'>Золотой</h4>
        </div>
        </div>
        {/*black */}
        <div className=''>
       <img src="https://i.postimg.cc/wvzP8rvZ/black.png" alt="" />
        <div className='flex flex-col text-3xl text-black font-normal pt-3 text-center'>
           <h1 className=''>Space Black</h1>
           <h4 className='text-xl pt-2'>Космический черный</h4>
        </div>
        </div>
      </div>
  </>
  )
}
