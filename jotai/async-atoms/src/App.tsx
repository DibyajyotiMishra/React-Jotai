import './App.css';
import { useAtom } from 'jotai';
import { loadableUserAtom } from './atoms';

export function App() {
  const [user] = useAtom(loadableUserAtom)

  if (user.state === "hasError") {
    return <div>Something went wrong</div>
  }

  if (user.state === "loading") {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>User Data</h1>
      <p>Name: {user.data.name}</p>
      <p>Email: {user.data.email}</p>
      <button className='text-center btn btn-outline-dark' onClick={() => window.location.reload()}>Refresh</button>
    </>
  );
}
