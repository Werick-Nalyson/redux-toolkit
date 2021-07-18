import { useReduxSelector } from "../../hooks"
import { selectCounterValue } from "../../store/slices/counter/selectors"


export default function Counter () {
  const counter = useReduxSelector(selectCounterValue)
  
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  )
}