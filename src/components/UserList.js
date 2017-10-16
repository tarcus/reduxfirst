import React from 'react'
import {Link} from 'react-router-dom'


const UserList = ({fetchUsers, users}) => {
    return(
        <div>
            <button onClick={()=>{fetchUsers()}}>Get Users</button>
            <div><h1>{ users.length > 0 ? 'Our Users' : 'There No Users'  }</h1>
            <ul>{users.map((user, index)=>{
                return(
                    <Link to={`/users/${user.id}`}><li key={user.id}>{user.name}</li></Link>
                )
                })}</ul>
            </div>
        </div>
    )
}
export default UserList;