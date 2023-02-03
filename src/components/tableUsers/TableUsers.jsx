import React from 'react'
import styles from "./styles.module.css";
import { FaEdit } from "react-icons/fa";

const TableUsers = ({users,onEdit}) => {
  return (
    <>
    {users.map((user) => ( 
        <div key={user.id} className={styles.container} onClick={()=>onEdit(user.id)}>
            <p className={styles.label}>{user.name}</p>   
            <FaEdit className={styles.icon} size={18} /> 
        </div>
          ))}
    </>
  )
}

export default TableUsers