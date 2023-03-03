import React, {useEffect,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import TableEmpresas from '../../components/tableEmpresas/TableEmpresas';
import { FaPlusCircle } from "react-icons/fa";
import DataContext from '../../context/DataContext';
import ReactLoading from 'react-loading';

const Empresas = () => {
    const [empresas,setEmpresas] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const params = useLocation();
    let user = params.state.user;
    const {setLogged} = useContext(DataContext);

    useEffect(()=>{
        const getEmpresas = async () =>{
           setIsLoading(true);
           let json = await Api.getEmpresas();
           setEmpresas(json);
           setIsLoading(false);
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
      
      let jsonEmpresa = await Api.getEmpresa(idEmpresa);
      navigate("/empresa/users", {state:{user: user,empresa: jsonEmpresa}});
    }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
            <h4>Empresas</h4>
            <div className={styles.blueline}></div>
            {isLoading&&<ReactLoading type="bars" color="#00b1f3" height={30} width={30}/>}
            <TableEmpresas empresas={empresas} onEdit={onEdit} onListUsers={onListUsers}/> 
        </div>
        <FaPlusCircle className={styles.addButton} size={50} onClick={onAdd} /> 
   </div>
  )
}

export default Empresas