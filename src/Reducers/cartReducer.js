const initialData = {
    cart:[]
}

function cartReducer(state=initialData,action){
switch(action.type){
    case 'ADD_CART':
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        case 'DELETE': 
        return{
            ...state,
            cart:state.cart.filter(item => item.imgName != action.payload.imgName)
        }
}

    return state;
}

export default cartReducer;