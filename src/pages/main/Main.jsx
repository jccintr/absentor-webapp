import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import MenuItem from '../../components/menuItem/MenuItem';
import styles from "./styles.module.css";

const Main = ({setLogged}) => {
  const params = useLocation();
  let name = params.state.user.name;
  let userRole = params.state.user.role;
  const navigate = useNavigate();


  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout} userRole={userRole}/>
        <div className={styles.body}>
            <h2></h2>
            <h4>Olá {name} ! O que você deseja ?</h4>
            <div className={styles.blueline}></div>
            <MenuItem label="Marcar falta"/>
            <MenuItem label="Enviar atestado"/>
            <MenuItem label="Consultar faltas"/>
        </div>
       
    </div>
  )
}

export default Main