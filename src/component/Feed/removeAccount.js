import removeUser from './../assets/remove_user.svg'
import removeImage from "../assets/remove_image.svg";
export default function RemoveAccount({setRemoveUser}){
    return (
        <div
            className='w-screen h-screen fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div
                className='bg-white w-[40%] h-[90%] rounded-[16px] flex flex-col items-center justify-start gap-10'>
                <div className='flex flex-row justify-center items-center'>
                    <img src={removeUser}/>
                    <text
                        className='font-poppins text-[24px] font-medium leading-[48px] text-left text-[#2E2E2E]'>Remount
                        account
                    </text>
                </div>
                <div>
                    <text className='font-karla text-[18px] font-bold leading-[43.87px] text-center text-[#000000]'>
                        Account Deletion
                    </text>
                    <div className='font-karla text-[18px] font-bold leading-[43.87px] text-center text-[#000000]'>
                        We're sorry to see you go.
                        Please note that once your account is
                        deleted, it cannot be restored along with
                        ny associated data.
                        If you're sure, click 'Delete My Account'
                        below.
                    </div>
                </div>
                <button className='bg-[#2E2E2E] rounded-[16px] h-[50px] w-[180px] cursor-pointer'>
                        <span
                            className='font-karla text-white text-center text-[18px] font-bold leading-[43.87px]'>Delete Account</span>
                </button>
                <button className='bg-white border-black border rounded-[16px] h-[50px] w-[180px] cursor-pointer'>
                        <span
                            className='font-karla text-[#000000] text-center text-[18px] font-bold leading-[43.87px]'>Cancel</span>
                </button>
            </div>
            <img src={removeImage} className='absolute top-2 right-72 cursor-pointer'
                 onClick={() => setRemoveUser(false)}/>
        </div>
    )
}