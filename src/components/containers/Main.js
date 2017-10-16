import React from 'react'
import {Switch, Route} from 'react-router-dom'
import TodoContainer from './TodoContainer';
import UserContainer from './UserContainer';
import Home from './Home'
import NotFound from '../../components/NotFound'

const Main = ()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/todolist" component={TodoContainer} />
                <Route path="/users" component={UserContainer} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default Main;