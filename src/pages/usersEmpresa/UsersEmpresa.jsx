import React, {useEffect,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import TableUsers from '../../components/tableUsers/TableUsers';
import { FaPlusCircle } from "react-icons/fa";
import DataContext from '../../context/DataContext';
import ReactLoading from 'react-loading';

const UsersEmpresa = () => {
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const {setLogged} = useContext(DataContext);
  const navigate = useNavigate();
  const params = useLocation();
  let user = params.state.user;
  let empresa = params.state.empresa;
  let idEmpresa = params.state.empresa.id;
  let nomeEmpresa = params.state.empresa.nome;
  //console.log('empresa= '+empresa.nome);
  useEffect(()=>{
    const getUsersEmpresa = async () =>{
      setIsLoading(true)
       let response = await Api.getUsersEmpresa(idEmpresa);
       if (response.status === 200){
        const json = await response.json();
        setUsers(json);
        
       }
       setIsLoading(false);
    };
    getUsersEmpresa();
},[]);

const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

  const onAdd = () => {
    //console.log('onAdd User => ' + empresa.nome)
    navigate("/user", {state:{user: user,userEdit: null, editando: false,empresa: empresa}});
}

const onEdit  = async (id) => {
  let jsonUser = await Api.getUser(id);
  navigate("/user", {state:{user: user,userEdit: jsonUser, editando: true}});
}

const onView  = async (id) => {
  let jsonUser = await Api.getUser(id);
  navigate("/user/view", {state:{user: user, userView: jsonUser}});
 }



  return (
    <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
            <h2>{nomeEmpresa}</h2>
            <h4>Funcionários</h4>
            <div className={styles.blueline}></div>
            {isLoading&&<ReactLoading type="bars" color="#00b1f3" height={30} width={30}/>}
            {!isLoading&&users.length===0&&<h5 className={styles.noRecords}>Funcionários não encontrados.</h5>}
            <TableUsers users={users} onEdit={onEdit} onView={onView}/> 
        </div>
        <FaPlusCircle className={styles.addButton} size={50} onClick={onAdd} /> 
   </div>
  )
}

export default UsersEmpresa

/*

{users.length===0&&<h5 className={styles.noRecords}>Esta empresa ainda não tem funcionários.</h5>}

*/