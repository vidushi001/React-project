import { createSlice } from "@reduxjs/toolkit";
import {login} from './authThunk'

let initialState = {
    user:{
        username:null,
        password:null
    },
    isLoggedIn:false,
    error:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout(state){
            state.user.username=null
            state.user.password=null
            state.user.isLoggedInUser=false
            localStorage.removeItem("username")
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.isLoggedIn=false
            state.error=null
        })
        .addCase(login.fulfilled,(state, action)=>{
            console.log(action.payload)
            state.isLoggedIn=true
            state.error=null
            localStorage.setItem("token",action.payload.access_token)
            localStorage.setItem("refreshToken",action.payload.refreshToken)
            
        })
        .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      });
    }
})

export default authSlice.reducer;
export const {logout} = authSlice.actions