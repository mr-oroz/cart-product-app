import React, {Component} from 'react';
import s from './Details.module.css';
import {withRouter} from 'react-router-dom';

class Details extends Component {

    render() {
        const idx = (this.props.match.params.id);
        const {title, price, rebate, id, image} = this.props.data[idx]
        return (
            <>
                <div key={id} className={s.detail}>
                    <img
                        style={{
                            width: '100%',
                            height: 400
                        }}
                        src={image}
                        alt=""/>
                    <div className={s.cart__description}>
                        <span className={s.title}>{title}</span>
                        <p className={s.price}>price: {price}$</p>
                        <p className={s.rebate}>rebate: {rebate}%</p>
                    </div>
                </div>
                })
            </>
        )
    }


}

export default withRouter(Details);