import React, {useEffect,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import TableUsers from '../../components/tableUsers/TableUsers';
import { FaPlusCircle } from "react-icons/fa";

const Users = ({setLogged}) => {
  const [users,setUsers] = useState([]);
  const navigate = useNavigate();
  const params = useLocation();
  let user = params.state.user;

  useEffect(()=>{
    const getUsers = async () =>{
       let json = await Api.getUsers();
       setUsers(json);
    };
    getUsers();
},[]);

const onLogout = () => {
    setLogged(false);
    navigate('/');
  }

  const onAdd = () => {
    alert("Ainda não disponível !");
   // navigate("/detuser", {state:{user: user,empresa: null, editando: false}});
}

const onEdit  = async (id) => {
    let jsonUser = await Api.getUser(id);
     navigate("/detUser", {state:{user: user,user2: jsonUser, editando: true}});
}



return (
  <div className={styles.container}>
      <Header onLogout={onLogout} userRole={user.role} showBackButton={true}/>
      <div className={styles.body}>
          <h4>Funcionários</h4>
          <div className={styles.blueline}></div>
          <TableUsers users={users} onEdit={onEdit}/> 
      </div>
      <FaPlusCircle className={styles.addButton} size={50} onClick={onAdd} /> 
 </div>
)


}

export default Users