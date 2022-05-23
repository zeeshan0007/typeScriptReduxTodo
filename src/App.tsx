import React,{FC} from 'react';
import {AddTodoForm} from './components/AddTodoForm';
import {TodoList} from './components/TodoList';
import './App.css';
export const  App:FC=()=> {
  return (
    <div className="App">
        <AddTodoForm />
			<TodoList /> 
    </div>
  );
}
