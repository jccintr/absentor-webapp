import React, {useContext,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import InputField from '../../components/inputField/InputField';
import SelectField from '../../components/selectField/SelectField';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';

const DetUser = () => {
  const {setLogged} = useContext(DataContext);
  const navigate = useNavigate();
  const params = useLocation();
  const [idUser,setIdUser] = useState(params.state.userEdit===null?'':params.state.userEdit.id);
  const [name,setName] = useState(params.state.userEdit===null?'':params.state.userEdit.name);
  const [email,setEmail] =useState(params.state.userEdit===null?'':params.state.userEdit.email);
  const [password,setPassword] = useState('');
  const [phone,setPhone] = useState(params.state.userEdit===null?'':params.state.userEdit.phone);
  const [doc,setDoc] = useState(params.state.userEdit===null?'':params.state.userEdit.doc);
  const [address,setAddress] = useState(params.state.userEdit===null?'':params.state.userEdit.address);
  const [role,setRole] =useState(params.state.userEdit===null?'0':params.state.userEdit.role);
  const [bloqueado,setBloqueado] = useState(params.state.userEdit===null?'':params.state.userEdit.bloqueado);
  const [isLoading,setIsLoading] = useState(false);
  
  let editando = params.state.editando;
  let empresa_id = 0
  let empresa = null;
  if (editando) {
       empresa = params.state.userEdit.empresa
       empresa_id = params.state.userEdit.empresa.id;
  } else 
  {
     empresa = params.state.empresa
     empresa_id = params.state.empresa.id;
  }
 
  let user = params.state.user;
  
  

  const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

  const onBloqueadoClick = () => {
    setBloqueado(!bloqueado);
  }

const onSalvar = async () => {
   
 
    setIsLoading(true);  
    if(role==='0'){
      toast.error("Selecione o cargo por favor.");
      setIsLoading(false);
      return;
    }

    if (!editando) {
      let response = await Api.signUp(name,email,role,password,phone,doc,address,empresa_id);
      console.log('role='+role);
      console.log('response.status= '+ response.status);
      if(response.status===201){
          toast.success('Usuário cadastrado com sucesso.');
          navigate("/empresa/users", {state:{user: user,empresa: empresa}});
      } else {
        toast.error("Falha ao cadastrar usuário.");
      }
  
  } else {

   let response = await Api.updateUser(idUser,name,phone,doc,address,role,bloqueado)
   if(response.status===200){
       toast.success('Usuário alterado com sucesso.');
       navigate("/empresa/users", {state:{user: user, empresa: params.state.userEdit.empresa}});
    }else {
      toast.error("Falha ao alterar usuário.");
    }

  }
   setIsLoading(false);

}


  return (
    <div className={styles.container}>

        <Header onLogout={onLogout}  showBackButton={true}/>
        
        <div className={styles.body}>
            <h4>{editando ? 'Editando ':'Novo '}Funcionário</h4>
            <div className={styles.blueline}></div>

            <div>
              <SelectField label="Cargo" value={role} setValue={setRole}/>
            </div>

            <div >
              <InputField label="Nome" placeholder="Nome do funcionário" value={name} setValue={setName}/>
            </div>

              {!editando&&<div >
              <InputField label="Email" placeholder="Email do funcionário" value={email} setValue={setEmail}/>
            </div>}

            {!editando&&<div >
              <InputField label="Senha" placeholder="Senha do funcionário" value={password} setValue={setPassword}/>
            </div>}

            <div >
              <InputField label="Telefone" placeholder="Telefone do funcionário" value={phone} setValue={setPhone}/>
            </div>

            <div >
              <InputField label="Documento" placeholder="Documento do funcionário" value={doc} setValue={setDoc}/>
            </div>

            <div >
              <InputField label="Endereço" placeholder="Endereço do funcionário" value={address} setValue={setAddress}/>
            </div>

            {editando&&<div >
                 <p className={bloqueado?styles.bloqueado:styles.desbloqueado} onClick={onBloqueadoClick}>{bloqueado?'Desbloquear':'Bloquear'}</p>
            </div>}
            
            <button onClick={onSalvar} className={styles.botaoSalvar}>{!isLoading?'Salvar':<ReactLoading type="bars" color="#000" height={30} width={30}/>}</button>
        </div>
       
   </div>
  )




}

export default DetUser