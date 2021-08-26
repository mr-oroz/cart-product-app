import React, {Component} from 'react';
import s from './Header.module.css';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        const {cart} = this.props
        return (
            <div className={s.header}>
                <div className="container">
                    <div className={s.header__menu}>
                        <h2>Pizza</h2>
                        <ul>
                            <Link to='/'>
                                <li className={s.menu}>Menu</li>
                            </Link>
                            <Link to='/cart'>
                                <li className={s.cart}>
                                    <i className="fa fa-shopping-cart">
                                        <span className='cart-length'>{cart}</span>
                                    </i>
                                    <span className={s.text}>Cart</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;