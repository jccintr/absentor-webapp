import React, {useContext,useState,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import TableFaltas from '../../components/tableFaltas/TableFaltas';
import ReactLoading from 'react-loading';

const days = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

const locale = {
  localize : {
    day: n => days[n],
    month: n => months[n]
  },
  formatLong: {
    date: () => 'dd/mm/yyyy'
  }
}

const Faltas = () => {
    const {setLogged,loggedUser} = useContext(DataContext);
    const [faltas,setfaltas] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [data,setData] = useState(new Date());
    const navigate = useNavigate();
    const params = useLocation();
    let funcionario = params.state.funcionario===null?loggedUser:params.state.funcionario;


    const getFaltas = async () => {
      setIsLoading(true);
      let json = await Api.getFaltas(funcionario.id,data.getFullYear(),data.getMonth()+1);
      setfaltas(json);
      setIsLoading(false);
    };



  useEffect(()=>{
    getFaltas();
 },[]);

 useEffect(()=>{
   getFaltas();
  },[data]);


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
            <p className={styles.userName}>{funcionario.name}</p>
            <ReactDatePicker 
               locale={locale}
               inline 
               dateFormat="MM/yyyy" 
               selected={data} 
               onChange={(date)=>setData(date)} 
               showMonthYearPicker
               showFullMonthYearPicker
             />
             {isLoading&&<ReactLoading type="bars" color="#00b1f3" height={30} width={30}/>}
             {!isLoading&&<h5 className={styles.noRecords}>{faltas.length===0?'Faltas não encontradas.':faltas.length > 1 ?faltas.length + ' faltas encontradas.': faltas.length + ' falta encontrada.'}</h5>}
             <TableFaltas faltas={faltas} />
        </div>
     </div>
  )
}

export default Faltas