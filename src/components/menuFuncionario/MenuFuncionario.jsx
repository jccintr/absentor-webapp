import React from 'react'
import MenuItem from '../menuItem/MenuItem'

const MenuFuncionario = () => {
  return (
    <div>
        <MenuItem label="Registrar uma falta" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Consultar suas faltas" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Conferir os seus dados" onClick={()=>{alert('Ainda não disponível!')}}/>
        <MenuItem label="Alterar seu Avatar" onClick={()=>{alert('Ainda não disponível!')}}/>
    </div>
  )
}

export default MenuFuncionario