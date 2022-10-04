import './cart.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../images/shopping-bag.svg'


const Cart = () => {
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>0</span>
        </div>
    )

}
export default Cart