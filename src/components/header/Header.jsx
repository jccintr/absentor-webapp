import React from 'react'
import styles from "./styles.module.css";
import logo from "../../assets/logo-absentor-horizontal-190x60.png"
import { BiLogOut } from "react-icons/bi";


const Header = ({onLogout,userRole}) => {
  const cargos = ['Admin','Gerente','Funcionário'];
  return (
    <header>
         <img className={styles.logo} src={logo} alt="Logo Absentor" />
         <div>
           <p>{cargos[userRole]}</p>
           <BiLogOut onClick={onLogout} className={styles.icon} size={18} /> 
         </div>
         
    </header>
  )
}

export default Header
