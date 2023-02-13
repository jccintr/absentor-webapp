import React, {useRef,useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import InputField from '../../components/inputField/InputField';
import {toast} from 'react-toastify';


const AddFalta = () => {
    const {setLogged,loggedUser} = useContext(DataContext);
    const navigate = useNavigate();
    
    const [data,setData] = useState(new Date());
    const [dias,setDias] = useState(1);
    const [motivo,setMotivo] = useState('');


   
    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }

    const onSalvar = async () => {
      
        
        let response = await Api.addFalta(loggedUser.empresa.id,loggedUser.id,data,dias*1,motivo);
        if(response.status===201){
            toast.success('Falta registrada com sucesso.');
            navigate("/main", {state:{user: loggedUser}});
        } else {
          toast.error('Falha ao registrar falta.');
         
        }
    }  
  return (
    <div className={styles.container}>
    
    <Header onLogout={onLogout} showBackButton={true}/>
    
    <div className={styles.body}>
        <h4>Registro de Falta</h4>
        <div className={styles.blueline}></div>
        <p className={styles.userName}>{loggedUser.name}</p>
        <div className={styles.containerInput}>
            <p className={styles.label}>Data da Falta</p>
            <ReactDatePicker  className={styles.datePicker} dateFormat="dd/MM/yyyy" selected={data} onChange={(date)=>setData(date)} />
        </div>
        <div className={styles.containerInput}>
              <InputField label="Duração em dias" placeholder="Duração da falta" value={dias} setValue={setDias}/>
        </div>
        <div className={styles.containerInput}>
              <InputField label="Motivo da falta" placeholder="Motivo da falta" value={motivo} setValue={setMotivo}/>
        </div>
        <button onClick={onSalvar} className={styles.botaoSalvar}>Salvar</button>
    </div>
  
</div>
  )
}

export default AddFalta