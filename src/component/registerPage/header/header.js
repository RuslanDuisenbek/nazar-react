import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './../../../tail.css';
import searcher from './../../assets/searcher.svg';

export default function Header() {
    const navigate = useNavigate(); // Use navigate function

    const handleSignIn = () => {
        navigate('/signIn'); // Navigate to /signIn route
    };

    const handleSignUp = () => {
        navigate('/signUp'); // Navigate to /signUp route
    };

    return (
        <div className="bg-[#F5F5F5] flex flex-row items-center w-full h-[10%] justify-start">
            <div className="w-full flex justify-center">
            </div>

            <div className="w-full flex flex-row items-center gap-4">
                <div className="w-[253px] h-[30px] flex flex-row p-[2px_32px_2px_24px] gap-[8px] rounded-[16px] bg-white">
                    <img className="w-[24px] h-[24px] text-[#F8B602]" src={searcher} alt="search" />
                    <input
                        type="text"
                        className="w-[268px] h-[27px] font-poppins text-[12px] font-normal leading-[27px] text-left text-[#A098AE] focus:outline-none focus:ring-0 focus:ring-[#F8B602]"
                        placeholder="Поиск..."
                    />
                </div>
                <div
                    className="w-[20%] h-[60%] rounded-[16px] bg-[#007AFF] flex items-center justify-center cursor-pointer"
                    onClick={handleSignIn}
                >
          <span className="text-[14px] font-poppins font-medium leading-[27px] text-left decoration-skip-ink-none text-[#FFFFFF]">
            Логин
          </span>
                </div>
                <div
                    className="w-[20%] h-[60%] rounded-[16px] bg-[#007AFF] flex items-center justify-center cursor-pointer"
                    onClick={handleSignUp}
                >
          <span className="text-[14px] font-poppins font-medium leading-[27px] text-left decoration-skip-ink-none text-[#FFFFFF]">
            Регистрация
          </span>
                </div>
            </div>
        </div>
    );
}
