import React, { useState } from 'react'
import './style.css'

export const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleClickRegister = () => {
    setTodoList([...todoList, todo])
  }
  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.currentTarget.value)} />
      <button onClick={handleClickRegister}>登録</button>
      <p>入力内容: {todo}</p>
      <ul className='todolist'>
        {todoList.map((item, index) => <li key={`${item}${index}`}>{item}</li>)}
      </ul>
    </div>
  )
}
