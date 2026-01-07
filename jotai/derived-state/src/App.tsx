import './App.css';
import { useAtom } from 'jotai';
import { Controls } from './Controls';
import { counterAtom } from './atoms';
import { DoubleCounter } from './DoubleCounter';


export function App() {
  const [count] = useAtom(counterAtom)
  return (
    <>
      <h1>Count: {count}</h1>
      <Controls />
      <DoubleCounter />
    </>
  );
}
