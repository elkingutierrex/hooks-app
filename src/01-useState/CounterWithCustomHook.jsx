

const CounterWithCustomHook = () => {
    const { counter } = useCounter(100);

  return (
    <div className="component">
      <h3>Counter with Hook : counter</h3>

      <button className="btn btn-primary"> -1 </button>
      <button className="btn btn-primary"> Reset </button>
      <button className="btn btn-primary"> +1 </button>
    </div>
  )
}

export default CounterWithCustomHook
