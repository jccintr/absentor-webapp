import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import { useNavigate } from 'react-router-dom';

const MenuGerente = ({user}) => {
  const navigate = useNavigate();


  const onFuncionariosClick = () => {
 
   
    navigate("/empresa/users", {state:{user: user,empresa: user.empresa}});
  }





  return (
    <div>
        <MenuItem label="Gerenciar Funcionarios" onClick={onFuncionariosClick}/>
        <MenuItem label="Registrar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Alterar seu Avatar" onClick={()=>{alert('Ainda não disponível!')}}/>
    </div>
  )
}

export default MenuGerente