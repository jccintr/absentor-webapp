import React, {useEffect,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import TableEmpresas from '../../components/tableEmpresas/TableEmpresas';
import { FaPlusCircle } from "react-icons/fa";
import DataContext from '../../context/DataContext';

const Empresas = () => {
    const [empresas,setEmpresas] = useState([]);
    const navigate = useNavigate();
    const params = useLocation();
    let user = params.state.user;
    const {setLogged} = useContext(DataContext);

    useEffect(()=>{
        const getEmpresas = async () =>{
           let json = await Api.getEmpresas();
           setEmpresas(json);
        };
        getEmpresas();
    },[]);

    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }

    const onAdd = () => {
        navigate("/detempresa", {state:{user: user,empresa: null, editando: false}});
    }

    const onEdit  = async (id) => {
        let jsonEmpresa = await Api.getEmpresa(id);
         navigate("/detempresa", {state:{user: user,empresa: jsonEmpresa, editando: true}});
    }

    const onListUsers = async (idEmpresa) => {
      //let jsonUsers = await Api.getUsersEmpresa(idEmpresa);
      let jsonEmpresa = await Api.getEmpresa(idEmpresa);
      navigate("/empresa/users", {state:{user: user,empresa: jsonEmpresa}});
    }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout} userRole={user.role} showBackButton={true}/>
        <div className={styles.body}>
            <h4>Empresas</h4>
            <div className={styles.blueline}></div>
            <TableEmpresas empresas={empresas} onEdit={onEdit} onListUsers={onListUsers}/> 
        </div>
        <FaPlusCircle className={styles.addButton} size={50} onClick={onAdd} /> 
   </div>
  )
}

export default Empresas