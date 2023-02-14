import React, {useContext,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const Faltas = () => {
    const {setLogged} = useContext(DataContext);
    const cargos = ['Admin','Gerente','Funcionário'];
    const [data,setData] = useState(new Date());
    const dia = 20;
    const navigate = useNavigate();
    const params = useLocation();
   // let user = params.state.user;
   // let userView = params.state.userView;
 //  let funcionario = params.state.funcionario===null?loggedUser:params.state.funcionario;

/*
   useEffect(()=>{
    const getEmpresas = async () =>{
       let json = await Api.getEmpresas();
       setEmpresas(json);
    };
    getEmpresas();
},[]);

*/

    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }


  return (
    <div className={styles.container}>
        <Header onLogout={onLogout}  showBackButton={true}/>
        <div className={styles.body}>
            <h4>Faltas do Funcionário</h4>
            <div className={styles.blueline}></div>
            <ReactDatePicker 
               inline 
               dateFormat="dd/MM/yyyy" 
               selected={data} 
               onChange={(date)=>setData(date)} 
               dayClassName={(date)=> date.getDate()===10 ? styles.diaSelecionado : undefined}
              
               />
        </div>
 </div>
  )
}

export default Faltas