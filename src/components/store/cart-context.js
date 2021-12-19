import React, { useReducer } from "react";

const CartContext = React.createContext({
   items: [],
   totalAmount: 0,
   addItem: function (item) { },
   removeItem: function (id) { }
});

const initialCartState = { items: [], totalAmount: 0 };

function cartReducer(state, action) {
   if (action.type === "ADD") {
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
   } /*else if (action.type === "REMOVE") {
      // return { items: state.items.filter(item => item.id !== action.id), totalAmount: state.totalAmount + +action.item.price };
   } else {
      // throw new Error();
   }*/
   return initialCartState;
}

export function CartContextProvider(props) {

   const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

   function addItem(item) {
      dispatchCartAction({ type: "ADD", item: item });
   }

   function removeItem(id) {
      dispatchCartAction({ type: "REMOVE", id: id });
   }

   return (
      <CartContext.Provider value={{
         items: cartState.items,
         totalAmount: cartState.totalAmount,
         addItem: addItem,
         removeItem: removeItem
      }}>
         {props.children}
      </CartContext.Provider>
   );
}

export default CartContext;
