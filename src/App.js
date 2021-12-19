import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './components/store/cart-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function closeCartHandler() {
    setCartIsShown(false);
  }

  function showCartHandler() {
    setCartIsShown(true);
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
