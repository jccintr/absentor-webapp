import React, { useState } from 'react'
import styles from "./styles.module.css";
import logo from "../../assets/logo-absentor-310x220.png";
import { FaRegUser } from "react-icons/fa";
import {IoKeyOutline} from "react-icons/io5";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo Absentor" />
        <h2>Dados de Acesso</h2>
        <div className={styles.blueline}></div>

        <div className={styles.containerInput}>
         <FaRegUser className={styles.icon} size={18} /> 
          <input
            className={styles.inputPesquisa}
            placeholder="Usuário"
            type="text"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.containerInput}>
         <IoKeyOutline className={styles.icon} size={20} /> 
          <input
            className={styles.inputPesquisa}
            placeholder="Senha"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button onClick={()=>alert('Ainda não disponível !')} className={styles.botao}>Entrar</button>
    </div>
  )
}

export default Login