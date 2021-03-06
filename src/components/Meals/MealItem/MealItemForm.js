import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
   const amountRef = useRef();
   const [amountIsValid, setAmountIsValid] = useState(true);

   function submitHandler(event) {
      event.preventDefault();

      const enteredAmountString = amountRef.current.value;
      const enteredAmountNumber = +enteredAmountString;

      if (
         enteredAmountString.trim().length === 0 ||
         enteredAmountNumber < 1 ||
         enteredAmountNumber > 5
      ) {
         setAmountIsValid(false);
         return;
      }

      props.onAddToCart(enteredAmountNumber);
   }

   return (
      <form className={classes.form} onSubmit={submitHandler}>
         <Input
            ref={amountRef}
            label='Amount'
            input={{
               id: 'amount_' + props.id,
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1',
            }}
         />
         <button>+ Add</button>
         {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
   );
};

export default MealItemForm;
