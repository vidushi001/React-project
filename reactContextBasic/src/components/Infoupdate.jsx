import React, { useContext } from 'react'
import userContext from '../contexts/userContext'
import '../assets/infoupdate.css'

function Infoupdate() {
    const {setAge,setName} = useContext(userContext);
    let username=''
    let userAge = 0
    function setUserName(name){
        username = name
    }
    function setUserAge(age){
        userAge = age
    }
    
  return (
    <div className="update-container">
        <h2>Update User Information</h2>

        <div className="input-group">
            <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={() => setName(username)}>
            Change Name
            </button>
        </div>

        <div className="input-group">
            <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => setUserAge(e.target.value)}
            />
            <button onClick={() => setAge(Number(userAge))}>
            Change Age
            </button>
        </div>
        </div>
  )
}

export default Infoupdate