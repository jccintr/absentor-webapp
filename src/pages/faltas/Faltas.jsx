import React, {useContext,useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import TableFaltas from '../../components/tableFaltas/TableFaltas';

const Faltas = () => {
    const {setLogged,loggedUser} = useContext(DataContext);
    const [faltas,setfaltas] = useState([]);
    const [data,setData] = useState(new Date());
  
    const navigate = useNavigate();
    const params = useLocation();
   // let user = params.state.user;
   // let userView = params.state.userView;
 //  let funcionario = params.state.funcionario===null?loggedUser:params.state.funcionario;


   useEffect(()=>{
    getFaltas();
  
},[]);




 useEffect(()=>{
 
  getFaltas();
  
},[data]);


const getFaltas = async () => {
  let json = await Api.getFaltas(loggedUser.id,data.getFullYear(),data.getMonth()+1);
  setfaltas(json);
};



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
            <p className={styles.userName}>{loggedUser.name}</p>
            <ReactDatePicker 
               inline 
               dateFormat="MM/yyyy" 
               selected={data} 
               onChange={(date)=>setData(date)} 
               showMonthYearPicker
               showFullMonthYearPicker
             />
              <h5 className={styles.noRecords}>{faltas.length===0?'Faltas não encontradas.':faltas.length > 1 ?faltas.length + ' faltas encontradas.': faltas.length + ' falta encontrada.'}</h5>
             <TableFaltas faltas={faltas} />
        </div>
 </div>
  )
}

export default Faltas