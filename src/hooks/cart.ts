import axios from "axios";
import { AppDispatch } from "../app/store";
import { add_item_ok, get_item_ok } from "../features/cartSlice";
import { films_ok } from "../features/filmSlice";
import { getStoreLocal } from '../helpers/helpRedux';
import { Icandy } from "../types/insterfaces/Candy";
import { CartState, itemCart } from "../types/insterfaces/Cart";
import { setAlert } from "./alert";

export const add_item = (item: Icandy) => async (dispatch: AppDispatch) => {

    let cart: itemCart[] = [];
    let cartRes: CartState;
    let amount = 0.0;
    let total_items = 0;
    let count = 1
    let order_item: itemCart

    if (getStoreLocal('cart')) {
        cartRes = JSON.parse(getStoreLocal('cart') || '{}')
        cart = []
        cartRes.items?.map((cart_item: itemCart) => {
            if (cart_item.candy.price + cart_item.candy.description + cart_item.candy.name === item.price + item.description + item.name && cart_item.count) {
                cart_item.count += 1
                cart.push(cart_item);
                console.log("cart_item if", cart);

            } else {
                console.log("befor ", cart);
                let searh = cart.find((element: itemCart) => {
                    element === cart_item
                })
                if (!searh) {
                    cart.push(cart_item);
                    console.log("cart_item else", cart);

                }

                order_item = {
                    candy: item,
                    count: count,
                };
                cart.push(order_item);
                console.log("order_item", cart);

            }



            amount += parseFloat(cart_item.candy.price) * parseFloat(cart_item.count !== null ? cart_item.count.toString() : "0");
            total_items += 1
        });



        dispatch(add_item_ok({
            items: cart,
            amount: parseFloat(amount.toFixed(2)),
            total_items: total_items
        }));
    } else {
        order_item = {
            candy: item,
            count: count,
        };

        cart.push(order_item)
        console.log("sinStore", order_item);
        console.log("order sinStore", cart);

        dispatch(add_item_ok({
            items: cart,
            amount: parseFloat(amount.toFixed(2)),
            total_items: total_items
        }));
    }


}



export const get_items = () => async (dispatch: AppDispatch) => {

    let cart = [];
    let amount = 0.0;
    let total_items = 0;

    if (getStoreLocal('cart')) {
        cart = JSON.parse(getStoreLocal('cart') || '["asdas":"sasdasd"]')

        cart = cart.items

        if (cart !== undefined && cart !== []) {
            cart.map((item: any) => {
                amount += parseFloat(item.candy.price) * parseFloat(item.count);
            });
            total_items = cart.length
        } else {
            cart = []
            total_items = 0
            amount = 0.0
        }

    }

    dispatch(get_item_ok({
        items: cart,
        amount: parseFloat(amount.toFixed(2)),
        total_items: total_items
    }));
}


// export const update_item = (item, count) => async dispatch => {

//     let cart = [];
//     let cartres = [];
//     let amount = 0.0;
//     let total_items = 0;
//     let data = []

//     let order_item = {}

//     if (getStoreLocal('cart') && getStoreLocal('cart') !== []) {
//         cartres = JSON.parse(getStoreLocal('cart'))
//         cartres = JSON.parse(cartres)
//         cartres = cartres[0]

//     }
//     cart = []
//     cartres.map(cart_item => {
//         if (cart_item.product.id.toString() !== item.id.toString()) {
//             cart.push(cart_item);
//         }
//     });


//     order_item = {
//         product: item,
//         count: count,
//     };

//     cart.push(order_item);

//     if (getStoreLocal('cart')) {
//         data = JSON.parse(getStoreLocal('cart'))
//         data = JSON.parse(data)
//         data = data[0]

//         data.map(item => {
//             amount += parseFloat(item.product.price) * parseFloat(item.count);
//         });
//         total_items = data.length
//     }

//     dispatch({
//         type: UPDATE_ITEM,
//         payload: [cart, parseFloat(amount.toFixed(2)), total_items]
//     });
// }


// export const remove_item = item => async (dispatch: AppDispatch) => {

//     let cart = [];
//     let amount = 0.0;
//     let total_items = 0;
//     let new_cart = [];

//     if (getStoreLocal('cart')) {
//         cart = JSON.parse(getStoreLocal('cart'))
//         cart = JSON.parse(cart)
//         cart = cart[0]

//         cart.map(item_cart => {
//             amount += parseFloat(item_cart.product.price) * parseFloat(item_cart.count);
//             if (item_cart.product.id.toString() !== item.id.toString()) {
//                 new_cart.push(item_cart);
//             }
//         });
//         total_items = cart.length

//     }

//     dispatch({
//         type: REMOVE_ITEM,
//         payload: [new_cart, parseFloat(amount.toFixed(2)), total_items]
//     });
// }