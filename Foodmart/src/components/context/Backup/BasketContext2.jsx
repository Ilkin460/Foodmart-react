import React,{createContext,useState} from 'react'
export const BASKET = createContext([])

function BasketContext({children}) {
    const [sebet,setSebet]= useState([])
    function addBasket(id,name){
        setSebet([...sebet,{id,name}])


    }
    return (
        <>
        <BASKET.Provider value={{addBasket}}>
            {children}
        </BASKET.Provider>
        </>
    )
}

export default BasketContext
