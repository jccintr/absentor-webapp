import React from 'react'
import styles from "./styles.module.css";
import { FaAngleRight } from "react-icons/fa";

const TableEmpresas2 = ({empresas,onEmpresaClick}) => {
  return (
    <>
    {empresas.map((empresa) => ( 
        <div key={empresa.id} className={styles.container}  onClick={()=>onEmpresaClick(empresa.id)} >
            <p className={styles.label}>{empresa.nome}</p>
            <div>
              <FaAngleRight className={styles.icon} size={18}/>    
            </div>
        </div>
          ))}
    </>
  )
}

export default TableEmpresas2