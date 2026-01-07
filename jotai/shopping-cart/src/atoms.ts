import { atom } from "jotai";

export interface CartItem {
    id: number;
    name: string;
    price: number;
}


export const cartAtom = atom<CartItem[]>([]);

export const totalAtom = atom((get) => get(cartAtom).reduce((total, item) => total + item.price, 0));
