const SET_PRODUCT="item/SET-PRODUCT"
let initialState={
    product:{  name: "garbage",
        id:1,
        description: 'New box for your clothes',
        count: 35,
        imgUrl: "https://lh3.googleusercontent.com/proxy/ydeSyxW6ydb4bkVQi-Op89d9Cu4aXn4OyxLaxVdZyh6Cpw5hJVjx5GHdZCSPkQvLXdHz51HI3kHvBPkBSov0A_EnjfSPcj3ciWdq5-I2vQjT-hB6",
        size:{width: 20,height:30},
        weight:'1kg 200g' ,
        comments:['comment','comment']},
}
const itemReducer=(state=initialState ,action)=>{
    switch (action.type){
        case SET_PRODUCT:
            return {...state,product: action.product}
        default:
            return state
    }
}
export const setProduct = (product)=>({type: SET_PRODUCT,product})
export default itemReducer