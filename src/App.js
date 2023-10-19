import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./components/Authentication/Registration";
function App() {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                <div className="App">
                    <Routes>
                        <Route path='/registration' element={<Registration />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        );
}

export default App;
