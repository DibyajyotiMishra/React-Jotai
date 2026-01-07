import { atom } from "jotai";
import { loadable } from "jotai/utils"

export const asyncUserAtom = atom(async () => {
    const randomUserId = Math.floor(Math.random() * 10) + 1
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`)
    return resp.json()
})

export const loadableUserAtom = loadable(asyncUserAtom)
