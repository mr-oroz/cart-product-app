import React, {Component} from 'react';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProductList from "./components/pages/ProductList";
import Basket from "./components/pages/Basket";

class App extends Component {
    state = {
        data: [
            {
                id: 1,
                title: 'Pizza tattuu',
                rebate: 3,
                price: 120,
                text: 'Pizza bla bla',
                image: "https://joyspizza.ru/public/images/1618824011862-DSC4080.jpg"
            },
            {
                id: 2,
                title: 'Pizza tattuu',
                rebate: 3,
                price: 234,
                text: 'Pizza bla bla',
                image: "https://nasha-pizza.by/statiy/znaem-o-pizza-1.jpg"
            },
            {
                id: 3,
                title: 'Pizza tattuu',
                rebate: 5,
                price: 543,
                text: 'Pizza bla bla',
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Pizza_capricciosa.jpg"
            },
            {
                id: 4,
                title: 'Pizza tattuu',
                rebate: 10,
                price: 123,
                text: 'Pizza bla bla',
                image: "https://img.postershop.me/4260/Products/1286864_1587734461.4696_original.jpg"
            },
            {
                id: 5,
                title: 'Pizza tattuu',
                rebate: 10,
                price: 123,
                text: 'Pizza bla bla',
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_EXF4vGe0IiUnPaQJgV5H9akDTrLk3cjXQ&usqp=CAU"
            },
            {
                id: 6,
                title: 'Pizza tattuu',
                rebate: 5,
                price: 123,
                text: 'Pizza bla bla',
                image: "https://static.1000.menu/img/content-v2/7c/a7/13495/amerikanskaya-picca-na-tolstom-teste_1590479291_12_max.jpg"
            },
        ],
        basket: []
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.state !== this.state.basket) {
            localStorage.setItem('basket', JSON.stringify(this.state.basket))
        }
    }

    componentDidMount() {
        this.setState({
            basket: JSON.parse(localStorage.getItem('basket'))|| []
        })
    }

    onAddToCart = (id) => {
        const cart = this.state.basket.every(item => item.product.id !== id)
        if(cart) {
            this.setState(({data, basket}) => {
                const product = data.find(item => item.id === id)
                const newItem = {
                    product: {...product},
                    count: 1
                }
                const newArr = [...basket, newItem];
                return {
                    basket: newArr
                }
            })
        } else {
            alert('Продук довалено в корзину')
        }
    }
    onDeleteProduct = (id) => {
        this.setState(({basket}) => {
            const index = basket.findIndex(item => item.product.id === id)
            const newArr = [...basket.slice(0, index), ...basket.slice(index + 1)];
            return {
                basket: newArr
            }
        })
    }
    render() {
        const {data, basket} = this.state;
        const cart = basket.length
        return (
            <Router>
                <div className='app'>
                    <Header cart={cart}/>
                    <Switch>
                        <div className='container'>
                            <Route exact path='/'>
                                <ProductList
                                    onAddToCart={this.onAddToCart}
                                    data={data}/>
                            </Route>
                            <Route path='/cart'>
                                <Basket
                                    onDeleteProduct={this.onDeleteProduct}
                                    exact
                                    basket={basket}/>
                            </Route>
                        </div>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;