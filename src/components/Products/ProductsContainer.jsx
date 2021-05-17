import React from 'react'
import {connect} from 'react-redux'
import Products from "./Products";
import {setProduct} from "../../redux/item-reducer";
import {createProduct, deleteProduct} from "../../redux/products-reducer";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";

class ProductsContainer extends React.Component{
    componentDidMount() {
    console.log(this.props)
    }

    render() {
        return <div>
            <Products products={this.props.products} createProduct={this.props.createProduct} setProduct={this.props.setProduct} deleteProduct={this.props.deleteProduct}/>

        </div>
    }

}
let mapStateToProps = (state)=>{
    console.log(state)
    return {
    // products:state.firestore.ordered.products
        products: state.firestore.ordered.products
            || state.productsPage.products
}
}
// let mapDispatchToProps=(dispatch)=>{
//     return{
//         deleteProduct:(id)=>dispatch(deleteProduct(id))
//     }
// }
export default compose(
    connect(mapStateToProps,{deleteProduct,createProduct,setProduct}),
    firestoreConnect([
        {collection: 'products'}
    ])
)(ProductsContainer)
// connect(mapStateToProps,{createProduct,setProduct})