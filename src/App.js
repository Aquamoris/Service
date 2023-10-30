import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NotFound from "./components/NotFound";
import Main from "./pages/main/Main";
import Registration from "./components/authentication/registration/Registration";
import LoginContainer from "./components/authentication/login/LoginContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import Favorites from "./components/favorites/Favorites";
import Vacancies from "./components/vacancies/Vacancies";

const App = () => {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                     <div className="App">
                         <Routes>
                             <Route path='/' element={<Main />}/>

                             <Route path='/employee' element={<Main />}/>
                             <Route path='/company' element={<Main />}/>

                             <Route path='/profile' element={<ProfileContainer />}/>

                             <Route path='/registration' element={<Registration />}></Route>
                             <Route path='/login' element={<LoginContainer />}></Route>

                             <Route path='/employee/favorites/:id' element={<Favorites />}/>
                             <Route path='/company/favorites/:id' element={<Favorites />}/>

                             <Route path='/company/vacancies/:id' element={<Vacancies />}/>

                             <Route path='*' element={<NotFound />}/>
                         </Routes>
                     </div>
            </BrowserRouter>
    );
}

export default App;
