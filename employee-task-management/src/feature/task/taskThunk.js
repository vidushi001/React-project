import { createAsyncThunk } from "@reduxjs/toolkit";
import {createTask,getTaskList} from './taskAPI';

export const createNewTask = createAsyncThunk(
    'create/task',async(taskData,thunkAPI)=>{
        try{
        let response = await createTask(taskData)
        return response;
        }catch(error){
            return thunkAPI.rejectWithValue(
            error.response?.data?.message || "Error during creating task"
        );
        }
     
    }
)

export const getTasklist = createAsyncThunk(
    'get/tasklist',async(username,thinkAPI)=>{
        try{
            let response = await getTaskList(username)
            return response
        }catch(error){
            return thinkAPI.rejectWithValue(
                error.response?.data?.message || "Error during getting tasks"
        )
        }
    }
)