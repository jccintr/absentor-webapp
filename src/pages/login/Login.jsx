import React, { useState } from 'react'
import styles from "./styles.module.css";
import logo from "../../assets/logo-absentor-310x220.png";
import { FaRegUser } from "react-icons/fa";
import {IoKeyOutline} from "react-icons/io5";
import Api from '../../Api';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from '../../context/DataContext';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const {setLogged,loggedUser,setLoggedUser} = useContext(DataContext);
    const [isLoading,setIsLoading] = useState(false);

    const onSignIn = async () =>{
      setIsLoading(true);
      let response = await Api.signIn(email,password);
      if(response.status===200){
        
         let jsonUser = await response.json();
         const token = jsonUser.token;
         setLoggedUser(jsonUser);
         setLogged(true);
         setIsLoading(false);
        navigate("/main", {state:{user: jsonUser}});
      }
      else{
        toast.error("Nome de usuário e ou senha inválidos.");
        setEmail('');
        setPassword('');
        setIsLoading(false);
      }
    
     
     }

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

        <button onClick={onSignIn} className={styles.botao}>{!isLoading?'Entrar':<ReactLoading type="bars" color="#000" height={30} width={30}/>}</button>
    </div>
  )
}

export default Login