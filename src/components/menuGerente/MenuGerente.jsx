import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import { useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';


const MenuGerente = () => {
  const navigate = useNavigate();
  const {loggedUser} = useContext(DataContext);


  const onFuncionariosClick = () => {
 
   
    navigate("/empresa/users", {state:{user: loggedUser,empresa: loggedUser.empresa}});
  }

  const onAvatarClick = () => {
      navigate("/avatar");
  }

  const onViewClick  =  () => {
    navigate("/user/view", {state:{user: loggedUser, userView: loggedUser}});
   }

   const onRegistrarFaltasClick  =  () => {
    navigate("/selectfuncionario", {state:{empresa: loggedUser.empresa}});
   }



  return (
    <div>
        <MenuItem label="Gerenciar Funcionarios" onClick={onFuncionariosClick}/>
        <MenuItem label="Registrar faltas" onClick={onRegistrarFaltasClick}/>
        <MenuItem label="Consultar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={onViewClick}/>
        <MenuItem label="Alterar seu Avatar" onClick={onAvatarClick}/>
    </div>
  )
}

export default MenuGerente