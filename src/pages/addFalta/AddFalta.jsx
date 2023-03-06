import React, {useState,useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import DataContext from '../../context/DataContext';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import InputField from '../../components/inputField/InputField';
import {toast} from 'react-toastify';
import ReactLoading from 'react-loading';

const days = ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'];
const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

const locale = {
  localize : {
    day: n => days[n],
    month: n => months[n]
  },
  formatLong: {
    date: () => 'dd/MM/yyyy'
  }
}

const AddFalta = () => {
    const {setLogged,loggedUser} = useContext(DataContext);
    const navigate = useNavigate();
    const params = useLocation();
    const [data,setData] = useState(new Date());
    const [dias,setDias] = useState(1);
    const [motivo,setMotivo] = useState('');
    const [anexo,setAnexo] = useState(null)
    const [isLoading,setIsLoading] = useState(false);
    let funcionario = params.state.funcionario===null?loggedUser:params.state.funcionario;

   
    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }

    const onSalvar = async () => {
      setIsLoading(true);
      const fd = new FormData();
      let d = data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate();
      
      fd.append('empresa_id',funcionario.empresa.id);
      fd.append('funcionario_id',funcionario.id);
      fd.append('data',d);
      fd.append('dias',dias*1);
      fd.append('motivo',motivo);
      
      if(anexo!=null){
        fd.append('anexo',anexo);
      }
        //let response = await Api.addFalta(funcionario.empresa.id,funcionario.id,data,dias*1,motivo);
        let response = await Api.addFalta2(fd);
        if(response.status===201){
            toast.success('Falta registrada com sucesso.');
            navigate("/main", {state:{user: loggedUser}});
        } else {
          toast.error('Falha ao registrar falta.');
         
        }
        setIsLoading(false);
    }  

    const handlerAnexo = async (e) => {
      if(e.target.files[0]){
        setAnexo(e.target.files[0]);
      }
     
    }

  return (
    <div className={styles.container}>
    
    <Header onLogout={onLogout} showBackButton={true}/>
    
    <div className={styles.body}>
        <h4>Registro de Falta</h4>
        <div className={styles.blueline}></div>
        <p className={styles.userName}>{funcionario.name}</p>
        <div className={styles.containerInput}>
            <p className={styles.label}>Data da Falta</p>
            <ReactDatePicker  locale={locale} className={styles.datePicker} dateFormat="dd/MM/yyyy" selected={data} onChange={(date)=>setData(date)} />
        </div>
        <div className={styles.containerInput}>
              <InputField label="Duração em dias" placeholder="Duração da falta" value={dias} setValue={setDias}/>
        </div>
        <div className={styles.containerInput}>
              <InputField label="Motivo da falta" placeholder="Motivo da falta" value={motivo} setValue={setMotivo}/>
        </div>
       
        <label className={styles.labelInput} for="anexo">{anexo===null?'Anexar documento':'Documento anexado'}</label>
        <input className={styles.input} type="file"  id="anexo" name="anexo" onChange={handlerAnexo}/>
        <button onClick={onSalvar} className={styles.botaoSalvar}>{!isLoading?'Salvar':<ReactLoading type="bars" color="#000" height={30} width={30}/>}</button>
    </div>
  
</div>
  )
}

export default AddFalta