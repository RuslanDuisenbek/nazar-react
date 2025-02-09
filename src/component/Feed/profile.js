import profile from './../assets/prof.svg'
export default function Profile(){
    return (
        <div className='flex flex-col justify-start w-11/12'>
              <div className='flex flex-row justify-start start-0'>
                  <text className='font-poppins text-[32px] font-bold leading-[72px] text-left text-[#2E2E2E]'>My Profile</text>
              </div>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div>
                    <img src={profile}/>
                    <text
                        className='font-poppins text-[32px] font-normal leading-[48px] text-center text-[#000000]'>Mukus
                        Jukov
                    </text>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[36px] text-left text-[#000000]'>Username
                    </text>
                    <input placeholder='Username'
                           className='w-[430px] h-[49px] rounded-[8px] bg-gray-100 border border-[#A9A9A9] '/>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[36px] text-left text-[#000000]'>Surname
                    </text>
                    <input placeholder='Surname'
                           className='w-[430px] h-[49px] rounded-[8px] bg-gray-100 border border-[#A9A9A9] '/>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[36px] text-left text-[#000000]'>Email
                    </text>
                    <input placeholder='abc@gmail.com'
                           className='w-[430px] h-[49px] rounded-[8px] bg-gray-100 border border-[#A9A9A9] '/>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[36px] text-left text-[#000000]'>Password
                    </text>
                    <input placeholder='evFTbyVVCd'
                           className='w-[430px] h-[49px] rounded-[8px] bg-gray-100 border border-[#A9A9A9]'
                           type='password'/>
                </div>
                <button className='bg-[#F8B602] rounded-[16px] h-[50px] w-[350px] cursor-pointer'>
                        <span
                            className='font-karla text-white text-center text-[18px] font-bold leading-[43.87px]'>Update</span>
                </button>
            </div>
        </div>
    )
}