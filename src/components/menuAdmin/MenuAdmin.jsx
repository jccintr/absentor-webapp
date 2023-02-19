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
  navigate("/selectempresa",  {state:{ action: 'ConsultarFalta'}});
}

const onAddFaltaClick = () => {
  navigate("/selectempresa",  {state:{ action: 'AddFalta'}});
}

const onSenhaClick = () => {
  navigate('/senha');
 }

  return (
    <div>
        <MenuItem label="Gerenciar empresas" onClick={onEmpresasClick}/>
        <MenuItem label="Registrar faltas" onClick={onAddFaltaClick}/>
        <MenuItem label="Consultar faltas" onClick={onConsultarFaltasClick}/>
        <MenuItem label="Conferir os seus dados" onClick={onViewClick}/>
        <MenuItem label="Alterar seu avatar" onClick={onAvatarClick}/>
        <MenuItem label="Alterar sua senhar" onClick={onSenhaClick}/>
    </div>
  )
}

export default MenuAdmin