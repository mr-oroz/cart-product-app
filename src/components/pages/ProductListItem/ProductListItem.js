import React, {Component} from 'react';
import s from './ProductListItem.module.css';
import {Link} from "react-router-dom";

class ProductListItem extends Component {
    render() {
        const {title, price, image, rebate, idx, onAddToCart} = this.props;
        return (
            <>
                <div className={s.card}>
                    <Link to={`/details/${idx}`}>
                        <img
                            style={{
                                width: '100%',
                                height: 250
                            }}
                            src={image}
                            alt=""/>
                        <div className={s.cart__description}>
                            <span className={s.title}>{title}</span>
                            <p className={s.price}>price: {price}$</p>
                            <p className={s.rebate}>rebate: {rebate}%</p>
                        </div>
                    </Link>
                    <div className={s.btn__card}>
                        <button
                            onClick={onAddToCart}
                            className={s.btn__add}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductListItem;