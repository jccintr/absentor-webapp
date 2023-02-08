import React, {useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Api from '../../Api';
import Header from '../../components/header/Header';
import styles from "./styles.module.css";
import { RxAvatar } from "react-icons/rx";
import DataContext from '../../context/DataContext';

const ViewUser = () => {
    const {setLogged} = useContext(DataContext);
    const cargos = ['Admin','Gerente','Funcionário'];
    const navigate = useNavigate();
    const params = useLocation();
    let user = params.state.user;
    let userView = params.state.userView;
   
    const onLogout = () => {
        setLogged(false);
        navigate('/');
      }

     
     

    return (
        <div className={styles.container}>
    
            <Header onLogout={onLogout} userRole={user.role} showBackButton={true}/>
            
            <div className={styles.body}>
                <h4>Detalhes do Funcionário</h4>
                <div className={styles.blueline}></div>
                {userView.avatar===null?<RxAvatar className={styles.avatar_icone} size={100}/>:<img className={styles.avatar}  src={`${Api.base_storage}/${userView.avatar}`} alt={userView.name} />}
                <p className={styles.userName}>{userView.name}</p>
                <div className={styles.userDataArea}>
                    <p className={styles.userDataLabel}>Cargo</p>
                    <p className={styles.userDataText}>{`${cargos[userView.role]} na ${userView.empresa.nome}`}</p>
                </div>
                <div className={styles.userDataArea}>
                    <p className={styles.userDataLabel}>Email</p>
                    <p className={styles.userDataText}>{userView.email}</p>
                </div>
                <div className={styles.userDataArea}>
                    <p className={styles.userDataLabel}>Telefone</p>
                    <p className={styles.userDataText}>{userView.phone}</p>
                </div>
                <div className={styles.userDataArea}>
                    <p className={styles.userDataLabel}>Documento</p>
                    <p className={styles.userDataText}>{userView.doc}</p>
                </div>
                <div className={styles.userDataArea}>
                    <p className={styles.userDataLabel}>Endereço</p>
                    <p className={styles.userDataText}>{userView.address}</p>
                </div>
            
               
            </div>
           
       </div>
      )
    
    
    
}

export default ViewUser