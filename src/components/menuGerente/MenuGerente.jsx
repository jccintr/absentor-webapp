import React from 'react'
import MenuItem from '../menuItem/MenuItem'

const MenuGerente = () => {
  return (
    <div>
        <MenuItem label="Gerenciar Funcionarios"/>
        <MenuItem label="Registrar faltas"/>
        <MenuItem label="Consultar faltas"/>
        <MenuItem label="Conferir os seus dados"/>
        <MenuItem label="Alterar seu Avatar"/>
    </div>
  )
}

export default MenuGerente