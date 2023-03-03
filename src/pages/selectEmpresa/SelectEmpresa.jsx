import React, {useEffect,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import TableEmpresas2 from '../../components/tableEmpresas2/TableEmpresas2';
import ReactLoading from 'react-loading';

const SelectEmpresa = () => {
    const [empresas,setEmpresas] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const {setLogged} = useContext(DataContext);
    const navigate = useNavigate();
    const params = useLocation();
    const action =  params.state.action;

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

      const onEmpresaClick = async (empresa) => {
       
          navigate("/selectfuncionario",{state:{empresa: empresa,action: action}});
       
      }

  return (
     <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
            <h4>Selecione uma Empresa</h4>
            <div className={styles.blueline}></div>
            {isLoading&&<ReactLoading type="bars" color="#00b1f3" height={30} width={30}/>}
            
            <TableEmpresas2 empresas={empresas} onEmpresaClick={onEmpresaClick}/> 
        </div>
    </div>
  )
}

export default SelectEmpresa

/*
{empresas.length===0&&<h5 className={styles.noRecords}>Empresas não encontradas.</h5>}
*/