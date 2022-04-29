import { AppDispatch } from "../app/store";
import { get_item_ok } from "../features/cartSlice";
import { getStoreLocal } from '../helpers/helpRedux';
import { Icandy } from "../types/insterfaces/Candy";
import { CartState, itemCart } from "../types/insterfaces/Cart";
import { setAlert } from "./alert";

export const add_item = (item: Icandy) => async (dispatch: AppDispatch) => {
    let cart: CartState;
    let shouldAddItem = true;
    let order_item: itemCart
    let cartNew: itemCart[] = [];
    let amount = 0.0;
    let count = 1
    console.log("antes");

    if (localStorage.getItem('cart')) {
        console.log("if");

        cart = JSON.parse(localStorage.getItem('cart') || "{}");
        cart.items?.map((cart_item: itemCart) => {
            if (cart_item.candy.price + cart_item.candy.description + cart_item.candy.name === item.price + item.description + item.name && cart_item.count) {
                shouldAddItem = false;
                cart_item.count += 1
            }
        });
        order_item = {
            candy: item,
            count: 1
        };
        if (shouldAddItem) {
            cart.items?.push(order_item)
        }
        if (cart.items !== null) {
            cart.total_items = cart.items?.length
        }
        cart.items?.map(candy_item => {
            if (candy_item.count !== null && cart.amount) {
                cart.amount += parseFloat(candy_item.candy.price) * candy_item.count

            }
        })
        dispatch(get_item_ok(cart));
    } else {
        console.log("else");

        order_item = {
            candy: item,
            count: count,
        };
        cartNew.push(order_item)
        cartNew.map(cartNewItem => {
            if (cartNewItem.count !== null) {
                amount += parseFloat(cartNewItem.candy.price) * cartNewItem.count

            }
        })
        dispatch(get_item_ok({
            items: cartNew,
            amount: parseFloat(amount.toFixed(2)),
            total_items: 1
        }));
    }
}

export const get_items = () => async (dispatch: AppDispatch) => {
    if (getStoreLocal('cart')) {
        let cart: CartState;

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart') || "{}");
            dispatch(get_item_ok(cart));

        }
    }
}

export const update_item = (item: Icandy, count: number) => async (dispatch: AppDispatch) => {

    let cart: CartState;

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart') || "{}");
        cart.items?.map((cart_item: itemCart) => {
            if (cart_item.candy.price + cart_item.candy.description + cart_item.candy.name === item.price + item.description + item.name && cart_item.count) {
                cart_item.count = count

            }

        });
        cart.amount = 0
        cart.items?.map(itemcandy => {
            if (cart.amount !== null && itemcandy.count) {
                cart.amount += parseFloat(itemcandy.candy.price) * itemcandy.count
            }
        })

        dispatch(get_item_ok(cart));

    }

}

export const remove_item = (item: Icandy) => async (dispatch: AppDispatch) => {

    let cart: CartState;
    let new_cart: CartState;

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart') || "{}");
        new_cart = {
            items: [],
            amount: 0,
            total_items: 0
        }
        cart.items?.map((cart_item: itemCart) => {
            if (cart_item.candy.price + cart_item.candy.description + cart_item.candy.name !== item.price + item.description + item.name) {
                new_cart.items?.push(cart_item)
            }
        });
        new_cart.amount = 0
        new_cart.items?.map(itemcandy => {
            if (new_cart.amount !== null && itemcandy.count) {
                new_cart.amount += parseFloat(itemcandy.candy.price) * itemcandy.count
            }
        })
        if (new_cart.items !== null) {
            new_cart.total_items = new_cart.items?.length
        }
        dispatch(get_item_ok(new_cart));

    }
}