import React, { Component } from 'react';
import s from './Basket.module.css'

class Basket extends Component {
    render() {
        const { basket, onDeleteProduct } = this.props;
        console.log(basket)
        if (basket.length === 0) {
            return (
                <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Корзина пуста</h2>
            )
        }

        return (
            <div className={s.basket}>
                {
                    basket.map((elem, index) => {
                        return (
                            <div key={elem.product.id} className={s.basket__card}>
                                <img
                                    style={{
                                        width: 150,
                                        height: "100%"
                                    }}
                                    src={elem.product.image} alt="" />
                                <div className={s.desciption}>
                                    <span className={s.text}>{elem.product.title}</span>
                                    <span className={s.price}>price: {elem.product.price}$</span>
                                    <span className={s.rebate}>rebate: {elem.product.rebate}%</span>
                                </div>
                                <span
                                    onClick={()=> onDeleteProduct(elem.product.id)}
                                    className={s.delete}>
                                    X
                                </span>
                                <div className={s.things}>
                                    <span className={s.minus}>-</span>
                                    <span className={s.count}>{elem.count}</span>
                                    <span className={s.plus}>+</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Basket;