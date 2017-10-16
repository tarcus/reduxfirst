import React,{Component} from 'react';
import {Button, Input, Form, FormGroup, FormFeedback} from 'reactstrap'

class TodoList extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.todoInput.value)
        this.props.onSubmitForm(this.todoInput.value)
        this.todoInput.value = '';
    }

    delTodo = (e) =>{
        let id = e.target.getAttribute('id');
        console.log(id)
        this.props.removeTodo(id)
    }

    render(){
        return(
            <div>
                <div>
                    <Form inline onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Input valid={''} size='sm' type="text" innerRef={(input)=>{this.todoInput = input}}/>
                            <FormFeedback>Wrong Bitch!</FormFeedback>
                            <Button color="primary" size="sm">Add Todo</Button>
                        </FormGroup>
                    </Form>
                </div>
                <div>
                    <ul>
                       {this.props.todos.map(todo => {
                           return(
                           <li key={todo.id} id={todo.id} onClick={this.delTodo}>{todo.todo}</li>
                        )})} 
                    </ul>
                </div>    
            </div>
        )
    }
}

export default TodoList;