import searcher from "../assets/searcher.svg";
import OrderHistory from './orderHistory'
import Settings from './Settings'
import Bills from './Bills'
import Profile from './profile'
import CoursesRus from './CoursesRus'
import CoursesEng from './CoursesEng'
import CoursesTur from './CoursesTur'
export default function OtherFeeds({activePage,setActivePage}) {
    return (
      <div className={`flex flex-col w-3/4 bg-gray-100 h-full items-center gap-1`}>
          <div className='flex flex-row w-[95%] mt-3 justify-between items-center '>
              <h3 className='font-poppins text-[190%] font-bold leading-[150%] text-[#2E2E2E]'>
                  Hello, ..........
              </h3>
              <div className="w-[253px] h-[30px] flex flex-row p-[2px_32px_2px_24px] gap-[8px] rounded-[16px] bg-white">
                  <img className="w-[24px] h-[24px] text-[#F8B602]" src={searcher} alt="search"/>
                  <input
                    type="text"
                    className="w-[268px] h-[27px] font-poppins text-[12px] font-normal leading-[27px] text-left text-[#A098AE] focus:outline-none focus:ring-0"
                    placeholder="Поиск..."
                  />
              </div>
          </div>
          {activePage === 'orderHistory' ? <OrderHistory className='w-[97%] h-[140px]'/> : ''}
          {activePage === 'techniques' ? <Bills/> : ''}
          {activePage === 'settings' ? <Settings/> : ''}
          {/*{activePage ? <Profile/> : ''}*/}
        {activePage ==='rus' ? <CoursesRus/> : ''}
        {activePage === 'tur' ? <CoursesTur/> : ''}
        {activePage === 'eng' ? <CoursesEng/> : ''}

      </div>
    )
}