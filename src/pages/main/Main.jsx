import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import MenuFuncionario from '../../components/menuFuncionario/MenuFuncionario';
import MenuGerente from '../../components/menuGerente/MenuGerente';
import MenuAdmin from '../../components/menuAdmin/MenuAdmin';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Main = () => {
  const {setLogged,loggedUser} = useContext(DataContext);
  const params = useLocation();
  let user = params.state.user;
  const navigate = useNavigate();


  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout} />
        <div className={styles.body}>
            {!user.isAdmin ? <h2>{loggedUser.empresa.nome}</h2>:''}
            <h4>Olá {loggedUser.name} ! O que você deseja ?</h4>
            <div className={styles.blueline}></div>
            {user.role===0&&<MenuAdmin />}
            {user.role===1&&<MenuGerente />}
            {user.role===2&&<MenuFuncionario />}
        </div>
     </div>
  )
}

export default Main