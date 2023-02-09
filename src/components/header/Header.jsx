import React from 'react'
import styles from "./styles.module.css";
import logo from "../../assets/logo-absentor-horizontal-190x60.png"
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import DataContext from '../../context/DataContext';
import { useContext } from 'react';


const Header = ({onLogout,showBackButton}) => {
  const {loggedUser} = useContext(DataContext);
  const navigate = useNavigate();
  const cargos = ['Admin','Gerente','Funcionário'];

 

  return (
    <header>
         <div>
           {showBackButton&&<BiArrowBack onClick={()=>{navigate(-1)}} className={styles.icon} size={24} />}
           <img className={styles.logo} src={logo} alt="Logo Absentor" />
         </div>
         <div>
           <p>{cargos[loggedUser.role]}</p>
           <BiLogOut onClick={onLogout} className={styles.icon} size={18} /> 
         </div>
         
    </header>
  )
}

export default Header
