import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';



const MenuFuncionario = () => {
  const navigate = useNavigate();
  const {loggedUser} = useContext(DataContext);
 


  const onAvatarClick = () => {
     navigate("/avatar");
  }

  const onViewClick  =  () => {
    navigate("/user/view", {state:{user: loggedUser, userView: loggedUser}});
   }

   
  return (
    <div>
        <MenuItem label="Registrar uma falta" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar suas faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={onViewClick}/>
        <MenuItem label="Alterar seu Avatar" onClick={onAvatarClick}/>
    </div>
  )
}

export default MenuFuncionario