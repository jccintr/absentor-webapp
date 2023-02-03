import React from 'react'
import styles from "./styles.module.css";
import { FaEdit } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";


const TableEmpresas = ({empresas,onEdit,onListUsers}) => {

  return (
    <>
    {empresas.map((empresa) => ( 
        <div key={empresa.id} className={styles.container} >
            <p className={styles.label}>{empresa.nome}</p>
            <div>
              <FaRegUser className={styles.icon} size={18} onClick={()=>onListUsers(empresa.id)}/>    
              <FaEdit className={styles.icon} size={18} onClick={()=>onEdit(empresa.id)}/> 
            </div>
        </div>
          ))}
    </>
    
  )
}

export default TableEmpresas

