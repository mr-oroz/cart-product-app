import React, {Component} from 'react';
import s from './ProductListItem.module.css';

class ProductListItem extends Component {
    render() {
        return (
            <>
                <div className={s.card}>
                    <img
                        style={{
                            width: '100%',
                            height: 250
                        }}
                        src='https://images.ua.prom.st/1662507386_w640_h640_iskusstvennye-frukty-yabloko.jpg'
                        alt=""/>
                    <div className={s.cart__description}>
                        <span className={s.title}>Title</span>
                        <p className={s.price}>price: 15$</p>
                    </div>
                    <div className={s.btn__card}>
                        <button className={s.btn__add}>Add to Cart</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        style={{
                            width: '100%',
                            height: 250
                        }}
                        src='https://images.ua.prom.st/1662507386_w640_h640_iskusstvennye-frukty-yabloko.jpg'
                        alt=""/>
                    <div className={s.cart__description}>
                        <span className={s.title}>Title</span>
                        <p className={s.price}>price: 15$</p>
                    </div>
                    <div className={s.btn__card}>
                        <button className={s.btn__add}>Add to Cart</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        style={{
                            width: '100%',
                            height: 250
                        }}
                        src='https://images.ua.prom.st/1662507386_w640_h640_iskusstvennye-frukty-yabloko.jpg'
                        alt=""/>
                    <div className={s.cart__description}>
                        <span className={s.title}>Title</span>
                        <p className={s.price}>price: 15$</p>
                    </div>
                    <div className={s.btn__card}>
                        <button className={s.btn__add}>Add to Cart</button>
                    </div>
                </div>
                <div className={s.card}>
                    <img
                        style={{
                            width: '100%',
                            height: 250
                        }}
                        src='https://images.ua.prom.st/1662507386_w640_h640_iskusstvennye-frukty-yabloko.jpg'
                        alt=""/>
                    <div className={s.cart__description}>
                        <span className={s.title}>Title</span>
                        <p className={s.price}>price: 15$</p>
                    </div>
                    <div className={s.btn__card}>
                        <button className={s.btn__add}>Add to Cart</button>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductListItem;