import React,{createContext,useEffect,useState} from 'react'
export const DATA = createContext([])

function DataContext({children}) {


  return (
    <>
      <DATA.Provider value={mehsul}>
        {children}
      </DATA.Provider>
    </>
  )
}

export default DataContext
