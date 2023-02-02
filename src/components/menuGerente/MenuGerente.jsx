import React from 'react'
import MenuItem from '../menuItem/MenuItem'

const MenuGerente = () => {
  return (
    <div>
        <MenuItem label="Gerenciar Funcionarios" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Registrar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Alterar seu Avatar" onClick={()=>{alert('Ainda não disponível!')}}/>
    </div>
  )
}

export default MenuGerente