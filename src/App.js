
import { useState } from "react";
import './App.css';
import PrivateRoutes from "./PrivateRoutes";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import Empresas from "./pages/empresas/Empresas";
import DetEmpresa from "./pages/detEmpresa/DetEmpresa";
import UsersEmpresa from "./pages/usersEmpresa/UsersEmpresa";
import DetUser from "./pages/detUser/DetUser";
import ViewUser from "./pages/viewUser/ViewUser";


function App() {
  const [logged,setLogged] = useState(false);
  return (
    <div className="app">
       <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login setLogged={setLogged}/>} />
              <Route element={<PrivateRoutes logged={logged}/>} >
                   <Route path="/main" element={<Main setLogged={setLogged}/>}/>
                   <Route path="/empresas" element={<Empresas setLogged={setLogged}/>}/>
                   <Route path="/detempresa" element={<DetEmpresa setLogged={setLogged}/>}/>
                   <Route path="/empresa/users" element={<UsersEmpresa setLogged={setLogged}/>}/>
                   <Route path="/user" element={<DetUser setLogged={setLogged}/>}/>
                   <Route path="/user/view" element={<ViewUser setLogged={setLogged}/>}/>
              </Route>
          </Routes>
       </BrowserRouter>
  </div>
  );
}

export default App;




