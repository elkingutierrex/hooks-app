import {useCounter} from "../hooks/useCounter";


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement,reset } = useCounter(100);

  return (
    <div className="component">
      <h3>Counter with Hook : { counter} </h3>

      <button className="btn btn-primary" onClick={ decrement}> -1 </button>
      <button className="btn btn-primary" onClick={ reset }> Reset </button>
      <button className="btn btn-primary" onClick={ increment }> +1 </button>
    </div>
  )
}

