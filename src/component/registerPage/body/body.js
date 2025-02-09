import insta from './../../assets/insta.svg'
import vka from './../../assets/vka.svg'
import telega from './../../assets/telega.svg'
import image_girl from './../../assets/girs_image.svg'
import ell1 from './../../assets/ellipce.svg'
import ell2 from './../../assets/ellipce-2.svg'
import ell3 from './../../assets/ellipce-3.svg'
export default function body(){
    return (
        <div className='bg-[#007AFF] h-[90%] relative'>
            <div className='w-[36%] h-[25%] flex flex-col justify-start ml-16'>
                <span
                    className='font-poppins text-[190%] font-bold leading-normal text-left text-[#FFFFFF] mt-16'>
                    Учись с комфортом –
                </span>
                <span
                    className='font-poppins text-[32px] font-bold leading-[72px] text-left decoration-skip-ink-none text-[#FFFFFF] mt-[-25px]'>
                    быстро, легко, эффективно!
                </span>
            </div>
            <div className='font-poppins text-[100%] font-medium text-[#FFFFFF] ml-16 mt-[3%]'>
              📚 Доступ к качественному обучению <br/>
              🚀 Гибкий график и удобный формат <br/>
              🎓 Лучшие преподаватели и проверенные методики
            </div>
            <div className='flex flex-row justify-center items-center gap-2 absolute bottom-1 left-1'>
                <text
                    className='font-poppins text-[32px] font-light leading-[48px] text-left text-decoration-skip-none text-underline-position-from-font text-[#2E2E2E]'>
                  Наши контакты
                </text>
                <img src={vka} onClick={() => {
                    window.location.href = 'https://vk.com'
                }}/>
                <img src={telega} onClick={() => {
                    window.location.href = 'https://web.telegram.org/a/'
                }}/>
                <img src={insta} onClick={() => {
                    window.location.href = 'https://www.instagram.com'
                }}/>
                <text
                    className='font-poppins text-[24px] font-light leading-[36px] text-left text-decoration-skip-none text-underline-position-from-font text-[#2E2E2E]'>+7
                    (771) 890 7070
                </text>

            </div>
            <div
                style={{
                    backgroundImage: `url(${ell1})`,
                    backgroundSize: 'cover',
                    position: 'absolute',
                    right: '0',
                    bottom: '0',
                    width: '400px',
                    height: '400px'
                }}
            ></div>

            <div
                style={{
                    backgroundImage: `url(${ell2})`,
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: '0',
                    right: '56px',
                    width: '400px',
                    height: '400px'
                }}
            ></div>

            <div
                style={{
                    backgroundImage: `url(${ell3})`,
                    backgroundSize: 'cover',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '400px',
                    height: '400px'
                }}
            ></div>
            <div className='absolute bottom-0 right-0 w-[25%]'>
                <img src={image_girl}/>
            </div>
        </div>
    )
}