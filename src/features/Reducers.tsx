import {TOGGLE_CHECK, DELETE_TODO,ADD_TODO,MOVE_UP,MOVE_DOWN, EDIT_TODO, } from "./ActionTypes";

interface Mytodo{
    id?:number,
    title?:string,
    completed?:boolean
    
}
// interface toggleChangeAction{
//     type:'TOGGLE_CHECK',
//     payload: {
//         id:  number ,
//         completed: boolean
//     }
// }
// interface DeleteTodoAction{
//     type:'DELETE_TODO',
//     payload:number
// }
// interface AddtodoAction{
//     type: 'ADD_TODO'
//     payload:Mytodo
// }
// interface MoveUpAction{
//     type: 'MOVE_UP'
//     payload:number
// }
// interface MoveDownAction{
//     type: 'MOVE_DOWN'
//     payload:number
// }
// interface EdittodoAction{
//     type: 'EDIT_TODO',
//     payload:Mytodo
// }
interface Actions{
    type:string,
    payload: Mytodo 
}

// type Actions= toggleChangeAction | DeleteTodoAction | AddtodoAction | MoveUpAction | MoveDownAction | EdittodoAction;

interface IInitialState{
    todos: Mytodo[] 
    text:string
    editId:string
}

const initialState : IInitialState = {
    todos: [
        {id:1,title:'todo1',completed:false},
        {id:2,title:'todo2',completed:false},
        {id:3,title:'todo3',completed:false},
    ],
    text:'',
    editId:''

}



const reducerTodo=(state=initialState,action:Actions) => {
  

    switch(action.type) {
        
        case TOGGLE_CHECK:
            {
                const oldData=[...state.todos]
              
                const index=oldData.findIndex((todo)=>todo.id === action.payload)
                debugger;
                oldData[index].completed=action!.payload!.completed!
            
            return{
                ...state,
                todos:oldData
                
              }}
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload] 
              }
        case EDIT_TODO:
                { 
                //     const oldData=[...state.todos]
                //     const index=oldData.findIndex((todo)=>todo.id===action.payload)
                    
                //    console.log(index)
                    
                    return{
                        ...state,
                    editId:action.payload, 

                    
                    }
                    
                    
                    


                    // ...state,
                    // todos: updateTodo(state.todos, action.payload.id, action.payload.text),

                //     const updatedTodos=state.todos.map((todo)=>{
                //         if(todo.id===action.payload.id){
                //             return{...todo,title:action.payload.title}
                            
                //         }return todo;
                //     })
                //     return{
                //         ...state,
                //         todos:updatedTodos
                //     }
                   
                    
                }
      

        case DELETE_TODO:
            { 
                return{
                ...state,
                todos:state.todos.filter((todo)=>todo.id !==action.payload),
               
    
            }}
       
        case MOVE_UP:
            {
                const oldData=[...state.todos]
                const index=oldData.findIndex((todo)=>todo.id===action.payload)
            if(index===0){
                oldData.push(oldData.splice(index, 1)[0]);
            }else if(index > 0) {
              let temp = oldData[index]//clicked object wwill be here 
              oldData[index] = oldData[index-1]
              oldData[index-1]=temp   
              }
            return{
                    ...state,
                    todos:oldData
    
            }}
            case MOVE_DOWN:
                {
                    const oldData=[...state.todos]
                    let i=oldData.length-1
                    const index=oldData.findIndex((todo)=>todo.id===action.payload)
                if(index===i){
                    let lastVal=oldData.splice(i)
                    oldData.unshift(...lastVal)
                
                }else if(index < i ) {
                  let temp = oldData[index]//clicked object wwill be here 
                  oldData[index] = oldData[index+1]
                  oldData[index+1]=temp   
                  }
                return{
                        ...state,
                        todos:oldData
        
                }}

        
        default:return state
    }
}

export default reducerTodo;
