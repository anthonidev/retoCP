import { Icandy } from "./Candy"

export interface CartState {
    items: itemCart[] | null
    amount: number | null
    total_items: number | null
}
export interface itemCart {
    candy: Icandy
    count: number | null
}


