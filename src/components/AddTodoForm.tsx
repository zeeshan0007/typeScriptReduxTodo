import React, {FC } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../features/ActionTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm,SubmitHandler} from 'react-hook-form'
import * as yup from "yup";

const schema = yup.object({
    input: yup.string().required(),
  })
  type FormInput={
	  input:string,
  }


export const AddTodoForm:FC = () => {
	

	const { register,reset, handleSubmit, formState:{ errors }, setValue } = useForm<FormInput>({
		resolver: yupResolver(schema),
      });

    
	const dispatch=useDispatch();

	const onSubmit: SubmitHandler<FormInput> = (data) => {

		dispatch({
			type:ADD_TODO,
			payload:{
				id:Date.now(),
				title:data.input,
				completed:false,
				
			}
		})
		reset()
	};




	return (
		<form onSubmit={handleSubmit(onSubmit)} name='frommm' className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				{...register('input')}
				defaultValue=''
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
			/>
			<p style={{ color: 'red' }}>{errors.input?.message}</p>
			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>

		</form>
	);
};
















// // import { useDispatch } from 'react-redux';
// // import { addTodo } from '../features/TodoSlice';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";


// const schema = yup.object({
//     input: yup.string().required(),
//   })



// const AddTodoForm = () => {

//     const { register, handleSubmit, formState:{ errors } } = useForm({
//         resolver: yupResolver(schema)
//       });



//     // const dispatch=useDispatch();

// 	const onSubmit = (data) => {
//         console.log(data)
//         // dispatch(
//         //     addTodo({
//         //             title:data.input
//         //         })
//         //)
        
// 	};
 
   
// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)} className='form-inline mt-3 mb-3'>
// 			<label className='sr-only'>Name</label>
// 			<input {...register('input')}
// 				type='text'
// 				className='form-control mb-2 mr-sm-2'
// 				placeholder='Add todo...'
//                 name='input'
// 			/><p>{errors.input?.message}</p>
// 			<button type='submit' className='btn btn-primary mb-2' >
// 				Submit
// 			</button>
            
            

// 		</form>
// 	);
// };

// export default AddTodoForm;
