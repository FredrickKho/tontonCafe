import {React,Fragment, useContext} from "react";
import './header.page.scss';
import { Link,Outlet} from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../firebase/firebase";
import Cart from "../../component/Cart/cart.component";
import CartDropdown from "../../component/Cart/Cart-dropdown/cart-dropdown.component";
const Header = () => {
    const {currentUser} = useContext(UserContext);
    
    return(
        <Fragment>
            <div className='navigation'>
                <Link to="/"className="logo-container">
                    <img src={require('../../images/header-logo.png')} alt="" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/product'>
                        Menu List
                    </Link>
                    <Link className="nav-link" to='/about-us'>
                        About Us
                    </Link> 
                    {currentUser ? (<span className="nav-link" onClick={signOutUser}>Sign Out</span>)
                    : (<Link className="nav-link" to='/auth'>
                        Login/Register
                        </Link> )
                    }
                    <Cart></Cart>
                </div>
                <CartDropdown></CartDropdown>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Header;