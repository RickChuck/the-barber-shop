let initialState = {
    user: {},
    cart: [],
    products: [],
    product_name:'',
    product_price:'',
    product_description:'',
    img:'',
    product_id: 0,
    quantity: 0,
    client_name: '',
    service_type: '',
    service_provider: '',
    app_date: '',
    app_time: '',
}


const CART = 'CART';
const QUANTITY = 'QUANTITY';
const CLIENT_NAME = 'CLIENT_NAME'
const TYPE = 'TYPE';
const PROV = 'PROV';
const DATE = 'DATE';
const TIME = 'TIME';
const RESET_INFO = 'RESET_INFO'


export default function reducer(state=initialState, action){
    console.log(action)
    switch(action.type){
        case CART:
            return Object.assign({}, state, {cart: action.payload});
        
        case QUANTITY:
            return Object.assign({}, state, {quantity: action.payload});

        case TYPE:
            return Object.assign({}, state, {service_type: action.payload});
        
        case CLIENT_NAME:
            return Object.assign({}, state, {client_name: action.payload});

        case PROV:
            return Object.assign({}, state, {service_provider: action.payload});

        case DATE:
            return Object.assign({}, state, {app_date: action.payload});

        case TIME:
            return Object.assign({}, state, {app_time: action.payload});

        case RESET_INFO:
            return initialState
        
        default:
            return state;
    }
};


export function updateCart(cart){
    return{
        type: CART,
        payload: cart
    }
}

export function increaseQuantity(quantity){
    return{
        type: QUANTITY,
        payload: quantity
    }
}

export function updateType(type){
    return{
        type: TYPE,
        payload: type
    }
}

export function updateUserName(clientName){
    return{
        type: CLIENT_NAME,
        payload: clientName
    }
}

export function updateProvider(prov){
    return{
        type: PROV,
        payload: prov
    }
}

export function updateDate(date){
    return{
        type: DATE,
        payload: date
    }
}

export function updateTime(time){
    return{
        type: TIME,
        payload: time
    }
}


export function resetValues(){
    return {
        type: RESET_INFO
    }
}