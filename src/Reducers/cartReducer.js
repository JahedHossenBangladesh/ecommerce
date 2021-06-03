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

}

    return state;
}

export default cartReducer;