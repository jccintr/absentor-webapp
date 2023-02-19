import React from 'react'
import styles from "./styles.module.css";

const InputField = ({label,placeholder, value, setValue}) => {
  return (
    <div className={styles.container}>
        <p className={styles.label}>{label}</p>
         <div className={styles.containerInput}>
            <input
                className={styles.inputField}
                placeholder={placeholder}
                type="text"
                onChange={(e)=>setValue(e.target.value)}
                value={value}
            />
         </div>
    </div>
   
   
  )
}

export default InputField
