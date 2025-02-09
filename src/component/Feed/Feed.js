import './../../tail.css';
import ell1 from './../assets/ellps1.svg';
import ell2 from './../assets/ellps2.svg';
import ell3 from './../assets/ellps3.svg';
import searcher from './../assets/searcher.svg';
import person from './../assets/image-of-young-brunette-asian-woman-smiling-and-ho-2021-08-30-02-13-34-utc 1.svg';
import Restaurants from './restaurants'
import eng from './../assets/Ellipse 38.svg'
import tur from './../assets/Ellipse 40.svg'
import arab from './../assets/Ellipse 41.svg'
import china from './../assets/Ellipse 45.svg'
import rus from './../assets/Ellipse 39.svg'
import russian from './../assets/Ellipse 36.svg'
import english from './../assets/Ellipse 33.svg'
import turkish from './../assets/Ellipse 34.svg'
const items = {
  baked : {
    name: 'Англиский',
    img : eng
  },
  burger : {
    name :'Русский',
    img : rus
  },
  beverage :{
    name :'Турецкий',
    img : tur
  },
  chicken : {
    name :'Арабский',
    img : arab
  },
  fast : {
    name :'Китайский',
    img : china
  }
}
export default function Feed({activePage, setActivePage}) {

  const handleCourseRus = ()=>{
    setActivePage('rus')
  }
  const handleCourseEng = () =>{
    setActivePage('eng')
  }
  const handleCourseTur = () =>{
    setActivePage('tur')
  }
  const defaultBurgers = [
    {
      id: 1,
      name: 'Русский Язык',
      price: 'от 3170 тг/мес',
      img: russian,
      function: handleCourseRus
    },
    {
      id: 2,
      name: 'Англискийй Язык',
      price: 'от 3170 тг/мес',
      img: english,
      function : handleCourseEng
    },
    {
      id: 3,
      name: 'Турецкий Язык',
      price: 'от 3170 тг/мес',
      img: turkish,
      function : handleCourseTur
    }
  ];
  return (
    <div className='flex flex-col w-3/4 bg-gray-100 h-auto items-center '>
      <div className='flex flex-row w-[95%] mt-3 justify-between items-center '>
        <h3 className='font-poppins text-[190%] font-bold leading-[150%] text-[#2E2E2E]'>
          Привет, ..........
        </h3>
        <div className="w-[25%] flex flex-row items-center  gap-[8px] rounded-[16px] bg-white">
          <img className=" text-[#F8B602]" src={searcher} alt="search"/>
          <input
            type="text"
            className="font-poppins text-[12px] font-normal leading-[27px] text-left text-[#A098AE] focus:outline-none focus:ring-0 "
            placeholder="Поиск..."
          />
        </div>
      </div>
      <Restaurants classname='w-[97%] h-[70%px]'/>



      <div className='w-[85%]'>
        <div className='flex justify-start items-start mt-3'>
          <text
              className='font-poppins text-[130%] font-bold leading-10 text-left text-[#2E2E2E]'>Категория
          </text>
        </div>
        <div className='flex flex-row gap-5 mt-3'>
          {Object.keys(items).map((key) => (
              <div key={key}
                   className="w-[80%] h-[80%] gap-[8px] rounded-[16px] bg-white flex flex-col justify-center items-center cursor-pointer">
                <img src={items[key].img} alt={items[key].name} className="w-[50%]"/>
                <p
                    className="w-[60px] h-[17px] font-poppins text-[14px] font-normal leading-[25px] text-center text-[#A098AE] mb-3">{items[key].name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=' w-[85%] mt-4'>
        <div className='flex  justify-start items-start '>
          <text
            className="w-[100%] text-[130%]  font-bold leading-10 text-left text-[#2E2E2E]">
            Популярные курсы
          </text>
        </div>

        <div className='flex flex-row justify-center w-[95%] gap-5 mt-3 mb-8'>
          {defaultBurgers.map((item, index) => (
            <div className='rounded-[16px] bg-white flex flex-col items-center w-[40%] h-auto cursor-pointer' onClick={item.function}>
              <img src={item.img} className='w-[90%] h-[90%]'/>
              <div className='flex flex-row justify-around'>
                <div>
                  <text
                    className='text-left text-[18px] font-[500] leading-[27px] text-[#2E2E2E] font-poppins'>{item.name}</text>
                  <div>
                    <text
                      className='w-[80%] font-poppins text-2xl font-bold leading-[36px] text-[#EB5757]'>{item.price}</text>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

