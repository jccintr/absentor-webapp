import React, {useEffect,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import InputField from '../../components/inputField/InputField';
import styles from "./styles.module.css";


const DetEmpresa = ({setLogged}) => {
    const navigate = useNavigate();
    const params = useLocation();
    
    const [nome,setNome] = useState(params.state.empresa===null?'':params.state.empresa.nome);
    const [idEmpresa,setIdEmpresa] =  useState(params.state.empresa===null?'':params.state.empresa.id);//useState(params.state.empresa.id);
    let user = params.state.user;
    let editando = params.state.editando;
    
   
    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }

    const onSalvar = async () => {

        if (!editando) {
            let response = await Api.addEmpresa(nome);
            if(response.status===201){
                navigate("/empresas", {state:{user: user}});
            } else {
              alert("Falha ao inserir empresa.");
            }
        
        } else {
          let response = await Api.updateEmpresa(idEmpresa,nome)
          if(response.status===200){
             navigate("/empresas", {state:{user: user}});
          }else {
            alert("Falha ao alterar empresa.");
          }
        }
    }

  return (
    <div className={styles.container}>

        <Header onLogout={onLogout} userRole={user.role} showBackButton={true}/>
        
        <div className={styles.body}>
            <h4>{editando ? 'Editando ':'Nova '}Empresa</h4>
            <div className={styles.blueline}></div>
            
            <div className={styles.containerInput}>
              <InputField label="Nome" placeholder="Nome da empresa" value={nome} setValue={setNome}/>
            </div>
            <button onClick={onSalvar} className={styles.botaoSalvar}>Salvar</button>
        </div>
       
   </div>
  )
}

export default DetEmpresa