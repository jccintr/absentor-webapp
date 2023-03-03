import React, {useState,useContext} from 'react'
import {useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import { RxAvatar } from "react-icons/rx";
import DataContext from '../../context/DataContext';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';


const Avatar = () => {
  const {setLogged,loggedUser} = useContext(DataContext);
  const [isLoading,setIsLoading] = useState(false);
  //const imgRef = useRef();
  const [novoAvatar,setNovoAvatar] = useState(null);
  const [novoAvatarScreen,setNovoAvatarScreen] = useState(null);
  const navigate = useNavigate();
 
 
 
  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

  const onSalvar = async () => {
    setIsLoading(true);
    const fd = new FormData();
      fd.append('avatar',novoAvatar);
      let response = await Api.updateAvatar(loggedUser.id,fd);
  
      if(response.status===200){
        let json = await response.json();
        loggedUser.avatar = json.avatar;
        toast.success('Avatar alterado com sucesso.');
        navigate(-1);
      } else {
        toast.error("Falha ao alterar avatar.");
      }
      setIsLoading(false);
  }

  const handlerImagem = async (e) => {
    if(e.target.files[0]){
      
     // imgRef.current.src = URL.createObjectURL(e.target.files[0]);
    
     setNovoAvatar(e.target.files[0]);
      setNovoAvatarScreen(URL.createObjectURL(e.target.files[0]));
   
   }
  
  }
 


  return (
    <div className={styles.container}>
    
    <Header onLogout={onLogout} showBackButton={true}/>
    
    <div className={styles.body}>
        <h4>Avatar Atual</h4>
        <div className={styles.blueline}></div>
        {loggedUser.avatar===null?<RxAvatar className={styles.avatar_icone} size={100}/>:<img className={styles.avatar}  src={`${Api.base_storage}/${loggedUser.avatar}`} alt={loggedUser.name} />}
       
        <label className={styles.labelInput}for="imagem">Selecione o seu novo avatar</label>
        <input className={styles.input} type="file" accept='image/*' id="imagem" name="imagem" onChange={handlerImagem}/>
        {novoAvatarScreen&&<img className={styles.avatar}  src={novoAvatarScreen} alt=""/>}
        <button onClick={onSalvar} className={styles.botaoSalvar}>{!isLoading?'Salvar':<ReactLoading type="bars" color="#000" height={30} width={30}/>}</button>
       
    </div>
   
</div>
  )
}

export default Avatar

