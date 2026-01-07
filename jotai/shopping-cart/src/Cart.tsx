import { useAtom } from "jotai"
import { cartAtom, CartItem, totalAtom } from "./atoms"

export function Cart() {
    const [cart, setCart] = useAtom(cartAtom);
    const [total] = useAtom(totalAtom);

    const addItem = (item: CartItem) => {
        setCart(prev => [...prev, item])
    }

    const removeItem = (id: number) => {
        setCart(prev => prev.filter((item: CartItem) => item.id !== id))
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {
                    cart.map((item: CartItem) => (
                        <li key={item.id} className="d-flex justify-content-between my-2">
                            <span>{item.name} - ${item.price}</span>
                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <hr />
            {cart.length > 0 ? <h3>Total: ${total}</h3> : <p>Cart is empty</p>}
            <button className="btn btn-dark" onClick={() => addItem({ id: Math.random() * cart.length * 5 * 1, name: "Apple", price: 199 })}>Add Apple</button>
            <button className="btn btn-dark mx-2" onClick={() => addItem({ id: Math.random() * cart.length * 5 * 2, name: "Orange", price: 59 })}>Add Orange</button>
        </div>
    )
}