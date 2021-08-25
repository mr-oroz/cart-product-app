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
    render() {
        return (
            <Router>
                <div className='app'>
                    <Header/>
                    <Switch>
                        <Route>
                            <ProductList/>
                        </Route>
                        <Route>
                            <Basket/>
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;