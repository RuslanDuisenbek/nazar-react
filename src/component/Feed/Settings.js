import notifications from './../assets/notifications.svg'
import removeUser from './../assets/remove_user.svg'
import language from './../assets/language.svg'
import keys from './../assets/KEY.SVG'
import AboutUs from './aboutUs'
import Language from './Language'
import Changepassword from "./changepassword";
import RemoveUser from './removeAccount'
import {useState} from "react";
export default function Settings(){
    const [isAboutUs, setIsAboutUs] = useState(false)
    const [isChangePassword , setChangePassword] = useState(false)
    const [isLanguage, setLanguage] = useState(false)
    const [isRemoveUser,setRemoveUser] = useState(false)
    const handleSetRemoveUser = () =>{
        setRemoveUser(!isRemoveUser)
    }
    const handleSetlanguage = () =>{
        setLanguage(!isLanguage)
    }
    const handleChangePassword = () => {
        setChangePassword(!isChangePassword)
    }
    const handleAboutUs = ()=>{
        setIsAboutUs(!isAboutUs)
    }
    return (
        <div className='flex flex-col gap-5 relative'>
            <div
                className='flex flex-row items-center justify-start content-center w-[640px] h-[117px] gap-[24px] rounded-[16px] border-[1px] border-[#F8B602]  bg-[#F5F5F5] backdrop-blur-[16px] cursor-pointer'
            onClick={handleAboutUs}>
                <img src={notifications} className='ml-4'/>
                <text className='font-poppins text-[32px] font-medium leading-[48px] text-left text-[#2E2E2E]'>
                    О нас
                </text>
            </div>
            <div
                className='flex flex-row items-center justify-start content-center w-[640px] h-[117px] gap-[24px] rounded-[16px] border-[1px] border-[#F8B602]  bg-[#F5F5F5] backdrop-blur-[16px] cursor-pointer'
            onClick={handleChangePassword}>
                <img src={keys} className='ml-4'/>
                <text className='font-poppins text-[32px] font-medium leading-[48px] text-left text-[#2E2E2E]'>
                    Управление аккаунтом
                </text>
            </div>
            <div
                className='flex flex-row items-center justify-start content-center w-[640px] h-[117px] gap-[24px] rounded-[16px] border-[1px] border-[#F8B602]  bg-[#F5F5F5] backdrop-blur-[16px] cursor-pointer'
                onClick={handleSetlanguage}>
                <img src={language} className='ml-4'/>
                <text className='font-poppins text-[32px] font-medium leading-[48px] text-left text-[#2E2E2E]'>
                    Язык
                </text>
            </div>
            <div
                className='flex flex-row items-center justify-start content-center w-[640px] h-[117px] gap-[24px] rounded-[16px] border-[1px] border-[#F8B602]  bg-[#F5F5F5] backdrop-blur-[16px] cursor-pointer'
            onClick={handleSetRemoveUser}>
                <img src={removeUser} className='ml-4'/>
                <text className='font-poppins text-[32px] font-medium leading-[48px] text-left text-[#2E2E2E]'>
                    Выйти
                </text>
            </div>
            {isAboutUs ? <AboutUs setIsAboutUs={setIsAboutUs}/> : null}
            {isChangePassword ? <Changepassword setChangePassword={setChangePassword}/> : null}
            {isLanguage ? <Language setLanguage={setLanguage}/> : null}
            {isRemoveUser ? <RemoveUser setRemoveUser={setRemoveUser}/> : null}
        </div>
    )
}