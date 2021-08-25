import React, {Component} from 'react';
import ProductListItem from "../ProductListItem/ProductListItem";

class ProductList extends Component {
    render() {
        return (
            <div className='container product-list'>
                <ProductListItem/>
            </div>
        );
    }
}

export default ProductList;