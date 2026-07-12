import React from 'react'

import './addTodo.css'

function AddTodo({
    handleTodo,
    saveInput,
    inputVal,
    isEdit

}) {


  return (
    <div className="todo-container">
        <h2>Add Todo</h2>

        <form className="todo-form" onSubmit={handleTodo}>
            <input
            type="text"
            value={inputVal}
            placeholder="Enter a todo..."
            onChange={(e) => saveInput(e.target.value)}
            />

            <button type="submit">{isEdit ? 'Edit Todo' : 'Add Todo'}</button>
        </form>
        </div>
  )
}

export default AddTodo