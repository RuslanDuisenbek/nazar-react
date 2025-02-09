import eyesIcon from '../assets/eyes_icon.svg'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";
export default function SignIn(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePassword(){
        setIsPasswordVisible(!isPasswordVisible);
    }
    const navigate = useNavigate();
    const handleMainPage = ()=>{
        navigate('/mainPage')
    }
    return (
        <div className='w-full h-screen bg-[#1E50A0] justify-center items-center object-center content-center flex'>
            <div
                className='flex flex-col justify-start object-center items-center h-[93%] w-[55%] bg-[#E8E8E8] rounded-[16px] gap-10'>
                <text
                    className='text-[#212B27] font-karla text-[44px] font-medium leading-[71.79px] text-center decoration-skip-ink-none mt-16'>
                    Войти в аккаунт
                </text>
                <input placeholder='Email' className='w-[250px] h-[40px] rounded-[6px]'/>

                <div className='w-[250px] h-[40px] rounded-[6px] flex items-center bg-white'>
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder='Пароль'
                        className='w-full h-full rounded-[6px] pl-2'
                    />
                    <img
                        src={eyesIcon}
                        alt='Toggle visibility'
                        className='w-[24px] h-[24px] ml-2 cursor-pointer'
                        onClick={togglePassword}
                    />
                </div>
                <label className='w-[200px]  font-karla text-[18px] font-normal leading-[27.92px] text-center text-[#32403B] cursor-pointer decoration-skip-ink-none'>
                    Забыли пароль?
                </label>

                <button className='w-[210px] h-[55px]  rounded-[23.01px] text-white bg-[#2E2E2E]' onClick={handleMainPage}>Войти</button>


            </div>
        </div>
    )
}