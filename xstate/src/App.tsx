import { useMachine } from '@xstate/react';
import './App.css';
import { myMachine } from './machines/myFirstMachine';
import { AnyEventObject } from 'xstate';

export function App() {
  const [state, send] = useMachine(myMachine)
  console.log(state)
  return (
    <>
      <h1>Hello from XState</h1>
      <p>{JSON.stringify(state.value)}</p>
      <button onClick={() => { send({ type: "MOUSEOVER" }) }}>Mouse Over</button>
      <button onClick={() => { send({ type: "MOUSEOUT" }) }}>Mouse Out</button>
    </>
  );
}
