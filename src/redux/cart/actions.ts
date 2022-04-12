
import { GoodsType } from "../../components/types";
import { actionTypes } from "./types";

export const addToCart = (product: GoodsType) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: product,
})

export const deleteFromCart = (product: string) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: product,
})