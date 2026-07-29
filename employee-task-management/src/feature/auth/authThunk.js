import { createAsyncThunk } from "@reduxjs/toolkit";
import {getUserLogin} from './authAPI'
export  const login = createAsyncThunk("auth/login",
    async(userData,thunkAPI)=>{
        try{
            const response = await getUserLogin(userData);
            return response;
        }catch(error){
         return thunkAPI.rejectWithValue(
            error.response?.data?.message || "Login Failed"
        );
        }
    
})