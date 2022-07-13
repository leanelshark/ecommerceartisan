import React from 'react'
import { useReducer } from 'react'
import { TYPES } from '../actions/shoppingAction';
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducer'
import ProductItem from '../components/ProductItem'
import CartItem from '../components/CartItem'
import '../styles/masonry.css'
import Button from 'react-bootstrap/Button'

const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART,payload: id });

}

const delFromCart = (id, all = false) => {
  if (all) {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  }
  else {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  }
};

const clearCart = () => {
   dispatch({
        type: TYPES.CLEAR_CART,
    });
}

  return (
    <div className="products-masonry container">
      <div className="col">
        <section className="products-masonry-filter mt-4 mt-lg-5 mb-4 ">
          <article className='box grid-responsive'>
                      {products.map(product => (
                          <ProductItem key={product.id} data={product} addToCart={addToCart} />
                      ))}
          </article>
          <h3 className="text-center">Carrito</h3>
          <article className='box'>
            <Button variant="primary" className="text-center btn-primary" onClick={clearCart}>Clear Cart</Button>
            <div className='box grid-responsive'>
              {cart.map((item, index) => (
                    <CartItem key={index} data={item} delFromCart={delFromCart}/>
                ))}
            </div>
          </article>
        </section>
      </div>           
    </div>
  )
}

export default ShoppingCart 