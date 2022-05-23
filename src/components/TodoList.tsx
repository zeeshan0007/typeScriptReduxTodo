import React,{FC} from 'react';
import {TodoItem} from './TodoItems'
import { useSelector } from 'react-redux';
import {RootState} from '../redux/Store'


export const TodoList:FC = () => {
	const todos = useSelector((state:RootState)=>state.todos)
	
	return (
		<ul className='list-group'>
			
			{todos.map((todo:any) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

