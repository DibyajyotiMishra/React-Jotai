import { useAtom } from "jotai"
import { counterAtom } from "./atoms"

export function Controls() {
    const [, setCount] = useAtom(counterAtom)
    return (
        <>
            <button className='btn btn-outline-success' onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button className='btn btn-outline-danger mx-2' onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </>
    )
}