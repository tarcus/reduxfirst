import React,{Component} from 'react'

class OneUser extends Component {
    componentDidMount(){
        this.props.fetchOneUser(this.props.id);
    }
    render(){
        //const {id, user, fetchOneUser} = this.props
        return(
            <div>
                {/*<button onClick={()=>fetchOneUser(id)}>Get User</button>*/}
                <h1>{this.props.user.id ? 'User Profile': 'Push The Button!'}</h1>
                <div>{this.props.user.name}</div>
            </div>
        )
    }
}
export default OneUser;