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

   
   const onAddFaltaClick  =  () => {
    navigate("/selectfuncionario", {state:{empresa: loggedUser.empresa, action: 'AddFalta'}});
   }

   const onConsultarFaltasClick = () => {
    navigate("/selectfuncionario",{state:{empresa: loggedUser.empresa,action: 'ConsultarFalta'}});
   }



  return (
    <div>
        <MenuItem label="Gerenciar Funcionarios" onClick={onFuncionariosClick}/>
        <MenuItem label="Registrar faltas" onClick={onAddFaltaClick}/>
        <MenuItem label="Consultar faltas" onClick={onConsultarFaltasClick}/>
        <MenuItem label="Conferir os seus dados" onClick={onViewClick}/>
        <MenuItem label="Alterar seu Avatar" onClick={onAvatarClick}/>
    </div>
  )
}

export default MenuGerente