import { useState } from "react";

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30    
    });

    const { counter1, counter2, counter3 } = counter;


    const onAddCounter1 = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        });
    }

  return (
    <div className="component">
        <h3>Counter</h3>
        
        <h5>Counter1: {counter1} </h5>
        <h5>Counter2: {counter2} </h5>
        <h5>Counter3: {counter3} </h5>
        <hr />

        <button onClick={ onAddCounter1 }
                className="btn btn-warning"> +1 </button>
      
    </div>
  )
}
