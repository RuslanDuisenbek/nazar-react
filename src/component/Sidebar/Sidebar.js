import mainPage from './../assets/Restaurant Location.svg'
import courses from './../assets/Delivery Scooter.svg'
import vitamins from './../assets/Review.svg'
import techniques from './../assets/Order Discussion.svg'
import orderHistory from './../assets/24 Hour Food Delivery.svg'
import payment from './../assets/Bill1.svg'
import settings from './../assets/Setting1.svg'
import './../../tail.css'


export default function Sidebar({activePage,setActivePage}) {

    const setMainPage = () => setActivePage('main');
    const setFavorite = () => setActivePage('favorite');
    const setRestaurant = () => setActivePage('restaurant');
    const setOrderHistory = () => setActivePage('orderHistory');
    const setBilling = () => setActivePage('techniques');
    const setSetting = () => setActivePage('settings');
    const setSettings = () =>setActivePage('payment');

  const functions = {
    mainPage : {
      title : 'Главная страница',
      image : mainPage,
      setPage : setMainPage,
      isPage : 'main'
    },
    courses : {
      title : 'Курсы',
      image: courses,
      setPage : setRestaurant,
      isPage : 'restaurantrusengtur'
    },
    vitamins : {
      title : 'Витамины',
      image : vitamins,
      setPage : setFavorite,
      isPage: 'favorite'
    },
    techniques : {
      title : 'Техника',
      image : techniques,
      setPage : setBilling,
      isPage : 'techniques'
    },
    orderHistory : {
      title : 'История покупок',
      image : orderHistory,
      setPage : setOrderHistory,
      isPage : 'orderHistory'
    },
    payment : {
      title : 'Оплата и счета',
      image : payment,
      setPage : setSettings,
      isPage : 'payment'
    },
    settings : {
      title : 'Настройки',
      image : settings,
      setPage : setSetting,
      isPage : 'settings'
    }
  }

    return (
      <div className="flex flex-col w-1/4 h-auto items-center">
        <div className="w-auto h-auto mb-8 mt-8">
          <text
            className="font-poppins text-[250%] font-bold leading-[60px] text-left  cursor-pointer"
            onClick={setMainPage}>NAZAR
          </text>
        </div>


        <div className='flex flex-col gap-6 w-[85%] h-auto'>
          {Object.keys(functions).map((key) => (
            <div
              className="w-[100%] h-[50px] cursor-pointer flex flex-row items-center justify-start pl-1 gap-2  rounded-[16px]"
              style={{ backgroundColor: functions[key].isPage.includes(activePage)  ? '#1E50A0' : '' }}
              onClick={functions[key].setPage}
            >
              <div className="w-[25%] h-[25%] flex items-center">
                <img  src={functions[key].image}/>
              </div>
              <text
                className="font-poppins text-lg font-medium leading-[90%] text-left"
                style={{ color: functions[key].isPage.includes(activePage) ? 'white' : '#0A0A0A' }}>
                {functions[key].title}
              </text>
            </div>
          ))}
        </div>
      </div>
    )
}
