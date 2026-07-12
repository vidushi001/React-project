import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Date.now(),
      name: "student",
    },
  ],
};


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action) => {
            state.todos.push({
                id:Date.now(),
                name:action.payload.name
            })
        },
        editTodo : (state,action) => {
            state.todos.forEach((pre)=> {
                if(pre.id === action.payload.id){
                    pre.name = action.payload.name
                }
            })
        },
        deleteTodo : (state,action) =>{
            state.todos = state.todos.filter(ele=> ele?.id !== action.payload.id)
        }
    }


})

export const {addTodo,deleteTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer;

