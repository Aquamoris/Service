import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NotFound from "./components/NotFound";
import Main from "./pages/main/Main";

const App = () => {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                     <div className="App">
                         <Routes>
                             <Route path='/' element={<Main />}/>
                             <Route path='/employee' element={<Main />}/>
                             <Route path='/company' element={<Main />}/>
                             <Route path='*' element={<NotFound />}/>
                         </Routes>
                     </div>
            </BrowserRouter>
    );
}

export default App;
