import akcentCourse from './../assets/akcentCOurse.svg'
import englishCourse from './../assets/englishCourse.svg'
export default function OrderHistory(){
    return (
        <div className='flex flex-col justify-center items-center gap-5 w-full h-full'>
            <div className='flex justify-start items-center w-3/4'>
                <text className="font-poppins text-[24px] font-bold leading-[36px] text-left text-[#2E2E2E]">
                    История покупок
                </text>
            </div>

            <div className="flex flex-col gap-6 w-3/4 h-[90%]">
                <div
                  className='flex flex-row bg-white w-[85%] h-[20%] shadow-[0px_4px_4px_0px_#00000040] items-center'>
                    <div className='flex flex-row items-center ml-3 gap-2'>
                        <div className='w-[20%] h-[20%]'>
                            <img src={akcentCourse}/>
                        </div>

                        <div className='flex flex-col'>
                            <text
                                className='font-poppins text-[18px] font-semibold leading-[27px] text-left text-[#2E2E2E] decoration-none decoration-skip-ink'>
                                Akcent Acdemy - русский язык
                            </text>
                            <text
                                className='font-poppins text-[14px] font-normal leading-[21px] text-left text-[#A098AE] decoration-none  decoration-skip-ink'>22.11.2024
                                at 17:00
                            </text>
                            <text
                                className='font-poppins text-[14px] font-normal leading-[21px] text-left text-[#A098AE] decoration-none  decoration-skip-ink'>х1 мес индивидуальный
                            </text>
                        </div>
                    </div>

                    <text
                        className='font-poppins text-[18px] font-semibold leading-[27px] text-left text-[#2E2E2E] decoration-none decoration-skip-ink'>55000 тг
                    </text>
                </div>
                <div
                    className='flex flex-row bg-white  w-[85%] h-[20%] shadow-[0px_4px_4px_0px_#00000040] items-center'>
                    <div className='flex flex-row items-center ml-3 gap-2'>
                        <div className='w-[20%] h-[20%]'>
                            <img src={englishCourse}/>
                        </div>

                        <div className='flex flex-col'>
                            <text
                                className='font-poppins text-[18px] font-semibold leading-[27px] text-left text-[#2E2E2E] decoration-none decoration-skip-ink'>
                                1english - английский язык
                            </text>
                            <text
                                className='font-poppins text-[14px] font-normal leading-[21px] text-left text-[#A098AE] decoration-none  decoration-skip-ink'>22.11.2024
                                at 17:00
                            </text>
                            <text
                                className='font-poppins text-[14px] font-normal leading-[21px] text-left text-[#A098AE] decoration-none  decoration-skip-ink'>х1 мес групповой
                            </text>
                        </div>
                    </div>

                    <text
                        className='font-poppins text-[18px] font-semibold leading-[27px] text-left text-[#2E2E2E] decoration-none decoration-skip-ink'>38000тг
                    </text>
                </div>
            </div>
        </div>
    )
}