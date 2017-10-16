import React,{Component} from 'react'
import UserList from '../UserList'
import OneUser from '../OneUser'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {fetchUsers, fetchOneUser} from '../../actions/fetchUsers'



class UserContainer extends Component {


    render(){
        const {fetchUsers, fetchOneUser} = this.props;

        return(
            <div>
                <Switch>
                    <Route exact path="/users" render={
                        ()=> <UserList fetchUsers={fetchUsers} users={this.props.users} />} />
                    <Route path="/users/:id(\d+)" render={
                        (props)=> <OneUser fetchOneUser={fetchOneUser} user={this.props.user} 
                        id={props.match.params.id} />} />
                </Switch>
               {/* <UserList fetchUsers={fetchUsers} users={this.props.users}/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        users: state.userState.users,
        user: state.userState.user
    }
}



export default connect(mapStateToProps, {fetchUsers,fetchOneUser})(UserContainer)