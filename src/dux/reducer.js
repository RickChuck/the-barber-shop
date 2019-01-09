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
    service_type: '',
    service_provider: '',
    app_date: '',
    app_time: '',
    price: '',
    avg_time: '',
}


const PRODUCT = 'PRODUCT';
const CART = 'CART';
const PROD_NAME ='PROD_NAME';
const PROD_PRICE = 'PROD_PRICE';
const DESCRIP = 'DESCRIP';
const IMAGE = 'IMAGE';
const PROD_ID = 'PROD_ID';
// const QUANTITY = 'QUANTITY';
// const TYPE = 'TYPE';
// const PROV = 'PROV';
// const DATE = 'DATE';
// const TIME = 'TIME';
// const PRICE = 'PRICE';
// const AVGTIME = 'AVGTIME';


export default function reducer(state=initialState, action){
    console.log(action)
    switch(action.type){
        case PRODUCT:
            return Object.assign({}, state, {products: action.payload});
    
        case CART:
            return Object.assign({}, state, {cart: action.payload});

        case PROD_NAME:
            return Object.assign({}, state, {product_name: action.payload});

        case PROD_PRICE:
            return Object.assign({}, state, {product_price: action.payload});
        
        case DESCRIP:
            return Object.assign({}, state, {product_description: action.payload});

        case IMAGE:
            return Object.assign({}, state, {img: action.payload});

        case PROD_ID:
            return Object.assign({}, state, {product_id: action.payload});
        
        // case QUANTITY:
        //     return Object.assign({}, state, {quantity: action.payload});
    }
}

export function updateProducts(products){
    return{
        type: PRODUCT,
        payload: products
    }
}

export function updateCart(cart){
    return{
        type: CART,
        payload: cart
    }
}

export function updateName(name){
    return{
        type: PROD_NAME,
        payload: name
    }
}

export function updateProdPrice(prodPrice){
    return{
        type: PROD_PRICE,
        payload: prodPrice
    }
}

export function updateDescrip(description){
    return{
        type: DESCRIP,
        payload: description
    }
}

export function updateImage(image){
    return{
        type: IMAGE,
        payload: image
    }
}

export function updateProdId(id){
    return{
        type: PROD_ID,
        payload: id
    }
}

// export function increaseQuantity(quantity){
//     return{
//         type: QUANTITY,
//         payload: quantity
//     }
// }