import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types"



const initialState=[]
//reducer get state and action
export default (state=initialState,action)=>{

    // if(action.type===ADD_TODO)
    // {
    //     //add todo
    // }
    // else if(action.type===DELETE_TODO)
    // {
    //     //delete todo
    // }
    // else if(action.type===UPDATE_TODO)
    // {
    // //update todo
    // }


    switch(action.type)
    {
        case ADD_TODO:
            //add todo
            // console.log("adding todo")
            // console.log(action.payload)
            return [...state,action.payload]
        case DELETE_TODO:
            //delete todo
            const newState=state.filter((todo)=>todo.id!==action.payload)
            return newState
        case UPDATE_TODO:
            //update todo
            const updatedState=state.map(todo=>{
                if(todo.id===action.payload.todoId)
                {
                    todo.title=action.payload.todo.title
                    todo.description=action.payload.todo.description
                    
                }
                return todo
               
            })
            return updatedState
        default:
            return state
    }

}