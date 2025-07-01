import React from 'react'

export default function TitlePage() {
  return (  <>
  <div className='w-[100%] flex justify-around items-center pt-25'>
       <h1 className='text-[#717171] text-2xl'>ЧТО НОВОГО</h1>
  </div>
  <div className=' flex  justify-evenly items-center pt-10'>
    <div className='flex flex-col justify-around items-start'>
        <p className='w-[580px] text-gray-900'>Все модели оснащены однокристальной системой A16 Bionic, 48-мегапиксельной основной камерой и экранами ProMotion с защитой Ceramic Shield и частотным диапазоном 1 — 120 Гц, а также ускоренной памятью LPDDR5. Дизайн линейки обновлен, на фронтальной панели смартфонов два выреза. </p>
        <p className='w-[526px] text-gray-900 pt-7'>Все iPhone 14 в США будут продаваться без лотка для SIM-карт: производитель заявляет, что улучшенная технология eSIM позволит перенести старые электронные сим-карты на новые смартфоны.</p>
        <p className='w-[380px] text-gray-900 pt-7'>Обновлены фронтальная камера (она снабжена автофокусом и быстрее распознает пользователя в условиях недостаточной освещенности) и сенсор основной камеры.</p>
        <p className='w-[440px] text-black font-bold pt-7'>iPhone 14 Pro вышел в новом дизайне — без фирменной «челки». Также в ассортименте появился новый цвет. В смартфоне, в отличие от «обычных» 14-х айфонов, установлен процессор A16 Bionic, который может за секунду производить 4 трлн операций с фото.</p>
    </div>
    <div className='flex  '>
        <img src="https://i.postimg.cc/LsXZs9WM/Apple-i-Phone-14-Pro-Max-1.png" alt="" />
    </div>
  </div>
  
  
  </>
  )
}
