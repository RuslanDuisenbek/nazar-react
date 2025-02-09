import notifications from './../assets/notifications.svg'
import removeImage from './../assets/remove_image.svg'
export default function AboutUs({setIsAboutUs}) {
    return (
        <div className='w-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white w-[40%] h-[90%] rounded-[16px]'>
            <div className='flex flex-col items-center'>
                <img src={notifications}/>
                <text className='font-poppins text-[24px] font-medium leading-[48px] text-left text-[#2E2E2E] flex ml-0'>О нас</text>
            </div>
              <div className='flex flex-col justify-center items-center'>
                <div className="flex flex-col justify-start text-left whitespace-pre-line ml-3">
                  Akcent Academy — это образовательная платформа с 10-летним опытом и более чем 130 000 успешных
                  выпускников.
                  Мы предлагаем гибридное (онлайн и офлайн) обучение русскому, английскому, турецкому и арабскому
                  языкам, гарантируя результат за 8 недель или возврат средств.
                  Кроме того, у нас вы найдёте сертифицированные БАДы и витамины для поддержания здоровья в период
                  интенсивного обучения.
                  Присоединяйтесь к Akcent Academy, чтобы учиться эффективно и уверенно!
                </div>


              </div>
            </div>
          <img src={removeImage} className='absolute top-2 right-72 cursor-pointer'
               onClick={() => setIsAboutUs(false)}/>
        </div>
    )
}