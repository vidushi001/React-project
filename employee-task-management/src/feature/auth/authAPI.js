import api from '../../api/axios';


 async function getUserLogin(formData){
    
    let response =await api.post('/auth/login',formData);
    console.log(response,formData)
    let loggedIndata =  response?.data ||  null;
    return loggedIndata;
 }

 async function getUserName(){
    
    let response =await api.get('/auth/users');
    console.log(response)
    let loggedIndata =  response?.data ||  null;
    return loggedIndata;
 }
 export {getUserLogin,getUserName}