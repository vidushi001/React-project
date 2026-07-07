import { useState } from 'react'
import './App.css'
import userContext from './contexts/userContext'
import Userinfo from './components/userinfo'
import Infoupdate from './components/Infoupdate'

const userDataobj = {
  name: "Vidushi",
  age: 34
}
function App() {
  const [userData, setuserdata]=useState(userDataobj)
  const setAge =(age) =>{setuserdata((prev)=>  ({...prev,age:age}))}
  const setName = (name) =>{setuserdata((prev)=>  ({...prev,name:name}))}
  return (
    <userContext.Provider value={{userData,setName,setAge}}>
      <h1>Basic context first</h1>
      <h6>here more more text.........</h6>
      <Userinfo />
      <Infoupdate />
    </userContext.Provider>
  )
}

export default App
