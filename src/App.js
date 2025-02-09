import './App.css';
import './tail.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from './component/registerPage/registerPage';
import SignInPage from "./component/signIn/signIn";
import SignUpPage from "./component/signUp/signUp";
import MainPage from './component/mainPage'
import CoursesRus from './component/Feed/CoursesRus'
import CoursesEng from './component/Feed/CoursesEng'
import CoursesTur from './component/Feed/CoursesTur'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/signIn" element={<SignInPage />}/>
                <Route path='/mainPage' element={<MainPage />}/>
                <Route path="/signUp" element={<SignUpPage />} />
                <Route path="/mainPage/course_rus" element={<CoursesRus />}/>
                <Route path="/mainPage/course_eng" element={<CoursesEng />}/>
                <Route path="/mainPage/course_tur" element={<CoursesTur />}/>
            </Routes>
        </Router>
    );
}

export default App;
