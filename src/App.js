import './App.css';
import {withRouter, Switch, Redirect, Route} from "react-router-dom";
import React from 'react'

import ProductsContainer from "./components/Products/ProductsContainer";
import SingleProductContainer from "./components/SingleProduct/SingleProductContainer";

import 'firebase/firestore'


class App extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return <div>
            <Switch>

                <Route exact path='/' render={() => <Redirect to={'/products'}/>}/>
                <Route path='/products' render={() => <ProductsContainer/>}/>
                <Route path='/product/:id?' render={() => <SingleProductContainer/>}/>

            </Switch>
        </div>


    }
}

export default withRouter(App);

