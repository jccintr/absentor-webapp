import React, {useEffect,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import InputField from '../../components/inputField/InputField';
import styles from "./styles.module.css";

const DetUser = ({setLogged}) => {
  const navigate = useNavigate();
  const params = useLocation();
  const [idUser,setIdUser] = useState(params.state.userEdit===null?'':params.state.userEdit.id);
  const [name,setName] = useState(params.state.userEdit===null?'':params.state.userEdit.name);
  const [email,setEmail] =useState(params.state.userEdit===null?'':params.state.userEdit.email);
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState(params.state.userEdit===null?'':params.state.userEdit.phone);
  const [doc,setDoc] = useState(params.state.userEdit===null?'':params.state.userEdit.doc);
  const [address,setAddress] = useState(params.state.userEdit===null?'':params.state.userEdit.address);
  const [role,setRole] =useState(params.state.userEdit===null?'':params.state.userEdit.role);
  
  let editando = params.state.editando;
  let empresa_id = 0
  if (editando) {
      //navigate("/user", {state:{user: user,userEdit: jsonUser, editando: true}});
       empresa_id = params.state.userEdit.empresa.id;
  } else 
  {
    //navigate("/user", {state:{user: user,userEdit: null, editando: false,empresa: empresa}});
     empresa_id = params.state.empresa.id;
  }
 
  let user = params.state.user;
  
  

  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

const onSalvar = async () => {
   
 
   
    if (!editando) {
      let response = await Api.signUp(name,email,role,password,phone,doc,address,empresa_id);
      if(response.status===201){
          
          navigate("/empresa/users", {state:{user: user,empresa: user.empresa}});
      } else {
       
        alert("Falha ao cadastrar usuário.");
      }
  
  } else {

   let response = await Api.updateUser(idUser,name,phone,doc,address,role)
   if(response.status===200){
       navigate("/empresa/users", {state:{user: user, empresa: params.state.userEdit.empresa}});
    }else {
      alert("Falha ao alterar empresa.");
    }

  }


}


  return (
    <div className={styles.container}>

        <Header onLogout={onLogout} userRole={user.role} showBackButton={true}/>
        
        <div className={styles.body}>
            <h4>{editando ? 'Editando ':'Novo '}Funcionário</h4>
            <div className={styles.blueline}></div>
            <div className={styles.containerInput}>
              <p className={styles.label}>Cargo</p>
              <select className={styles.selectcargo} value={role} onChange={(e)=>{setRole(e.target.value*1)}}>
                <option value={0}>Selecione por favor</option>
                <option value={1}>Gerente</option>
                <option value={2}>Funcionário</option>
              </select>
            </div>
            <div className={styles.containerInput}>
              <InputField label="Nome" placeholder="Nome do funcionário" value={name} setValue={setName}/>
              </div>
              {!editando&&<div className={styles.containerInput}>
              <InputField label="Email" placeholder="Email do funcionário" value={email} setValue={setEmail}/>
            </div>}
            {!editando&&<div className={styles.containerInput}>
              <InputField label="Senha" placeholder="Senha do funcionário" value={password} setValue={setPassword}/>
            </div>}
            <div className={styles.containerInput}>
              <InputField label="Telefone" placeholder="Telefone do funcionário" value={phone} setValue={setPhone}/>
            </div>
            <div className={styles.containerInput}>
              <InputField label="Documento" placeholder="Documento do funcionário" value={doc} setValue={setDoc}/>
            </div>
            <div className={styles.containerInput}>
              <InputField label="Endereço" placeholder="Endereço do funcionário" value={address} setValue={setAddress}/>
            </div>
            

            <button onClick={onSalvar} className={styles.botaoSalvar}>Salvar</button>
        </div>
       
   </div>
  )




}

export default DetUser