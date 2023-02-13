
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
import Avatar from "./pages/avatar/Avatar";
import AddFalta from "./pages/addFalta/AddFalta";
import { DataProvider } from "./context/DataContext";
import { useContext } from "react";
import DataContext from "./context/DataContext";



function App() {
  const {setLogged,logged} = useContext(DataContext);
  return (
    <div className="app">
      <DataProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login setLogged={setLogged}/>} />
                  <Route element={<PrivateRoutes logged={logged}/>} >
                      <Route path="/main" element={<Main/>}/>
                      <Route path="/empresas" element={<Empresas/>}/>
                      <Route path="/detempresa" element={<DetEmpresa />}/>
                      <Route path="/empresa/users" element={<UsersEmpresa />}/>
                      <Route path="/user" element={<DetUser/>}/>
                      <Route path="/user/view" element={<ViewUser/>}/>
                      <Route path="/avatar" element={<Avatar/>}/>
                      <Route path="/addfalta" element={<AddFalta/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
       </DataProvider>
      
  </div>
  );
}

export default App;




