import React,{Component} from 'react'
import {NavLink as RRNavLink, Link} from 'react-router-dom'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {collapsed: true};
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar(){
        this.setState({collapsed: !this.state.collapsed})
    }

    render(){
        return(
            <header>
                <Navbar color="dark" dark expand="sm">
                    <NavbarBrand href="/" className="mr-auto"><Link to="/" className="text-white">LoGo</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav>
                        <NavItem>
                            <NavLink exact to='/' tag={RRNavLink} activeClassName="active">Main</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/todolist' tag={RRNavLink} activeClassName="active">TodoList</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/users' tag={RRNavLink} activeClassName="active">Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </header>

            
        )
    }    
}

export default Header;