import { useAtom } from "jotai";
import { newTodoAtom, addTodoAtom } from "../store";
import { MdAdd } from "react-icons/md";

export function TodoAdd() {
    const [newTodo, setNewTodo] = useAtom(newTodoAtom);
    const [, addTodo] = useAtom(addTodoAtom)

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Add Todo"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
            />
            <button onClick={addTodo} className="btn btn-outline-primary px-5"><MdAdd className="mb-1" /></button>
        </div>
    );
}