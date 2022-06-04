import {React,Fragment} from "react";
import './header.page.scss';
import { Link,Outlet} from "react-router-dom";
const Header = () => (
    <Fragment>
        <div className='navigation'>
            <Link to="/"className="logo-container">
                <img src={require('./logo.png')} alt="" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/product'>
                    Menu List
                </Link>
                <Link className="nav-link" to='/about-us'>
                    About Us
                </Link> 
                <Link className="nav-link" to='/login'>
                    Login
                </Link> 
                <Link className="nav-link" to='/sign-up'>
                    Sign Up
                </Link> 
            </div>
        </div>
        <Outlet />
    </Fragment>
)
export default Header;