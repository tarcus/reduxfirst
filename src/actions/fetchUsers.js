import axios from 'axios'
import * as types from './action-types';

export function fetchUsers(){
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch(fetchUsersSuccess(response.data))
        })
    }
}

export function fetchOneUser(id){
    return (dispatch)=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=> {
            dispatch(fetchOneUserSuccess(response.data))
        })
    }
}

export function fetchUsersSuccess(users){
    return{
        type: types.FETCH_USERS_SUCCESS,
        users
    }
}

export function fetchOneUserSuccess(user){
    return {
        type: types.FETCH_ONE_USER_SUCCESS,
        user
    }
}