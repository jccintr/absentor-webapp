import React from 'react'
import styles from "./styles.module.css";
import { FaEdit } from "react-icons/fa";

const TableEmpresas = ({empresas,onEdit}) => {

  return (
    <>
    {empresas.map((empresa) => ( 
        <div key={empresa.id} className={styles.container} onClick={()=>onEdit(empresa.id)}>
            <p className={styles.label}>{empresa.nome}</p>   
            <FaEdit className={styles.icon} size={18} /> 
        </div>
          ))}
    </>
    
  )
}

export default TableEmpresas

