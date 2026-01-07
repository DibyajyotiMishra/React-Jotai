import { useAtom } from "jotai";
import { doubleCounterAtom } from "./atoms";

export function DoubleCounter() {
    const [count] = useAtom(doubleCounterAtom)
    return <h2>Double COunter: {count}</h2>
}