import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NotFound from "./components/NotFound";
import Main from "./components/main/Main";
import Registration from "./components/authentication/registration/Registration";
import LoginContainer from "./components/authentication/login/LoginContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import Favorites from "./components/favorites/Favorites";
import VacanciesContainer from "./components/vacancies/VacansiesContainer";
import CompanyVacanciesContainer from "./components/companyVacancies/CompanyVacanciesContainer";
import About from "./components/about/About";
import CompaniesContainer from "./components/companies/CompaniesContainer";
import CompanyContainer from "./components/companies/CompanyContainer";
import VacancyContainer from "./components/vacancy/VacancyContainer";
import MainContainer from "./components/main/MainContainer";

const App = () => {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                     <div className="App">
                         <Routes>
                             <Route path='/' element={<MainContainer />}/>

                             <Route path='/employee' element={<MainContainer />}/>

                             <Route path='/company/:id' element={<CompanyContainer />}/>

                             <Route path='/profile' element={<ProfileContainer />}/>

                             <Route path='/registration' element={<Registration />}></Route>
                             <Route path='/login' element={<LoginContainer />}></Route>

                             <Route path='/vacancies' element={<VacanciesContainer />}></Route>

                             <Route path='/vacancies/:id' element={<VacancyContainer />} />

                             <Route path='/employee/favorites/:id' element={<Favorites />}/>
                             <Route path='/company/favorites/:id' element={<Favorites />}/>

                             <Route path='/company/vacancies/:id' element={<CompanyVacanciesContainer />}/>

                             <Route path='/companies' element={<CompaniesContainer />} />

                             <Route path='/about' element={<About />}/>

                             <Route path='*' element={<NotFound />}/>
                         </Routes>
                     </div>
            </BrowserRouter>
    );
}

export default App;
