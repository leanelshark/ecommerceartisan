import {TYPES} from '../actions/shoppingAction';
import image1 from '../assets/img/mesa1.jpg';
import image2 from '../assets/img/mesa2.jpg';
import image3 from '../assets/img/mesa3.jpg';
import image4 from '../assets/img/mesa4.jpg';
import image5 from '../assets/img/mesa5.jpg';
import image6 from '../assets/img/mesa6.jpg';
import image7 from '../assets/img/mesa7.jpg';
 
export const shoppingInitialState = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            image: image1
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            image: image2
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30,
            image: image3
        },
        {
            id: 4,
            name: 'Product 4',
            price: 40,
            image: image4
        },
        {
            id: 5,
            name: 'Product 5',
            price: 50,
            image: image5
        },
        {
            id: 6,
            name: 'Product 6',
            price: 60,
            image: image6
        },
        {
            id: 7,
            name: 'Product 7',
            price: 60,
            image: image7
        }
    ],
    cart: [

    ],
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            {
                let newItem = state.products.find(product => product.id === action.payload);

                let itemInCart = state.cart.find(item => item.id === newItem.id);


                return  itemInCart 
                    ?{
                        ...state,
                        cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item),

                    }
                    :{
                        ...state,
                        cart: [...state.cart, { ...newItem, quantity: 1 }]
                    }             
            }
        case TYPES.REMOVE_ONE_FROM_CART:
            {
                let itemToDelete = state.cart.find(item => item.id === action.payload);

                return itemToDelete.quantity > 1 ? {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item),
                }
                :{
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
            }
        case TYPES.REMOVE_ALL_FROM_CART:
            {
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
            }
        case TYPES.CLEAR_CART: return shoppingInitialState;
            
        default:
            return state;
    }
}
