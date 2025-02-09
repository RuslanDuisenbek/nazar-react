import eyesIcon from "../assets/eyes_icon.svg";
import { useState } from 'react'
import {useNavigate} from "react-router-dom";
export default function SignUp(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function togglePassword(){
        setIsPasswordVisible(!isPasswordVisible);
    }
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/signIn'); // Navigate to /signIn route
    };
    return (
        <div className='w-full bg-[#1E50A0] justify-center items-center object-center content-center flex'>
            <div
                className='flex flex-col justify-start object-center items-center h-[93%] w-[55%] bg-[#E8E8E8] rounded-[16px] gap-10'>
                <text className='font-karla text-[44px] font-bold leading-[71.79px] text-center text-[#212B27] decoration-skip-ink-none mt-10'>
                    Регистрация
                </text>
                <input placeholder='Имя' className='w-[250px] h-[40px] rounded-[6px]'/>
                <input placeholder='Фамилия' className='w-[250px] h-[40px] rounded-[6px]'/>
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

                <button className='w-[210px] h-[55px]  rounded-[23.01px] text-white bg-[#2E2E2E]' onClick={handleSignIn}>Создать аккаунт</button>

                <div className='flex flex-row'>
                    <text className='font-karla text-[18px] font-normal leading-[27.92px] text-center text-[#32403B]   decoration-skip-ink-none'>Уже есть аккаунт?</text>
                    <text className='font-karla text-[18px] font-normal leading-[27.92px] text-center text-[#32403B] underline decoration-solid underline-from-font decoration-skip-ink-none cursor-pointer' onClick={handleSignIn}>Войти</text>
                </div>
            </div>
        </div>
    )
}