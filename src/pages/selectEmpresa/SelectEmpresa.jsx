import React, {useEffect,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';

import TableEmpresas2 from '../../components/tableEmpresas2/TableEmpresas2';

const SelectEmpresa = () => {
    const [empresas,setEmpresas] = useState([]);
    const {setLogged} = useContext(DataContext);
    const navigate = useNavigate();
    const params = useLocation();


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

      const onEmpresaClick = async (id) => {

      }

  return (
     <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
            <h4>Selecione uma Empresa</h4>
            <div className={styles.blueline}></div>
            {empresas.length===0&&<h5 className={styles.noRecords}>Empresas não encontradas.</h5>}
            <TableEmpresas2 empresas={empresas} onEmpresaClick={onEmpresaClick}/> 
        </div>
    </div>
  )
}

export default SelectEmpresa