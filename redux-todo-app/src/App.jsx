
import './App.css'
import {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { useDispatch } from 'react-redux'
import { addTodo,editTodo } from './redux/todoSlice'
function App() {
 const [inputValue, setInputValue] = useState("");
 const [isEdit, setIsEditing] = useState(false);
 const [editId, setEditId] = useState(null);


const dispacher = useDispatch()
    const saveInput = (value) => {
        setInputValue(value)
    }

    function handleTodo(e){
        e.preventDefault(); 
        if(isEdit){
          dispacher(editTodo({name:inputValue,id:editId}))
        }else{
          dispacher(addTodo({name:inputValue})) 
        }
        setInputValue('')
        setIsEditing(false);
        setEditId(null);
    }

    function editTodoName(ele){
    setInputValue(ele.name);
    setIsEditing(true);
    setEditId(ele.id);
    }
  return (
    <>
     <h1>React redux basic todo</h1>
     <AddTodo inputVal={inputValue} isEdit = {isEdit} saveInput={saveInput} handleTodo ={handleTodo} />
     <TodoList editTodoName = {editTodoName} />
    </>
  )
}

export default App
