import React,{createContext,useEffect,useState} from 'react'
import { getData, getUser} from '../../Service/Api' 
export const DATA = createContext([]) 
function DataContext({ children }) {
    const [mehsul, setMehsul] = useState([])
    const [user, setUser] = useState([])
    useEffect(() => {
      getData().then(res => setMehsul (res)) 
      getUser().then(res => setUser(res))
    }, [])

      return
      <>
      <DATA.Provider value={{ mehsul, user }}>
        {children} 
      </DATA.Provider>
      </>
  I
  }
  export default DataContext
