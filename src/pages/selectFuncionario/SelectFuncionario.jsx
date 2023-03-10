import React, {useEffect,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import TableFuncionarios from '../../components/tableFuncionarios/TableFuncionarios';
import DataContext from '../../context/DataContext';
import ReactLoading from 'react-loading';

const SelectFuncionario = () => {
  const [users,setUsers] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const {setLogged} = useContext(DataContext);
  const navigate = useNavigate();
  const params = useLocation();
 
  
 
  let idEmpresa = params.state.empresa.id;
  let nomeEmpresa = params.state.empresa.nome;
  let action = params.state.action;

  useEffect(()=>{
    const getUsersEmpresa = async () =>{
       setIsLoading(true);
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

  const onFuncionarioClick = async (id) => {
    let funcionario = await Api.getUser(id);
    if (action==='AddFalta'){
      navigate("/addfalta",{state:{funcionario: funcionario}});
    }
    if (action==='ConsultarFalta'){
      navigate("/faltas",{state:{funcionario: funcionario}});
    }
  }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
            <h2>{nomeEmpresa}</h2>
            <h4>Selecione um funcionário</h4>
            <div className={styles.blueline}></div>
            {isLoading&&<ReactLoading type="bars" color="#00b1f3" height={30} width={30}/>}
            {!isLoading&&users.length===0&&<h5 className={styles.noRecords}>Funcionários não encontrados.</h5>}
            <TableFuncionarios funcionarios={users} onFuncionarioClick={onFuncionarioClick}/> 
        </div>
    </div>
  )
}

export default SelectFuncionario