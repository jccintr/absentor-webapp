import React from 'react'
import styles from "./styles.module.css";

const TableFaltas = ({faltas}) => {
    return (
        <>
        {faltas.map((falta) => ( 
            <div key={falta.id} className={styles.container}  onClick={()=>{}} >
                <p className={styles.label}>{falta.data}</p>
                <p className={styles.label}>{falta.motivo}</p>
                
            </div>
              ))}
        </>
      )
}

export default TableFaltas