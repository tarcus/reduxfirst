import * as types from './action-types';

export function addTodo(todoText){
    return {
        type: types.ADD_TODO,
        payload: {
            id: Math.random().toString(34).slice(2),
            todo: todoText
        }
    }
}

export function removeTodoAction(id){
    return{
        type: types.REMOVE_TODO,
        payload: id
    }
}