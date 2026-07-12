import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { editTodo,deleteTodo } from '../redux/todoSlice'

function TodoList({editTodoName}) {
    const dispacher = useDispatch()
    let todolist = useSelector(
    (state) => state.todos)
  
  
  return (
     <div className="todo-list-container">
      <h2>Todo List</h2>

      {todolist.map((ele) => (
        <div className="todo-item" key={ele.id}>
          <span className="todo-name">{ele.name}</span>

          <div className="todo-actions">
            <button onClick = {()=>editTodoName(ele)} className="icon-btn edit-btn">
              ✏️
            </button>

            <button onClick = {()=>dispacher(deleteTodo({"id":ele.id}))} className="icon-btn delete-btn">
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
  
}


export default TodoList
