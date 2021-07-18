import { useReduxDispatch } from '../../hooks'
import { decrementCounter, incrementCounter, randomIncrementCounter, resetCounter } from '../../store/slices/counter'

import Counter from '../../components/Counter'

export default function Main() {
  const dispatch = useReduxDispatch()

  const randomIncrement = () => {
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    dispatch(randomIncrementCounter(randomNumber))
  }

  return (
    <div>
      <Counter />

      <span>
        <button onClick={() => dispatch(incrementCounter())}>Aumentar</button>
        <button onClick={() => dispatch(decrementCounter())}>Diminuir</button>
        <button onClick={() => dispatch(resetCounter())}>Resetar</button>
        <button onClick={() => randomIncrement()}>Aumentar randomicamente</button>
      </span>

    </div>
  )
}