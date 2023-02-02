import React from 'react'
import styles from "./styles.module.css";
import { FaCheck } from "react-icons/fa";


const MenuItem = ({label,onClick}) => {
  return (
    <div className={styles.container} onClick={onClick}>
        <FaCheck className={styles.icon} size={18} /> 
        <p className={styles.menuLabel}>{label}</p>
    </div>
  )
}

export default MenuItem