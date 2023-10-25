import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
            <BrowserRouter>
                <HeaderContainer/>
                     <div className="App">
                         <Routes>
                             <Route path='/' element={<h3>Hello</h3>}/>
                             <Route path='/employee' element={<h3>Hello</h3>}/>
                             <Route path='/company' element={<h3>Hello</h3>}/>
                             <Route path='*' element={<NotFound />}/>
                         </Routes>
                     </div>
            </BrowserRouter>
    );
}

export default App;
