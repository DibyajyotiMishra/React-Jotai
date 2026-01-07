import './App.css';
import { Provider as JotaiProvider } from 'jotai';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from "./components/TodoList";

export function App() {
  return (
    <JotaiProvider>
      <h1 className='display-2 text-center fw-bold'>To Do List</h1>
      <div className="container">
        <TodoList />
        <TodoAdd />
      </div>
    </JotaiProvider>
  );
}
