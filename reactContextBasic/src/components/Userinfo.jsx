import {React,useContext} from 'react'
import userContext from '../contexts/userContext'
function Userinfo() {
    const {userData} = useContext(userContext)
 
return (
  <>
    <h1>{userData.name}</h1>
    <h2>{userData.age}</h2>
    {userData.username ? <h3>userData.username</h3> : <h3>Blank data</h3>}
  </>
);
}

export default Userinfo