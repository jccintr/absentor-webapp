import React from 'react'
import styles from "./styles.module.css";
import logo from "../../assets/logo-absentor-horizontal-190x60.png"

const Header = () => {
  return (
    <header>
         <img className={styles.logo} src={logo} alt="Logo Absentor" />
    </header>
  )
}

export default Header