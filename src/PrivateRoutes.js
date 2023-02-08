import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useContext } from 'react'


const PrivateRoutes = () => {
  //let auth = {'token':true}
  const {logged} = useContext(DataContext);
  return (
    logged ? <Outlet/>: <Navigate to='/'/>
  )
}

export default PrivateRoutes