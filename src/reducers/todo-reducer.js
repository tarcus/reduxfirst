import * as types from '../actions/action-types'


const initialState = {todos:[
    {id: '1', todo: 'Kill YOurself'}
]}

export default function(state = initialState, action){
    switch (action.type){
        case types.ADD_TODO:
        return {...state, todos: [...state.todos, action.payload]}
        case types.REMOVE_TODO:
        let newTodoArr = state.todos.filter(todo=>{
            return todo.id !== action.payload             
        })
        return {...state, todos: [...newTodoArr] }
        default:
        return state;
    }

}