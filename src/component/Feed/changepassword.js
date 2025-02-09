import key from './../assets/KEY.SVG'
import removeImage from './../assets/remove_image.svg'
import eyesIcon from "../assets/eyes_icon.svg";
import {useState} from "react";
export default function Changepassword({setChangePassword}){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePassword(){
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
        <div
            className='w-screen h-screen fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white w-[40%] h-[90%] rounded-[16px] flex flex-col items-center justify-start '>
                <div className='flex flex-row mt-10 '>
                    <img src={key}/>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[48px] text-left text-[#2E2E2E]'>
                        Изменить пароль
                    </text>
                </div>
                <div className='flex flex-col justify-center items-center gap-10'>
                    <input placeholder='Старый пароль'
                           className='w-[300px] h-[50px] rounded-[15.34px] border-[1.53px] border-[#0000001A] bg-[#FFFFFF]'/>
                    <input placeholder='Старый пароль'
                           className='w-[300px] h-[50px] rounded-[15.34px] border-[1.53px] border-[#0000001A] bg-[#FFFFFF]'/>

                    <div
                        className='w-[300px] h-[50px] rounded-[15.34px] border-[1.53px] border-[#0000001A] flex items-center bg-white'>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder='Новый пароль'
                            className='w-full h-full rounded-[15.34px] pl-2'
                        />
                        <img
                            src={eyesIcon}
                            alt='Toggle visibility'
                            className='w-[24px] h-[24px] ml-2 cursor-pointer'
                            onClick={togglePassword}
                        />
                    </div>
                    <button className='bg-[#2E2E2E] rounded-[16px] h-[50px] w-[180px] cursor-pointer'>
                        <span
                            className='font-karla text-white text-center text-[110%] font-bold leading-[43.87px]'>Сохранить</span>
                    </button>

                </div>

            </div>
            <img src={removeImage} className='absolute top-2 right-72 cursor-pointer'
                 onClick={() => setChangePassword(false)}/>

        </div>
    )

}