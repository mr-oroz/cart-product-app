import React, {Component} from 'react';
import s from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={s.header}>
                <div className="container">
                    <div className={s.header__menu}>
                        <ul>
                            <li className={s.menu}>Menu</li>
                            <li className={s.cart}>
                                <i className="fa fa-shopping-cart">
                                    <span className='cart-length'>0</span>
                                </i>
                                <span className={s.text}>Cart</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;