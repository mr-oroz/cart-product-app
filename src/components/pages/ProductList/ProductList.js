import React, { Component } from 'react';
import ProductListItem from "../ProductListItem";

class ProductList extends Component {
    render() {
        const { data, onAddToCart } = this.props;
        const elements = data.map((elem, index) => {
            return <ProductListItem
                onAddToCart={()=> onAddToCart(elem.id)}
                key={elem.id}
                {...elem} />
        })
        return (
            <div className='product-list'>
                {elements}
            </div>
        );
    }
}

export default ProductList;
