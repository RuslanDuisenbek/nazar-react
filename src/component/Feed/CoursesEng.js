import React from 'react'
import eng from './../assets/englishCourse.svg'

const CoursesEng = () => {
  return (
    <div className='flex w-full flex-col justify-center items-center'>
      <div className='flex flex-row justify-around items-center w-full'>
        <div className='flex flex-col justify-center w-[70%] '>
          <div className='w-full'>
            <text className='font-poppins font-bold text-[200%] leading-[72px] tracking-normal'>
              Курс русского языка от 1english
            </text>
          </div>
          <div>
            <text className='font-poppins font-bold text-[170%] leading-[52.5px] tracking-normal'>
              Первый платеж на 2-ой месяц
            </text>
          </div>
          <div className='flex flex-row justify-center items-center w-full gap-5 mt-4 ml-1'>
            <div className='flex flex-col justify-center items-center bg-white rounded-[16px] w-[40%] h-[50%] gap-2'>
              <text className='font-poppins font-bold text-[100%] leading-[30px] tracking-normal mt-3'>
                Вернем деньги
              </text>
              <text className='mb-3'>
                если не обучишься
              </text>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-[16px] w-[40%] h-[50%] gap-2'>
              <text className='font-poppins font-bold text-[100%] leading-[30px] tracking-normal mt-3'>80% курса - это
                практика
              </text>
              <text className='mb-3'>20% нужная теория</text>
            </div>
            <div className='flex flex-col justify-center items-center bg-white rounded-[16px] w-[40%] h-[50%] gap-2'>
              <div className='flex flex-row justify-center items-center gap-1 mt-3'>
                <text>Более</text>
                <text className='font-poppins font-bold text-[100%] leading-[30px] tracking-normal'>100к+</text>
                <text>учеников</text>
              </div>
              <text className='mb-3'>9 лет опыта</text>
            </div>
          </div>
        </div>
        <div className='w-[30%] justify-center items-center'>
          <img className='rounded-full w-full' src={eng}/>
        </div>
      </div>
      <div className='w-[90%] h-auto flex justify-center items-center bg-black'>
        <iframe
          width="600"
          height="340"
          src=""
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='mb-14'>
        <text className='font-poppins font-bold text-[140%] leading-[48px] tracking-[0%]'>📌 Записывайтесь на пробный
          урок прямо сейчас и начните говорить по-английски!
        </text>
      </div>
      <div
        className='fixed bottom-0 right-0 w-3/4 bg-white flex flex-row justify-between items-center p-4 shadow-md z-50'>
        <div className='flex flex-col'>
          <text className='font-poppins font-bold text-[130%] leading-[48px] tracking-[0%] text-red-500'>
            от 2290тг/мес
          </text>
          <text className='<p class="font-poppins font-normal text-[120%] leading-[48px] tracking-[0%]'>
            Рассрочка на 24 месяцев
          </text>
        </div>
        <div className='bg-[#1E50A0] flex justify-center items-center rounded-[8px] w-[20%] cursor-pointer'>
          <text className='font-poppins font-bold text-[90%] leading-[48px] tracking-[0%] text-white'>Записаться</text>
        </div>
      </div>
      <div className='flex flex-row justify-around items-center w-full opacity-0'>
        <div className='flex flex-col'>
          <text className='font-poppins font-bold text-[130%] leading-[48px] tracking-[0%] text-red-500'>
            от 2290тг/мес
          </text>
          <text className='<p class="font-poppins font-normal text-[120%] leading-[48px] tracking-[0%]'>
            Рассрочка на 24 месяцев
          </text>
        </div>
        <div className='bg-[#1E50A0] flex justify-center items-center rounded-[8px] w-[20%] cursor-pointer'>
          <text className='font-poppins font-bold text-[90%] leading-[48px] tracking-[0%] text-white'>Записаться</text>
        </div>
      </div>

    </div>
  )
}

export default CoursesEng