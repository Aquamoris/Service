import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationContainer from "./components/authentication/RegistrationContainer";
const App = () => {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                <div className="App">
                    <Routes>
                        <Route path='/registration' element={<RegistrationContainer />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        );
}

export default App;
