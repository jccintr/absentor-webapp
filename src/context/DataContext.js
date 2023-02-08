import { createContext,useState,useEffect } from "react";
//import { Routes, Route } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
   





  return (
      <DataContext.Provider value={{
       /*
        produtos,
        produtosBackup,
        setProdutos,
        categorias,
        taxas,
        pagamentos,
        getProdutosError,
        getCategoriasError,
        getTaxasError,
        getPagamentosError,
        isLoading
      */

      }}>
        {children}
      </DataContext.Provider>
  )

}

export default DataContext;
