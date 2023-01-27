import React from 'react'
import Header from '../../components/header/Header';
import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.body}>
        <h4>Olá Julio Cesar ! O que você deseja ?</h4>
        <div className={styles.blueline}></div>
        </div>
       
    </div>
  )
}

export default Main