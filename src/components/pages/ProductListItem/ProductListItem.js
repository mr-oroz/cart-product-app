import React, { Component } from 'react';
import s from './ProductListItem.module.css';

class ProductListItem extends Component {
    render() {
        const { title, price, image, rebate, onAddToCart } = this.props;
        return (
            <>
                <div className={s.card}>
                    <img
                        style={{
                            width: '100%',
                            height: 250
                        }}
                        src={image}
                        alt="" />
                    <div className={s.cart__description}>
                        <span className={s.title}>{title}</span>
                        <p className={s.price}>price: {price}$</p>
                        <p className={s.rebate}>rebate: {rebate}%</p>
                    </div>
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