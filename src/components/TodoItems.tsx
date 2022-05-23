// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_TODO, EDIT_TODO, MOVE_DOWN, MOVE_UP, TOGGLE_CHECK } from '../features/ActionTypes';
import {IMytodo} from '../interfaces/my-todo.interface';
import { useSelector } from 'react-redux';
import {RootState} from '../redux/Store'

export const TodoItem  = ({ id, title, completed } : IMytodo) => {

	const todos = useSelector((state:RootState)=>state.todos)

	const dispatch=useDispatch();
	// const [isEditing,setIsEditing]=useState(false);
	// const [editedText,setEditedText]=useState('');

	const toggleChange=()=>{
		dispatch({
			type:TOGGLE_CHECK,
			payload:id,
			completed: !completed
		})
	}
	const handleDelete=()=>{
		dispatch({
			type:DELETE_TODO,
			payload:id
		})
	}
	const handleEditing=()=>{
		
		dispatch({
			type:EDIT_TODO,
			payload:id
		})
		
		
	}
	const handleMoveUp=()=>{
		dispatch({
			type:MOVE_UP,
			payload:id
		})
	}
	const handleMoveDown=()=>{
	
		dispatch({
			type:MOVE_DOWN,
			payload:id
		})
	}

	return (
		(<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
		<div className='d-flex justify-content-between'>
			<span className='d-flex align-items-center'>
				<input type='checkbox' className='mr-3' onChange={toggleChange}checked={completed}></input>
				{title}
			</span>
			<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
			<button className='btn' onClick={handleEditing}>Edit</button>
			<button className='btn' onClick={handleMoveUp}>moveUp</button>
			<button className='btn' onClick={handleMoveDown}>moveDown</button>
		</div>
	</li>)	
	);
};

