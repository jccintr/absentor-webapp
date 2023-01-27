import React from 'react'
import styles from "./styles.module.css";
import { FaRegUser } from "react-icons/fa";

const MenuItem = ({label}) => {
  return (
    <div className={styles.container}>
        <FaRegUser className={styles.icon} size={18} /> 
        <p className={styles.menuLabel}>{label}</p>
    </div>
  )
}

export default MenuItem