import React, {useContext,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import InputField from '../../components/inputField/InputField';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';


const DetEmpresa = () => {
    const navigate = useNavigate();
    const params = useLocation();
    const {setLogged} = useContext(DataContext);
    const [nome,setNome] = useState(params.state.empresa===null?'':params.state.empresa.nome);
    const [idEmpresa,setIdEmpresa] =  useState(params.state.empresa===null?'':params.state.empresa.id);//useState(params.state.empresa.id);
    const [isLoading,setIsLoading] = useState(false);
    let user = params.state.user;
    let editando = params.state.editando;
    
   
    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }

    const onSalvar = async () => {
        setIsLoading(true);
        if (!editando) {
            let response = await Api.addEmpresa(nome);
            if(response.status===201){
                toast.success('Empresa cadastrada com sucesso.');
                navigate("/empresas", {state:{user: user}});
            } else {
              toast.error("Falha ao cadastrar empresa.");
            }
        
        } else {
          let response = await Api.updateEmpresa(idEmpresa,nome)
          if(response.status===200){
            toast.success('Empresa alterada com sucesso.');
             navigate("/empresas", {state:{user: user}});
          }else {
            toast.error("Falha ao alterar empresa.");
          }
        }
        setIsLoading(false);
    }

  return (
    <div className={styles.container}>

        <Header onLogout={onLogout}  showBackButton={true}/>
        
        <div className={styles.body}>
            <h4>{editando ? 'Editando ':'Nova '}Empresa</h4>
            <div className={styles.blueline}></div>
            
            <div className={styles.containerInput}>
              <InputField label="Nome" placeholder="Nome da empresa" value={nome} setValue={setNome}/>
            </div>
            <button onClick={onSalvar} className={styles.botaoSalvar}>{!isLoading?'Salvar':<ReactLoading type="bars" color="#000" height={30} width={30}/>}</button>
        </div>
       
   </div>
  )
}

export default DetEmpresa