import React from 'react'
import styles from "./styles.module.css";
import { FaAngleRight } from "react-icons/fa";


const TableFuncionarios = ({funcionarios,onFuncionarioClick}) => {
  return (
    <>
    {funcionarios.map((funcionario) => ( 
        <div key={funcionario.id} className={styles.container}  onClick={()=>onFuncionarioClick(funcionario.id)} >
            <p className={styles.label}>{funcionario.name}</p>
            <div>
              <FaAngleRight className={styles.icon} size={18}/>    
            </div>
        </div>
          ))}
    </>
  )
}

export default TableFuncionarios