import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';

const MenuAdmin = () => {
  const navigate = useNavigate();
  const {loggedUser}  = useContext(DataContext);


const onEmpresasClick = () => {
 
  navigate("/empresas", {state:{user: loggedUser}});
}



const onAvatarClick = () => {
  navigate("/avatar");
}

const onViewClick  =  () => {
  navigate("/user/view", {state:{user: loggedUser, userView: loggedUser}});
 }

const onConsultarFaltasClick = () => {
  navigate("/selectempresa");
}

  return (
    <div>
        <MenuItem label="Gerenciar Empresas" onClick={onEmpresasClick}/>
        <MenuItem label="Registrar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar faltas" onClick={onConsultarFaltasClick}/>
        <MenuItem label="Conferir os seus dados" onClick={onViewClick}/>
        <MenuItem label="Alterar seu Avatar" onClick={onAvatarClick}/>
    </div>
  )
}

export default MenuAdmin