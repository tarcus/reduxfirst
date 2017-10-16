import * as types from '../actions/action-types'

const initialState = {
    users:[],
    user: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case types.FETCH_USERS_SUCCESS:
         return {...state, users:[...state.users, ...action.users]}

        case types.FETCH_ONE_USER_SUCCESS:
         return {...state,users:[...state.users], user: {...action.user}}

        default:
         return state;
    }
       
}




