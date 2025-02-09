import language from './../assets/language.svg'
import removeImage from "../assets/remove_image.svg";
export default function Language({setLanguage}){
    return (
        <div
            className='w-screen h-screen fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div
                className='bg-white w-[40%] h-[90%] rounded-[16px] flex flex-col items-center justify-start gap-10 '>
                <div className='flex flex-row items-center mt-5'>
                    <img src={language}/>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[48px] text-left text-[#2E2E2E]'>Язык
                    </text>
                </div>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div
                        className='w-[300px] h-[64px]  rounded-[10px] border-[1px] border-[#000000]  bg-[#FFFFFF] flex flex-row justify-start items-center cursor-pointer'>
                        <text
                            className='font-inter text-[24px] font-normal leading-[29.05px] text-left text-[#6B6B6B] m-4'>🇰🇿
                            Kazakh
                        </text>
                    </div>
                    <div
                        className='w-[300px] h-[64px]  rounded-[10px] border-[1px] border-[#000000]  bg-[#FFFFFF] flex flex-row justify-start items-center cursor-pointer'>
                        <text
                            className='font-inter text-[24px] font-normal leading-[29.05px] text-left text-[#6B6B6B] m-4'>
                            🇷🇺 Russian
                        </text>
                    </div>
                    <div
                        className='w-[300px] h-[64px]  rounded-[10px] border-[1px] border-[#000000]  bg-[#FFFFFF] flex flex-row justify-start items-center cursor-pointer'>
                        <text
                            className='font-inter text-[24px] font-normal leading-[29.05px] text-left text-[#6B6B6B] m-4'>
                            🇬🇧 English
                        </text>
                    </div>
                </div>
            </div>
            <img src={removeImage} className='absolute top-2 right-72 cursor-pointer'
                 onClick={() => setLanguage(false)}/>
        </div>
    )
}