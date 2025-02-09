import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import OtherFeeds from "./Feed/otherFeeds";
import './../App.css'
import {useEffect, useState} from "react";
export default function MainPage(){
    const [activePage, setActivePage] = useState('main')

    return(
        <div className='App flex flex-row w-full space-x-4'>
            <Sidebar className="flex-1 bg-blue-500 p-4" activePage={activePage} setActivePage={setActivePage}/>
            {activePage === 'main' || activePage==='restaurant' ?<Feed activePage={activePage} setActivePage={setActivePage}/>: <OtherFeeds activePage={activePage} setActivePage={setActivePage}/>}
        </div>
    )
}