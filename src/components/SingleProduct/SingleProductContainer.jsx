import React from 'react'
import {connect} from 'react-redux'
import SingleProduct from "./SingleProduct"
import  {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const SingleProductContainer =({product})=>{
    // const id = props.match.param.id


    if (product){
        return  (
            <div>
                <SingleProduct product={product}/>
            </div>
        )
    }
    else
    {
        return (
            <div>
                Refresh page
            </div>
    )
    }




}

let mapStateToProps = (state,ownProps) => {
    const id=ownProps.match.params.id
    const products=state.firestore.data.products
    const product = products ? products[id]: null
    return{
    product:product
    }
}

export default compose(withRouter,
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products'}
    ])
)(SingleProductContainer)