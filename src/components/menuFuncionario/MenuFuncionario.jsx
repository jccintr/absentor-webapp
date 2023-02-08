import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import { useNavigate } from 'react-router-dom';

const MenuFuncionario = ({user}) => {
  const navigate = useNavigate();

  const onAvatarClick = () => {
 
    navigate("/avatar", {state:{user: user,userAvatar: user}});
  }


  return (
    <div>
        <MenuItem label="Registrar uma falta" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar suas faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Alterar seu Avatar" onClick={onAvatarClick}/>
    </div>
  )
}

export default MenuFuncionario