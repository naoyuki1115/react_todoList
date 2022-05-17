import React from 'react'
import './style.css'
import logo from '../assets/logo.svg';
import { TodoForm } from '../components/TodoForm'

export const TodoList = (prpps) => {
    return (
      <div className='App'>
        <img src={logo} className="App-logo" alt="../assets/logo" />
        <h1>{prpps.title}</h1>
        <TodoForm />
      </div>
    )
  }