import { useState } from "react";

const CounterApp = () => {
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
    <>
        <h3>Counter1: {counter1} </h3>
        <h3>Counter2: {counter2} </h3>
        <h3>Counter3: {counter3} </h3>
        <hr />

        <button onClick={ onAddCounter1 }
                className="btn btn-warning"> +1 </button>
      
    </>
  )
}

export default CounterApp
