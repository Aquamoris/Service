import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NotFound from "./components/common/NotFound";
import Main from "./pages/main/Main";
import Profile from "./components/user/profile/Profile";

const App = () => {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                     <div className="App">
                         <Routes>
                             <Route path='/' element={<Main />}/>

                             <Route path='/employee' element={<Main />}/>
                             <Route path='/employee/profile' element={<Profile />}/>

                             <Route path='/company' element={<Main />}/>
                             <Route path='*' element={<NotFound />}/>
                         </Routes>
                     </div>
            </BrowserRouter>
    );
}

export default App;
