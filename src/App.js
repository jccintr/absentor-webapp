
import { useState } from "react";
import './App.css';
import PrivateRoutes from "./PrivateRoutes";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Main from './pages/main/Main';


function App() {
  const [logged,setLogged] = useState(false);
  return (
    <div className="app">
       <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login setLogged={setLogged}/>} />
              <Route element={<PrivateRoutes logged={logged}/>} >
                   <Route path="/main" element={<Main setLogged={setLogged}/>}/>
              </Route>
          </Routes>
       </BrowserRouter>
  </div>
  );
}

export default App;




