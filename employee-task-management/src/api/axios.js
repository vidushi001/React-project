import axios from 'axios'
// async function getUserLogin(fommData){
//     const response = await axios.get("/userData.json");
//     return response?.data?.find(({username,password})=>username === fommData.username && password === fommData.password) ||   {username:""}
// }

// export {getUserLogin} 

const API = axios.create({
    //  "baseURL": "http://localhost:5000/api",
    "baseURL": "http://localhost:3000/api",
     "timeout": 10000,
     "headers": {
        "Content-Type": "application/json"
     }
})

API.interceptors.request.use(
   (config)=>{
   const token = localStorage.getItem("token");
   if(token){
      config.headers.Authorization = `Bearer ${token}`;
   }
   console.log("Request:", config);
   return config;
},
  (error) => {
    return Promise.reject(error);
  })

  API.interceptors.response.use(
  (response) => {
    console.log("Response:", response);

    return response;
  },
  async(error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      let refreshToken =  localStorage.getItem('refreshToken')
      let refreshResponse = await API.post('/auth/refresh',{'refreshToken':refreshToken});
      if(refreshResponse?.data?.access_token){
         localStorage.setItem("token",refreshResponse.data.access_token)

            originalRequest.headers.Authorization =
                `Bearer ${refreshResponse.data.access_token}`;

            // Retry Original Request

            return API(originalRequest)
      }else{
         window.location.href = "/login";
      }
      
    }

    return Promise.reject(error);
  }
);

export default API
//Every API in your project will use the same Axios instance. Later, you'll add interceptors here 
// to automatically attach the JWT token.
