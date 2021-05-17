import thunk from 'redux-thunk'
import productsReducer from './products-reducer';
import {createFirestoreInstance,firestoreReducer } from 'redux-firestore'
import { getFirestore} from 'redux-firestore'
import firebaseData from "../firebaseData/firebaseData";
import {firebaseReducer} from "react-redux-firebase";
import itemReducer from "./item-reducer";

const {createStore, combineReducers, applyMiddleware, compose} = require("redux")
let reducers = combineReducers({
    itemPage:itemReducer,
    productsPage: productsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

const rrfConfig={
name: 'products'
}
const store = createStore(reducers//An object that holds the complete state of your app. The only way to change its state is by dispatching actions
    , compose(
   applyMiddleware( thunk.withExtraArgument(getFirestore))

    )
)
export const rrfProps = {
    firebaseData,
    config: rrfConfig,
    createFirestoreInstance
}
window.__store__ = store
export default store