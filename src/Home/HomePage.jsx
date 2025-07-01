import React from 'react'
import { GrApple } from "react-icons/gr";

export default function HomePage() {
  return (  <>
     
     <div class="w-[100%] h-[70px] bg-black text-gray-700 flex justify-evenly items-center">
        <div class="flex gap-4 text-[17px] ">
            
        <h1 className='hover:text-[#490E84]'>Что нового</h1>
        <h1 className='hover:text-[#490E84]'>Цвет</h1>
        <h1 className='hover:text-[#490E84]'>Заказать</h1>
        </div>
        <div class="flex gap-8 text-center ">
     <GrApple className='text-3xl text-gray-700 hover:text-[#490E84]'/>
        </div>
      <div class=" flex gap-8  text-[17px] pr-30">
        <h1 className='hover:text-[#490E84]'>+38 050-456-56-56</h1>
      </div>
    </div>
  </>

  )
}
