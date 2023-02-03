import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import { useNavigate } from 'react-router-dom';

const MenuAdmin = ({user}) => {
  const navigate = useNavigate();

const onEmpresasClick = () => {
 
  navigate("/empresas", {state:{user: user}});
}

const onFuncionariosClick = () => {
 
  navigate("/users", {state:{user: user}});
}


  return (
    <div>
        <MenuItem label="Gerenciar Empresas" onClick={onEmpresasClick}/>
        <MenuItem label="Gerenciar Funcionarios" onClick={onFuncionariosClick}/>
        <MenuItem label="Registrar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Alterar seu Avatar" onClick={()=>{alert('Ainda não disponível!')}}/>


    </div>
  )
}

export default MenuAdmin