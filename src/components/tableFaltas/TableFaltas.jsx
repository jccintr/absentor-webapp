import React from 'react'
import styles from "./styles.module.css";
import { FaPaperclip } from "react-icons/fa";


const TableFaltas = ({faltas}) => {
    const weekDay = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
    return (
        <>
        {faltas.map((falta) => ( 
            <div key={falta.id} className={styles.container}  onClick={()=>{}} >
                <div className={styles.leftArea}>
                    <div className={styles.dayArea}>
                        <p className={styles.weekDay}>{weekDay[falta.dia_semana]}</p>
                        <p className={styles.monthDay}>{falta.dia_mes}</p>
                    </div>
                   
                    <p className={styles.label}>{falta.motivo}</p>
                </div>
               
                {falta.anexo!==null&&<FaPaperclip className={styles.icon} size={18}/>}  
                
            </div>
              ))}
        </>
      )
}

export default TableFaltas