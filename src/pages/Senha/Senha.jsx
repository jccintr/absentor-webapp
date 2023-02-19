import React, {useContext,useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import InputPasswordField from '../../components/inputPasswordField/InputPasswordField';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';

const Senha = () => {
    const {setLogged,loggedUser} = useContext(DataContext);
    const [senhaAtual,setSenhaAtual] = useState('');
    const [novaSenha,setNovaSenha] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onLogout = () => {
        setLogged(false);
        navigate('/');
}

const onSalvar = async () => {
    setIsLoading(true);
    let response = await Api.updatePassword(loggedUser.id,senhaAtual,novaSenha);
    if(response.status===200){
      toast.success('Senha alterada com sucesso.');
      navigate(-1);
    }else {
      toast.error("Falha ao alterar senha.");
    }
    setIsLoading(false);
}


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
          <h4>Alteração de Senha</h4>
          <div className={styles.blueline}></div>
          <div className={styles.containerInput}>
              <InputPasswordField label="Senha Atual" placeholder="Informe a sua senha atual" value={senhaAtual} setValue={setSenhaAtual}/>
          </div>  
          <div className={styles.containerInput}>
              <InputPasswordField label="Nova Senha" placeholder="Informe a nova senha" value={novaSenha} setValue={setNovaSenha}/>
          </div>
          <button onClick={onSalvar} className={styles.botaoSalvar}>{!isLoading?'Salvar':<ReactLoading type="bars" color="#000" height={30} width={30}/>}</button>
        </div>
     </div>
  )


}

export default Senha