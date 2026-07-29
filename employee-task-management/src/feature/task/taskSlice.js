import { createSlice } from "@reduxjs/toolkit";
import {createNewTask,getTasklist} from './taskThunk';
let initialState ={
    taskData:[],
    error:false,
    isLoading:false
}

  const taskSlice = createSlice({
name:"task",
initialState ,
reducers: {},
extraReducers:(builder)=>{
    builder
    .addCase(createNewTask.pending,(state)=>{
        error:false
        isLoading:true
    })
    .addCase(createNewTask.fulfilled,(state,action)=>{
        error:false
        isLoading:false
    })
    .addCase(createNewTask.rejected,(state)=>{
        error:true
        isLoading:false
    })

    .addCase(getTasklist.pending,(state)=>{
        error:false
        isLoading:true
    })
    .addCase(getTasklist.fulfilled,(state,action)=>{
        state.taskData = action.payload;
        error:false
        isLoading:false
    })
    .addCase(getTasklist.rejected,(state)=>{
        error:true
        isLoading:false
    })
}
})
export default taskSlice.reducer;