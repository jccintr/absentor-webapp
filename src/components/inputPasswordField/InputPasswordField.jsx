import React from 'react'
import styles from "./styles.module.css";





const InputPasswordField = ({label,placeholder, value, setValue}) => {
    return (
      <div className={styles.container}>
          <p className={styles.label}>{label}</p>
           <div className={styles.containerInput}>
              <input
                  className={styles.inputField}
                  placeholder={placeholder}
                  type="password"
                  onChange={(e)=>setValue(e.target.value)}
                  value={value}
              />
           </div>
      </div>
     
     
    )
  }
  
  export default InputPasswordField
  