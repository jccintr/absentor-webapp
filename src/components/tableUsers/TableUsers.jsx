import React from 'react'
import styles from "./styles.module.css";
import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";


const TableUsers = ({users,onEdit,onView}) => {
  return (
    <>
    {users.map((user) => ( 
        <div key={user.id} className={styles.container} >
            <p className={styles.label}>{user.name}</p>
            <div>
              <BiShow className={styles.icon} size={18} onClick={()=>onView(user.id)}/>    
              <FaEdit className={styles.icon} size={18} onClick={()=>onEdit(user.id)}/> 
            </div>
        </div>
          ))}
    </>
  )
}

export default TableUsers