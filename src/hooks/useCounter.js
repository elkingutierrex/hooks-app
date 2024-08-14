import { useState } from "react";


export const useCounter = ( initialValue = 0) => {
    const [counter, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(counter + 1);
        console.log('increment');
    }
    const decrement = () =>  {
        setCounter(counter - 1);
        console.log('decrement');
    }
    const reset = () =>  {
        setCounter(initialValue);
        console.log('reset');
    }

  return {
      counter,
      increment, 
      decrement,
      reset,
  };
}
