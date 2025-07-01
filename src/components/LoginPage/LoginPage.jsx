import React from 'react'

export default function LoginPage() {
  return ( <>
      <div className='w-[100%] flex justify-center items-center pt-56'>
          <div className='w-[600px] h-[600px] bg-[#574B63]  flex flex-col justify-center pl-10 pb-20'> 
              <div className='flex justify-center items-center pr-10 pt-25'>
                <h1 className=' text-3xl font-bold text-white p'>ХОЧЕШЬ IPHONE 14 PRO?</h1>
              </div>
              <div className='flex flex-col justify-center items-center pr-10'>
                <div className='flex justify-start items-start pt-15 gap-7 '>
                  <input className='w-[380px] h-[52px]  border-b border-[#FFFFFF]   text-[#FFFFFF]' type="text"placeholder='Ваше имя' />
                </div>
                <div className='pt-7'>
                <input className='w-[380px] h-[52px]  border-b border-[#FFFFFF]   text-[#FFFFFF]' type="text"placeholder='Номер телефона' />
                </div>
              </div>
                <div className='flex flex-col justify-center items-center gap-3 mt-7 pr-7'>

            
                  <p className='text-[#FFFFFF] mt-3'>В ближайшее время наш менеджер свяжется с Вами</p> 
                  <div className='pt-7'>
                    <button className='w-[220px] h-[49px] border-1 bg-white border-white rounded-4xl gap-10 text-[#490E84]'>Join now</button>
                  </div>
                
                </div>
          </div>

         <div className=''>
          <img className='' src="https://i.postimg.cc/WbrkhpwB/hero-endframe-cvklg0xk3w6e-large-1.png" alt="" />
         
        </div>
    </div>
  </>
  )
}
