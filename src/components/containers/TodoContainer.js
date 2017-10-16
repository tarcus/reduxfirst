//import React,{Component} from 'react'
import {connect} from 'react-redux'
import TodoList from '../TodoList';
import {addTodo} from '../../actions/todo-actions'
import {removeTodoAction} from '../../actions/todo-actions'

// class TodoContainer extends Component{

    

//     render(){
//         return(
//             <div>
//                 <TodoList todoes={this.props.todos} />
//                 {console.log(this.props.onSubmitForm)}
//             </div>
//         )
//     }
// }

const mapStateToProps = (state)=>{
    return {
        todos: state.todoState.todos
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSubmitForm: (todoText)=>{
            dispatch(addTodo(todoText))
        },
        removeTodo: (id)=>{
            dispatch(removeTodoAction(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer;