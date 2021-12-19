import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";
import CartContext from '../store/cart-context';

function Cart(props) {
   const cartCtx = useContext(CartContext);

   const cartItems = (
      <ul className={classes['cart-items']}>
         {cartCtx.items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
   );

   function orderHandler() {
      console.log("Ordering..");
   }

   return (
      <Modal onBackdropClicked={props.onClose}>
         {cartItems}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount.toFixed(2)}</span>
         </div>
         <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            <button onClick={orderHandler} className={classes.button}>Order</button>
         </div>
      </Modal>
   );
}

export default Cart;
