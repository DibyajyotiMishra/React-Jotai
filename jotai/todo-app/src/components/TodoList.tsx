import { useAtom } from "jotai";
import { Todo, todosAtom, toggleTodoAtom, updateTodoAtom, removeTodoAtom } from "../store";
import { MdDelete } from "react-icons/md";


function TodoListItems() {
    const [todos] = useAtom(todosAtom)
    const [, toggleTodo] = useAtom(toggleTodoAtom)
    const [, updateTodo] = useAtom(updateTodoAtom)
    const [, removeTodo] = useAtom(removeTodoAtom)

    return <>
        {
            todos.map((todo: Todo) => (
                <div className="input-group mb-3" key={todo.id}>
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
                    </div>
                    <input type="text" className="form-control" value={todo.text} onChange={(event) => updateTodo({ id: todo.id, text: event.target.value })} />
                    <button className="btn btn-outline-danger px-5" type="button" onClick={() => removeTodo(todo.id)}><MdDelete className="mb-1" /></button>
                </div>
            ))
        }
    </>
}

export function TodoList() {
    return (
        <div className="mb-3 text-center">
            <TodoListItems />
        </div>
    )
}