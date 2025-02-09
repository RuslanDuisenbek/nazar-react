import './../../tail.css';

import russian from './../assets/Ellipse 36.svg'
import arab from './../assets/Ellipse 35.svg'
import english from './../assets/Ellipse 33.svg'
import turkish from './../assets/Ellipse 34.svg'
import zhivek from './../assets/Zhibek.svg'

export default function Restaurants(){
    return (

      <div className="flex w-[95%] flex-row justify-center items-center gap-4">
        <div className="w-[75%] h-[75%] ">
          <img src={russian}/>
        </div>
        <div className="w-[75%] h-[75%] ">
          <img src={english}/>
        </div>
        <div className="w-[75%] h-[75%] ">
          <img src={turkish}/>
        </div>
        <div className="w-[75%] h-[75%] ">
          <img src={arab}/>
        </div>
        <div className="w-[75%] h-[75%] ">
          <img src={zhivek}/>
        </div>
      </div>

    )
}
