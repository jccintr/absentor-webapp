import React from 'react'
import MenuItem from '../menuItem/MenuItem'

const MenuFuncionario = () => {
  return (
    <div>
        <MenuItem label="Registrar uma falta"/>
        <MenuItem label="Consultar suas faltas"/>
        <MenuItem label="Conferir os seus dados"/>
        <MenuItem label="Alterar seu Avatar"/>
    </div>
  )
}

export default MenuFuncionario