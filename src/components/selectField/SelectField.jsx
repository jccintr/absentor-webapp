import React from 'react'
import styles from "./styles.module.css";

const SelectField = ({label, value, setValue}) => {
  return (
    <div className={styles.container}>
        <p className={styles.label}>{label}</p>
         <div className={styles.containerInput}>

             <select className={styles.inputField} value={value} onChange={(e)=>{setValue(e.target.value*1)}}>
                  <option disabled value={0}>Selecione por favor</option>
                  <option value={1}>Gerente</option>
                  <option value={2}>Funcionário</option>
             </select>
          

         </div>
    </div>
  )
}

export default SelectField