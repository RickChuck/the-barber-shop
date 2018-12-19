let initialState = {
    user: {},
    products: [
        // product_name = '',
        // product_price = '',
        // product_description = '',
        // img = '',
        // product_id = 0,
        // quantity = 0,
    ],
    service_type: '',
    service_provider: '',
    app_date: '',
    app_time: '',
    price: '',
    avg_time: '',
}

const PRODUCT = 'PRODUCT';
const TYPE = 'TYPE';
const PROV = 'PROV';
const DATE = 'DATE';
const TIME = 'TIME';
const PRICE = 'PRICE';
const AVGTIME = 'AVGTIME';



export default function reducer(state=initialState, action){
    switch(action.type){
        case PRODUCT:
            return Object.assign({}, state, {products: action.payload})
    }
}

export function updateProducts(products){
    return{
        type: PRODUCT,
        payload: products
    }
}