import {getFirestore} from "redux-firestore";

const ADD_PRODUCT = 'products/ADD-PRODUCT ';
const DELETE_PRODUCT = 'products/DELETE-PRODUCT ';
let initialState = {
    currentProduct: null,
    products: [
        {
            name: "garbage",
            id: 1,
            description: 'New box for your clothes',
            count: 35,
            imgUrl: "https://lh3.googleusercontent.com/proxy/ydeSyxW6ydb4bkVQi-Op89d9Cu4aXn4OyxLaxVdZyh6Cpw5hJVjx5GHdZCSPkQvLXdHz51HI3kHvBPkBSov0A_EnjfSPcj3ciWdq5-I2vQjT-hB6",
            size: {width: 20, height: 30},
            weight: '1kg 200g',
            comments: ['comment', 'comment']
        },
        {
            name: "gaming chair",
            id: 2,
            description: 'Very comfortable chair',
            count: 35,
            imgUrl: "data:image/jpeg;base64,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",
            size: {width: 220, height: 700},
            weight: '10kg',
            comments: ['comment2', 'comment2']
        },
        {
            name: "backpack",
            id: 3,
            description: 'Huge space for you',
            count: 35,
            imgUrl: "data:image/jpeg;base64,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",
            size: {width: 500, height: 500},
            weight: '2 kg',
            comments: ['comment3', 'comment3']
        }
    ]
}
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {//completing actions :"add_product,delete_product"
            console.log(action.product)
            let newProduct = {

                id: state.products.length + 1,
                name: action.product.name,
                description: action.product.description,
                count: action.product.count,
                imgUrl: action.product.imgUrl,
                size: action.product.size,
                weight: action.product.weight,
                comments: ['','']
            }

            return {...state, products: [...state.products, newProduct]}
        }
        case DELETE_PRODUCT:{
            console.log(action.product)
            return {...state,products:[...state.products]}
        }
        default:
            return state
    }
}
export const addProduct = (product) => ({type: ADD_PRODUCT, product})//action creators
export const deletedProduct=product=>({type: DELETE_PRODUCT,product})
export const createProduct = product => {

    return (dispatch, getState, getFirestore) => {//thunk - performs a async request

        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product,
        })
            .then(() => {

                dispatch(addProduct)
            })
    }
}
export const deleteProduct= productId=>{
    return(dispatch,getState,getFirestore)=>{
        const firestore = getFirestore();
        firestore.collection('products').doc(productId).delete()
            .then(()=>{
                dispatch(deletedProduct)
            })
}

}
export default productsReducer
