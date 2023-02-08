import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import MenuItem from '../../components/menuItem/MenuItem';
import styles from "./styles.module.css";
import MenuFuncionario from '../../components/menuFuncionario/MenuFuncionario';
import MenuGerente from '../../components/menuGerente/MenuGerente';
import MenuAdmin from '../../components/menuAdmin/MenuAdmin';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Main = () => {
  const {setLogged} = useContext(DataContext);
  const params = useLocation();
  let user = params.state.user;
  const navigate = useNavigate();


  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout} userRole={user.role}/>
        <div className={styles.body}>
            {!user.isAdmin ? <h2>{user.empresa.nome}</h2>:''}
            <h4>Olá {user.name} ! O que você deseja ?</h4>
            <div className={styles.blueline}></div>
            {user.role===0&&<MenuAdmin user={user}/>}
            {user.role===1&&<MenuGerente user={user}/>}
            {user.role===2&&<MenuFuncionario user={user}/>}
        </div>
     </div>
  )
}

export default Main